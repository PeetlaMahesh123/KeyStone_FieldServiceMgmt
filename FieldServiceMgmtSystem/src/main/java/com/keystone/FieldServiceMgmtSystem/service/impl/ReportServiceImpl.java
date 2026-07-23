package com.keystone.FieldServiceMgmtSystem.service.impl;

import org.springframework.stereotype.Service;

import com.keystone.FieldServiceMgmtSystem.dto.ReportDTO;
import com.keystone.FieldServiceMgmtSystem.repository.CustomerRepository;
import com.keystone.FieldServiceMgmtSystem.repository.InventoryRepository;
import com.keystone.FieldServiceMgmtSystem.repository.SiteRepository;
import com.keystone.FieldServiceMgmtSystem.repository.TechnicianRepository;
import com.keystone.FieldServiceMgmtSystem.repository.WorkOrderRepository;
import com.keystone.FieldServiceMgmtSystem.service.ReportService;

@Service
public class ReportServiceImpl implements ReportService {

    private final CustomerRepository customerRepository;
    private final SiteRepository siteRepository;
    private final TechnicianRepository technicianRepository;
    private final InventoryRepository inventoryRepository;
    private final WorkOrderRepository workOrderRepository;

    public ReportServiceImpl(
            CustomerRepository customerRepository,
            SiteRepository siteRepository,
            TechnicianRepository technicianRepository,
            InventoryRepository inventoryRepository,
            WorkOrderRepository workOrderRepository) {

        this.customerRepository = customerRepository;
        this.siteRepository = siteRepository;
        this.technicianRepository = technicianRepository;
        this.inventoryRepository = inventoryRepository;
        this.workOrderRepository = workOrderRepository;
    }

    @Override
    public ReportDTO getDailyReport() {

        return generateReport("DAILY");
    }

    @Override
    public ReportDTO getMonthlyReport() {

        return generateReport("MONTHLY");
    }

    @Override
    public ReportDTO getYearlyReport() {

        return generateReport("YEARLY");
    }

    @Override
    public ReportDTO getOverallReport() {

        return generateReport("OVERALL");
    }

    private ReportDTO generateReport(String reportType) {

        Long totalCustomers = customerRepository.count();

        Long totalSites = siteRepository.count();

        Long totalTechnicians = technicianRepository.count();

        Long totalInventoryItems = inventoryRepository.count();

        Long totalWorkOrders = workOrderRepository.count();

        Long completedWorkOrders =
                workOrderRepository.countByStatus("COMPLETED");

        Long pendingWorkOrders =
                workOrderRepository.countByStatus("PENDING");

        Long assignedWorkOrders =
                workOrderRepository.countByStatus("ASSIGNED");

        Long highPriorityWorkOrders =
                workOrderRepository.countByPriority("HIGH");

        return new ReportDTO(
                reportType,
                totalCustomers,
                totalSites,
                totalTechnicians,
                totalInventoryItems,
                totalWorkOrders,
                completedWorkOrders,
                pendingWorkOrders,
                assignedWorkOrders,
                highPriorityWorkOrders
        );
    }
}
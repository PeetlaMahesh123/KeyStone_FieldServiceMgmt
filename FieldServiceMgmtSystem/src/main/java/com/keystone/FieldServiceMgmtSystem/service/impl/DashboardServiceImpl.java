package com.keystone.FieldServiceMgmtSystem.service.impl;

import org.springframework.stereotype.Service;

import com.keystone.FieldServiceMgmtSystem.dto.DashboardDTO;
import com.keystone.FieldServiceMgmtSystem.repository.CustomerRepository;
import com.keystone.FieldServiceMgmtSystem.repository.InventoryRepository;
import com.keystone.FieldServiceMgmtSystem.repository.SiteRepository;
import com.keystone.FieldServiceMgmtSystem.repository.TechnicianRepository;
import com.keystone.FieldServiceMgmtSystem.repository.WorkOrderRepository;
import com.keystone.FieldServiceMgmtSystem.service.DashboardService;

@Service
public class DashboardServiceImpl implements DashboardService {

    private final CustomerRepository customerRepository;
    private final SiteRepository siteRepository;
    private final TechnicianRepository technicianRepository;
    private final InventoryRepository inventoryRepository;
    private final WorkOrderRepository workOrderRepository;

    public DashboardServiceImpl(
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
    public DashboardDTO getDashboardData() {

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

        Long activeTechnicians =
                technicianRepository.countByActive(true);

        Long inactiveTechnicians =
                technicianRepository.countByActive(false);

        Long lowStockItems =
                inventoryRepository.countByQuantityLessThanEqual(10);

        return new DashboardDTO(
                totalCustomers,
                totalSites,
                totalTechnicians,
                totalInventoryItems,
                totalWorkOrders,
                completedWorkOrders,
                pendingWorkOrders,
                assignedWorkOrders,
                highPriorityWorkOrders,
                activeTechnicians,
                inactiveTechnicians,
                lowStockItems
        );
    }
}
package com.keystone.FieldServiceMgmtSystem.service.impl;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.keystone.FieldServiceMgmtSystem.dto.WorkOrderDTO;
import com.keystone.FieldServiceMgmtSystem.entity.Customer;
import com.keystone.FieldServiceMgmtSystem.entity.Site;
import com.keystone.FieldServiceMgmtSystem.entity.Technician;
import com.keystone.FieldServiceMgmtSystem.entity.WorkOrder;
import com.keystone.FieldServiceMgmtSystem.exception.ResourceNotFoundException;
import com.keystone.FieldServiceMgmtSystem.repository.CustomerRepository;
import com.keystone.FieldServiceMgmtSystem.repository.SiteRepository;
import com.keystone.FieldServiceMgmtSystem.repository.TechnicianRepository;
import com.keystone.FieldServiceMgmtSystem.repository.WorkOrderRepository;
import com.keystone.FieldServiceMgmtSystem.service.WorkOrderService;

@Service
public class WorkOrderServiceImpl implements WorkOrderService {

    private final WorkOrderRepository workOrderRepository;
    private final CustomerRepository customerRepository;
    private final SiteRepository siteRepository;
    private final TechnicianRepository technicianRepository;

    public WorkOrderServiceImpl(
            WorkOrderRepository workOrderRepository,
            CustomerRepository customerRepository,
            SiteRepository siteRepository,
            TechnicianRepository technicianRepository) {

        this.workOrderRepository = workOrderRepository;
        this.customerRepository = customerRepository;
        this.siteRepository = siteRepository;
        this.technicianRepository = technicianRepository;
    }

    @Override
    public WorkOrderDTO createWorkOrder(WorkOrderDTO dto) {

        Customer customer = customerRepository.findById(dto.getCustomerId())
                .orElseThrow(() -> new ResourceNotFoundException("Customer Not Found"));

        Site site = siteRepository.findById(dto.getSiteId())
                .orElseThrow(() -> new ResourceNotFoundException("Site Not Found"));

        Technician technician = technicianRepository.findById(dto.getTechnicianId())
                .orElseThrow(() -> new ResourceNotFoundException("Technician Not Found"));

        WorkOrder workOrder = new WorkOrder();

        workOrder.setWorkOrderNumber(dto.getWorkOrderNumber());
        workOrder.setTitle(dto.getTitle());
        workOrder.setDescription(dto.getDescription());
        workOrder.setPriority(dto.getPriority());
        workOrder.setStatus(dto.getStatus());
        workOrder.setScheduledDate(dto.getScheduledDate());
        workOrder.setCompletedDate(dto.getCompletedDate());

        // New Fields
        workOrder.setEstimatedDuration(dto.getEstimatedDuration());
        workOrder.setAttachment(dto.getAttachment());

        workOrder.setCustomer(customer);
        workOrder.setSite(site);
        workOrder.setTechnician(technician);

        WorkOrder saved = workOrderRepository.save(workOrder);

        return convertToDTO(saved);
    }

    @Override
    public List<WorkOrderDTO> getAllWorkOrders() {

        return workOrderRepository.findAll()
                .stream()
                .map(this::convertToDTO)
                .collect(Collectors.toList());
    }

    @Override
    public WorkOrderDTO getWorkOrderById(Long id) {

        WorkOrder workOrder = workOrderRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Work Order Not Found"));

        return convertToDTO(workOrder);
    }

    @Override
    public WorkOrderDTO updateWorkOrder(Long id, WorkOrderDTO dto) {

        WorkOrder workOrder = workOrderRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Work Order Not Found"));

        Customer customer = customerRepository.findById(dto.getCustomerId())
                .orElseThrow(() -> new ResourceNotFoundException("Customer Not Found"));

        Site site = siteRepository.findById(dto.getSiteId())
                .orElseThrow(() -> new ResourceNotFoundException("Site Not Found"));

        Technician technician = technicianRepository.findById(dto.getTechnicianId())
                .orElseThrow(() -> new ResourceNotFoundException("Technician Not Found"));

        workOrder.setWorkOrderNumber(dto.getWorkOrderNumber());
        workOrder.setTitle(dto.getTitle());
        workOrder.setDescription(dto.getDescription());
        workOrder.setPriority(dto.getPriority());
        workOrder.setStatus(dto.getStatus());
        workOrder.setScheduledDate(dto.getScheduledDate());
        workOrder.setCompletedDate(dto.getCompletedDate());

        // New Fields
        workOrder.setEstimatedDuration(dto.getEstimatedDuration());
        workOrder.setAttachment(dto.getAttachment());

        workOrder.setCustomer(customer);
        workOrder.setSite(site);
        workOrder.setTechnician(technician);

        WorkOrder updated = workOrderRepository.save(workOrder);

        return convertToDTO(updated);
    }

    @Override
    public void deleteWorkOrder(Long id) {

        WorkOrder workOrder = workOrderRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Work Order Not Found"));

        workOrderRepository.delete(workOrder);
    }

    private WorkOrderDTO convertToDTO(WorkOrder workOrder) {

        WorkOrderDTO dto = new WorkOrderDTO();

        dto.setId(workOrder.getId());
        dto.setWorkOrderNumber(workOrder.getWorkOrderNumber());
        dto.setTitle(workOrder.getTitle());
        dto.setDescription(workOrder.getDescription());
        dto.setPriority(workOrder.getPriority());
        dto.setStatus(workOrder.getStatus());
        dto.setScheduledDate(workOrder.getScheduledDate());
        dto.setCompletedDate(workOrder.getCompletedDate());

        // New Fields
        dto.setEstimatedDuration(workOrder.getEstimatedDuration());
        dto.setAttachment(workOrder.getAttachment());

        dto.setCustomerId(workOrder.getCustomer().getId());
        dto.setSiteId(workOrder.getSite().getId());
        dto.setTechnicianId(workOrder.getTechnician().getId());

        return dto;
    }
}
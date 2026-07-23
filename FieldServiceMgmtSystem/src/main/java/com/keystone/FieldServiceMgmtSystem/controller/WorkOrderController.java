package com.keystone.FieldServiceMgmtSystem.controller;

import java.util.List;

import org.springframework.web.bind.annotation.*;

import com.keystone.FieldServiceMgmtSystem.dto.WorkOrderDTO;
import com.keystone.FieldServiceMgmtSystem.service.WorkOrderService;

@RestController
@RequestMapping("/api/work-orders")
@CrossOrigin(origins = "http://localhost:5173")
public class WorkOrderController {

    private final WorkOrderService workOrderService;

    public WorkOrderController(WorkOrderService workOrderService) {
        this.workOrderService = workOrderService;
    }

    @PostMapping
    public WorkOrderDTO createWorkOrder(@RequestBody WorkOrderDTO dto) {
        return workOrderService.createWorkOrder(dto);
    }

    @GetMapping
    public List<WorkOrderDTO> getAllWorkOrders() {
        return workOrderService.getAllWorkOrders();
    }

    @GetMapping("/{id}")
    public WorkOrderDTO getWorkOrderById(@PathVariable Long id) {
        return workOrderService.getWorkOrderById(id);
    }

    @PutMapping("/{id}")
    public WorkOrderDTO updateWorkOrder(
            @PathVariable Long id,
            @RequestBody WorkOrderDTO dto) {

        return workOrderService.updateWorkOrder(id, dto);
    }

    @DeleteMapping("/{id}")
    public String deleteWorkOrder(@PathVariable Long id) {

        workOrderService.deleteWorkOrder(id);

        return "Work Order Deleted Successfully";
    }

}
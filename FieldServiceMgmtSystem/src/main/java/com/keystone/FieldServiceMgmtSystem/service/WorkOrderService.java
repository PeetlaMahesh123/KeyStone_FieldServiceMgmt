package com.keystone.FieldServiceMgmtSystem.service;

import java.util.List;

import com.keystone.FieldServiceMgmtSystem.dto.WorkOrderDTO;

public interface WorkOrderService {

    WorkOrderDTO createWorkOrder(WorkOrderDTO workOrderDTO);

    List<WorkOrderDTO> getAllWorkOrders();

    WorkOrderDTO getWorkOrderById(Long id);

    WorkOrderDTO updateWorkOrder(Long id, WorkOrderDTO workOrderDTO);

    void deleteWorkOrder(Long id);

}
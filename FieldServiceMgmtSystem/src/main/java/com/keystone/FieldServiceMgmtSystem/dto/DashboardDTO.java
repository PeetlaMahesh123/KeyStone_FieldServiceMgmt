package com.keystone.FieldServiceMgmtSystem.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class DashboardDTO {

    private Long totalCustomers;

    private Long totalSites;

    private Long totalTechnicians;

    private Long totalInventoryItems;

    private Long totalWorkOrders;

    private Long completedWorkOrders;

    private Long pendingWorkOrders;

    private Long assignedWorkOrders;

    private Long highPriorityWorkOrders;

    private Long activeTechnicians;

    private Long inactiveTechnicians;

    private Long lowStockItems;

}
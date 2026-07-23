package com.keystone.FieldServiceMgmtSystem.dto;

import java.time.LocalDate;

import lombok.Data;

@Data
public class WorkOrderDTO {

    private Long id;

    private String workOrderNumber;

    private String title;

    private String description;

    private String priority;

    private String status;

    // Scheduled / Due Date
    private LocalDate scheduledDate;

    // Completed Date
    private LocalDate completedDate;

    // Estimated Duration (Hours)
    private Integer estimatedDuration;

    // Uploaded Attachment
    private String attachment;

    // Foreign Keys
    private Long customerId;

    private Long siteId;

    private Long technicianId;

}
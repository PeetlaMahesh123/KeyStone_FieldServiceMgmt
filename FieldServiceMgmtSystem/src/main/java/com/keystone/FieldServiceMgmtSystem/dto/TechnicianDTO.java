package com.keystone.FieldServiceMgmtSystem.dto;

import java.time.LocalDateTime;

import lombok.Data;

@Data
public class TechnicianDTO {

    private Long id;

    private String employeeCode;

    private String firstName;

    private String lastName;

    private String email;

    private String phone;

    private String specialization;

    private Integer experience;

    private String status;

    private Boolean active;

    private LocalDateTime createdAt;

}
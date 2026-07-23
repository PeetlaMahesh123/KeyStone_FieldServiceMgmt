package com.keystone.FieldServiceMgmtSystem.dto;

import lombok.Data;

@Data
public class RegisterRequest {

    private String firstName;

    private String lastName;

    private String username;

    private String employeeId;

    private String email;

    private String phone;

    private String department;

    private String password;

    private String roleName;

}
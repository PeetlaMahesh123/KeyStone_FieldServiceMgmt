package com.keystone.FieldServiceMgmtSystem.dto;

import lombok.Data;

@Data
public class CustomerDTO {

    private Long id;

    private String customerCode;

    private String customerName;

    private String email;

    private String phone;

    private String company;

    private String address;

    private String city;

    private String state;

    private String pincode;

    private Boolean active;

}
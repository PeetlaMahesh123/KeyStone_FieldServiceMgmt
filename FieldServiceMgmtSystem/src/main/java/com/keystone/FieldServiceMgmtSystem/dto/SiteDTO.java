package com.keystone.FieldServiceMgmtSystem.dto;

import lombok.Data;

@Data
public class SiteDTO {

    private Long id;

    private String siteCode;

    private String siteName;

    private String address;

    private String city;

    private String state;

    private String pincode;

    private String contactPerson;

    private String contactNumber;

    private String email;

    private Boolean active;

    private Long customerId;

}
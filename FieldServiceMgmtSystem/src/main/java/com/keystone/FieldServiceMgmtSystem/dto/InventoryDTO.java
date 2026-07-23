package com.keystone.FieldServiceMgmtSystem.dto;

import lombok.Data;

@Data
public class InventoryDTO {

    private Long id;

    private String itemCode;

    private String itemName;

    private String category;

    private String description;

    private Integer quantity;

    private Double unitPrice;

    private String supplier;

    private Boolean active;

}
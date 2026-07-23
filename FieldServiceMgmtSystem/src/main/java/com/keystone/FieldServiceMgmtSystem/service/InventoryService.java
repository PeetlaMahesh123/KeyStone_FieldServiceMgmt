package com.keystone.FieldServiceMgmtSystem.service;

import java.util.List;

import com.keystone.FieldServiceMgmtSystem.dto.InventoryDTO;

public interface InventoryService {

    InventoryDTO createInventory(InventoryDTO inventoryDTO);

    List<InventoryDTO> getAllInventory();

    InventoryDTO getInventoryById(Long id);

    InventoryDTO updateInventory(Long id, InventoryDTO inventoryDTO);

    void deleteInventory(Long id);

}
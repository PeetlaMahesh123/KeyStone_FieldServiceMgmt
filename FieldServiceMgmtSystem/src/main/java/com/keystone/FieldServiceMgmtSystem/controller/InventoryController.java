package com.keystone.FieldServiceMgmtSystem.controller;

import java.util.List;

import org.springframework.web.bind.annotation.*;

import com.keystone.FieldServiceMgmtSystem.dto.InventoryDTO;
import com.keystone.FieldServiceMgmtSystem.service.InventoryService;

@RestController
@RequestMapping("/api/inventory")
@CrossOrigin(origins = "http://localhost:5173")
public class InventoryController {

    private final InventoryService inventoryService;

    public InventoryController(InventoryService inventoryService) {
        this.inventoryService = inventoryService;
    }

    @PostMapping
    public InventoryDTO createInventory(@RequestBody InventoryDTO dto) {
        return inventoryService.createInventory(dto);
    }

    @GetMapping
    public List<InventoryDTO> getAllInventory() {
        return inventoryService.getAllInventory();
    }

    @GetMapping("/{id}")
    public InventoryDTO getInventoryById(@PathVariable Long id) {
        return inventoryService.getInventoryById(id);
    }

    @PutMapping("/{id}")
    public InventoryDTO updateInventory(
            @PathVariable Long id,
            @RequestBody InventoryDTO dto) {

        return inventoryService.updateInventory(id, dto);
    }

    @DeleteMapping("/{id}")
    public String deleteInventory(@PathVariable Long id) {

        inventoryService.deleteInventory(id);

        return "Inventory Item Deleted Successfully";
    }
}
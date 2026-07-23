package com.keystone.FieldServiceMgmtSystem.service.impl;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.keystone.FieldServiceMgmtSystem.dto.InventoryDTO;
import com.keystone.FieldServiceMgmtSystem.entity.Inventory;
import com.keystone.FieldServiceMgmtSystem.exception.ResourceNotFoundException;
import com.keystone.FieldServiceMgmtSystem.repository.InventoryRepository;
import com.keystone.FieldServiceMgmtSystem.service.InventoryService;

@Service
public class InventoryServiceImpl implements InventoryService {

    private final InventoryRepository inventoryRepository;

    public InventoryServiceImpl(InventoryRepository inventoryRepository) {
        this.inventoryRepository = inventoryRepository;
    }

    @Override
    public InventoryDTO createInventory(InventoryDTO dto) {

        Inventory inventory = new Inventory();

        inventory.setItemCode(dto.getItemCode());
        inventory.setItemName(dto.getItemName());
        inventory.setCategory(dto.getCategory());
        inventory.setDescription(dto.getDescription());
        inventory.setQuantity(dto.getQuantity());
        inventory.setUnitPrice(dto.getUnitPrice());
        inventory.setSupplier(dto.getSupplier());
        inventory.setActive(dto.getActive());

        Inventory saved = inventoryRepository.save(inventory);

        return convertToDTO(saved);
    }

    @Override
    public List<InventoryDTO> getAllInventory() {

        return inventoryRepository.findAll()
                .stream()
                .map(this::convertToDTO)
                .collect(Collectors.toList());
    }

    @Override
    public InventoryDTO getInventoryById(Long id) {

        Inventory inventory = inventoryRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Inventory Item Not Found"));

        return convertToDTO(inventory);
    }

    @Override
    public InventoryDTO updateInventory(Long id, InventoryDTO dto) {

        Inventory inventory = inventoryRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Inventory Item Not Found"));

        inventory.setItemCode(dto.getItemCode());
        inventory.setItemName(dto.getItemName());
        inventory.setCategory(dto.getCategory());
        inventory.setDescription(dto.getDescription());
        inventory.setQuantity(dto.getQuantity());
        inventory.setUnitPrice(dto.getUnitPrice());
        inventory.setSupplier(dto.getSupplier());
        inventory.setActive(dto.getActive());

        Inventory updated = inventoryRepository.save(inventory);

        return convertToDTO(updated);
    }

    @Override
    public void deleteInventory(Long id) {

        Inventory inventory = inventoryRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Inventory Item Not Found"));

        inventoryRepository.delete(inventory);
    }

    private InventoryDTO convertToDTO(Inventory inventory) {

        InventoryDTO dto = new InventoryDTO();

        dto.setId(inventory.getId());
        dto.setItemCode(inventory.getItemCode());
        dto.setItemName(inventory.getItemName());
        dto.setCategory(inventory.getCategory());
        dto.setDescription(inventory.getDescription());
        dto.setQuantity(inventory.getQuantity());
        dto.setUnitPrice(inventory.getUnitPrice());
        dto.setSupplier(inventory.getSupplier());
        dto.setActive(inventory.getActive());

        return dto;
    }
}
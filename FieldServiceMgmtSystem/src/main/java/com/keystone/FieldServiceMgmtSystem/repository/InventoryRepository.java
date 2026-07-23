package com.keystone.FieldServiceMgmtSystem.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.keystone.FieldServiceMgmtSystem.entity.Inventory;

@Repository
public interface InventoryRepository extends JpaRepository<Inventory, Long> {

    Optional<Inventory> findByItemCode(String itemCode);

    boolean existsByItemCode(String itemCode);
    
    long countByQuantityLessThanEqual(Integer quantity);
}
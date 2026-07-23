package com.keystone.FieldServiceMgmtSystem.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.keystone.FieldServiceMgmtSystem.entity.WorkOrder;

@Repository
public interface WorkOrderRepository extends JpaRepository<WorkOrder, Long> {

    Optional<WorkOrder> findByWorkOrderNumber(String workOrderNumber);

    boolean existsByWorkOrderNumber(String workOrderNumber);

    long countByStatus(String status);

    long countByPriority(String priority);

}
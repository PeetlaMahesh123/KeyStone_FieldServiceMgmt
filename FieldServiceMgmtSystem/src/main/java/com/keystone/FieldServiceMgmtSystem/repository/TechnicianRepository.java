package com.keystone.FieldServiceMgmtSystem.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.keystone.FieldServiceMgmtSystem.entity.Technician;

@Repository
public interface TechnicianRepository extends JpaRepository<Technician, Long> {

    // Find by Employee Code
    Optional<Technician> findByEmployeeCode(String employeeCode);

    // Check Employee Code Exists
    boolean existsByEmployeeCode(String employeeCode);

    // Find by Email
    Optional<Technician> findByEmail(String email);

    // Check Email Exists
    boolean existsByEmail(String email);

    // Count Active Technicians
    long countByActive(Boolean active);

}
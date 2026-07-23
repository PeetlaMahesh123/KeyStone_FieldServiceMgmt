package com.keystone.FieldServiceMgmtSystem.service.impl;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.keystone.FieldServiceMgmtSystem.dto.TechnicianDTO;
import com.keystone.FieldServiceMgmtSystem.entity.Technician;
import com.keystone.FieldServiceMgmtSystem.exception.ResourceNotFoundException;
import com.keystone.FieldServiceMgmtSystem.repository.TechnicianRepository;
import com.keystone.FieldServiceMgmtSystem.service.TechnicianService;

@Service
public class TechnicianServiceImpl implements TechnicianService {

    private final TechnicianRepository technicianRepository;

    public TechnicianServiceImpl(TechnicianRepository technicianRepository) {
        this.technicianRepository = technicianRepository;
    }

    @Override
    public TechnicianDTO createTechnician(TechnicianDTO dto) {

        if (technicianRepository.existsByEmployeeCode(dto.getEmployeeCode())) {
            throw new RuntimeException("Employee Code already exists");
        }

        if (technicianRepository.existsByEmail(dto.getEmail())) {
            throw new RuntimeException("Email already exists");
        }

        Technician technician = new Technician();

        technician.setEmployeeCode(dto.getEmployeeCode());
        technician.setFirstName(dto.getFirstName());
        technician.setLastName(dto.getLastName());
        technician.setEmail(dto.getEmail());
        technician.setPhone(dto.getPhone());
        technician.setSpecialization(dto.getSpecialization());
        technician.setExperience(dto.getExperience());
        technician.setStatus(dto.getStatus());

        technician.setActive(
                dto.getActive() != null ? dto.getActive() : true
        );

        Technician saved = technicianRepository.save(technician);

        return convertToDTO(saved);
    }

    @Override
    public List<TechnicianDTO> getAllTechnicians() {

        return technicianRepository.findAll()
                .stream()
                .map(this::convertToDTO)
                .collect(Collectors.toList());
    }

    @Override
    public TechnicianDTO getTechnicianById(Long id) {

        Technician technician = technicianRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Technician Not Found"));

        return convertToDTO(technician);
    }

    @Override
    public TechnicianDTO updateTechnician(Long id, TechnicianDTO dto) {

        Technician technician = technicianRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Technician Not Found"));

        if (!technician.getEmployeeCode().equals(dto.getEmployeeCode())
                && technicianRepository.existsByEmployeeCode(dto.getEmployeeCode())) {

            throw new RuntimeException("Employee Code already exists");
        }

        if (!technician.getEmail().equals(dto.getEmail())
                && technicianRepository.existsByEmail(dto.getEmail())) {

            throw new RuntimeException("Email already exists");
        }

        technician.setEmployeeCode(dto.getEmployeeCode());
        technician.setFirstName(dto.getFirstName());
        technician.setLastName(dto.getLastName());
        technician.setEmail(dto.getEmail());
        technician.setPhone(dto.getPhone());
        technician.setSpecialization(dto.getSpecialization());
        technician.setExperience(dto.getExperience());
        technician.setStatus(dto.getStatus());
        technician.setActive(dto.getActive());

        Technician updated = technicianRepository.save(technician);

        return convertToDTO(updated);
    }

    @Override
    public void deleteTechnician(Long id) {

        Technician technician = technicianRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Technician Not Found"));

        technicianRepository.delete(technician);
    }

    private TechnicianDTO convertToDTO(Technician technician) {

        TechnicianDTO dto = new TechnicianDTO();

        dto.setId(technician.getId());
        dto.setEmployeeCode(technician.getEmployeeCode());
        dto.setFirstName(technician.getFirstName());
        dto.setLastName(technician.getLastName());
        dto.setEmail(technician.getEmail());
        dto.setPhone(technician.getPhone());
        dto.setSpecialization(technician.getSpecialization());
        dto.setExperience(technician.getExperience());
        dto.setStatus(technician.getStatus());
        dto.setActive(technician.getActive());
        dto.setCreatedAt(technician.getCreatedAt());

        return dto;
    }
}
package com.keystone.FieldServiceMgmtSystem.service;

import java.util.List;

import com.keystone.FieldServiceMgmtSystem.dto.TechnicianDTO;

public interface TechnicianService {

    TechnicianDTO createTechnician(TechnicianDTO dto);

    List<TechnicianDTO> getAllTechnicians();

    TechnicianDTO getTechnicianById(Long id);

    TechnicianDTO updateTechnician(Long id, TechnicianDTO dto);

    void deleteTechnician(Long id);

}
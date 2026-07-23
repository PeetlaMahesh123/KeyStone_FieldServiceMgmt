package com.keystone.FieldServiceMgmtSystem.controller;

import java.util.List;

import org.springframework.web.bind.annotation.*;

import com.keystone.FieldServiceMgmtSystem.dto.TechnicianDTO;
import com.keystone.FieldServiceMgmtSystem.service.TechnicianService;

@RestController
@RequestMapping("/api/technicians")
@CrossOrigin(origins = "http://localhost:5173")
public class TechnicianController {

    private final TechnicianService technicianService;

    public TechnicianController(TechnicianService technicianService) {
        this.technicianService = technicianService;
    }

    @PostMapping
    public TechnicianDTO createTechnician(@RequestBody TechnicianDTO dto) {
        return technicianService.createTechnician(dto);
    }

    @GetMapping
    public List<TechnicianDTO> getAllTechnicians() {
        return technicianService.getAllTechnicians();
    }

    @GetMapping("/{id}")
    public TechnicianDTO getTechnicianById(@PathVariable Long id) {
        return technicianService.getTechnicianById(id);
    }

    @PutMapping("/{id}")
    public TechnicianDTO updateTechnician(
            @PathVariable Long id,
            @RequestBody TechnicianDTO dto) {

        return technicianService.updateTechnician(id, dto);
    }

    @DeleteMapping("/{id}")
    public String deleteTechnician(@PathVariable Long id) {

        technicianService.deleteTechnician(id);

        return "Technician Deleted Successfully";
    }
}
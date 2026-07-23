package com.keystone.FieldServiceMgmtSystem.controller;

import java.util.List;

import org.springframework.web.bind.annotation.*;

import com.keystone.FieldServiceMgmtSystem.dto.SiteDTO;
import com.keystone.FieldServiceMgmtSystem.service.SiteService;

@RestController
@RequestMapping("/api/sites")
@CrossOrigin(origins = "http://localhost:5173")
public class SiteController {

    private final SiteService siteService;

    public SiteController(SiteService siteService) {
        this.siteService = siteService;
    }

    @PostMapping
    public SiteDTO createSite(@RequestBody SiteDTO dto) {
        return siteService.createSite(dto);
    }

    @GetMapping
    public List<SiteDTO> getAllSites() {
        return siteService.getAllSites();
    }

    @GetMapping("/{id}")
    public SiteDTO getSiteById(@PathVariable Long id) {
        return siteService.getSiteById(id);
    }

    @PutMapping("/{id}")
    public SiteDTO updateSite(@PathVariable Long id,
                              @RequestBody SiteDTO dto) {
        return siteService.updateSite(id, dto);
    }

    @DeleteMapping("/{id}")
    public String deleteSite(@PathVariable Long id) {

        siteService.deleteSite(id);

        return "Site Deleted Successfully";
    }
}
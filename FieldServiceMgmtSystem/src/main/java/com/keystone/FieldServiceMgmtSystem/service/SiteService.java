package com.keystone.FieldServiceMgmtSystem.service;

import java.util.List;

import com.keystone.FieldServiceMgmtSystem.dto.SiteDTO;

public interface SiteService {

    SiteDTO createSite(SiteDTO siteDTO);

    List<SiteDTO> getAllSites();

    SiteDTO getSiteById(Long id);

    SiteDTO updateSite(Long id, SiteDTO siteDTO);

    void deleteSite(Long id);

}
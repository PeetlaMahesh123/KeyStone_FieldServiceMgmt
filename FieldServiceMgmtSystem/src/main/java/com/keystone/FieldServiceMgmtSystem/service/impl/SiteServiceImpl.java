package com.keystone.FieldServiceMgmtSystem.service.impl;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.keystone.FieldServiceMgmtSystem.dto.SiteDTO;
import com.keystone.FieldServiceMgmtSystem.entity.Customer;
import com.keystone.FieldServiceMgmtSystem.entity.Site;
import com.keystone.FieldServiceMgmtSystem.exception.ResourceNotFoundException;
import com.keystone.FieldServiceMgmtSystem.repository.CustomerRepository;
import com.keystone.FieldServiceMgmtSystem.repository.SiteRepository;
import com.keystone.FieldServiceMgmtSystem.service.SiteService;

@Service
public class SiteServiceImpl implements SiteService {

    private final SiteRepository siteRepository;
    private final CustomerRepository customerRepository;

    public SiteServiceImpl(SiteRepository siteRepository,
                           CustomerRepository customerRepository) {
        this.siteRepository = siteRepository;
        this.customerRepository = customerRepository;
    }

    @Override
    public SiteDTO createSite(SiteDTO dto) {

        Customer customer = customerRepository.findById(dto.getCustomerId())
                .orElseThrow(() -> new ResourceNotFoundException("Customer Not Found"));

        Site site = new Site();

        site.setSiteCode(dto.getSiteCode());
        site.setSiteName(dto.getSiteName());
        site.setAddress(dto.getAddress());
        site.setCity(dto.getCity());
        site.setState(dto.getState());
        site.setPincode(dto.getPincode());
        site.setContactPerson(dto.getContactPerson());
        site.setContactNumber(dto.getContactNumber());
        site.setEmail(dto.getEmail());
        site.setActive(dto.getActive());
        site.setCustomer(customer);

        Site saved = siteRepository.save(site);

        dto.setId(saved.getId());

        return dto;
    }

    @Override
    public List<SiteDTO> getAllSites() {

        return siteRepository.findAll()
                .stream()
                .map(this::convertToDTO)
                .collect(Collectors.toList());
    }

    @Override
    public SiteDTO getSiteById(Long id) {

        Site site = siteRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Site Not Found"));

        return convertToDTO(site);
    }

    @Override
    public SiteDTO updateSite(Long id, SiteDTO dto) {

        Site site = siteRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Site Not Found"));

        Customer customer = customerRepository.findById(dto.getCustomerId())
                .orElseThrow(() -> new ResourceNotFoundException("Customer Not Found"));

        site.setSiteCode(dto.getSiteCode());
        site.setSiteName(dto.getSiteName());
        site.setAddress(dto.getAddress());
        site.setCity(dto.getCity());
        site.setState(dto.getState());
        site.setPincode(dto.getPincode());
        site.setContactPerson(dto.getContactPerson());
        site.setContactNumber(dto.getContactNumber());
        site.setEmail(dto.getEmail());
        site.setActive(dto.getActive());
        site.setCustomer(customer);

        siteRepository.save(site);

        dto.setId(site.getId());

        return dto;
    }

    @Override
    public void deleteSite(Long id) {
        siteRepository.deleteById(id);
    }

    private SiteDTO convertToDTO(Site site) {

        SiteDTO dto = new SiteDTO();

        dto.setId(site.getId());
        dto.setSiteCode(site.getSiteCode());
        dto.setSiteName(site.getSiteName());
        dto.setAddress(site.getAddress());
        dto.setCity(site.getCity());
        dto.setState(site.getState());
        dto.setPincode(site.getPincode());
        dto.setContactPerson(site.getContactPerson());
        dto.setContactNumber(site.getContactNumber());
        dto.setEmail(site.getEmail());
        dto.setActive(site.getActive());
        dto.setCustomerId(site.getCustomer().getId());

        return dto;
    }
}
package com.keystone.FieldServiceMgmtSystem.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.keystone.FieldServiceMgmtSystem.entity.Site;

@Repository
public interface SiteRepository extends JpaRepository<Site, Long> {

}
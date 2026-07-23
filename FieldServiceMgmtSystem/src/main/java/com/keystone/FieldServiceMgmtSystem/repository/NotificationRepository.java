package com.keystone.FieldServiceMgmtSystem.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.keystone.FieldServiceMgmtSystem.entity.Notification;

@Repository
public interface NotificationRepository extends JpaRepository<Notification, Long> {

}
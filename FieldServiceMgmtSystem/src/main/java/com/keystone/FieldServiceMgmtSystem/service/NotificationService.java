package com.keystone.FieldServiceMgmtSystem.service;

import java.util.List;

import com.keystone.FieldServiceMgmtSystem.dto.NotificationDTO;

public interface NotificationService {

    NotificationDTO createNotification(NotificationDTO dto);

    List<NotificationDTO> getAllNotifications();

    NotificationDTO getNotificationById(Long id);

    NotificationDTO markAsRead(Long id);

    void deleteNotification(Long id);

}
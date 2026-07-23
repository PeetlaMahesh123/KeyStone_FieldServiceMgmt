package com.keystone.FieldServiceMgmtSystem.service.impl;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.keystone.FieldServiceMgmtSystem.dto.NotificationDTO;
import com.keystone.FieldServiceMgmtSystem.entity.Notification;
import com.keystone.FieldServiceMgmtSystem.repository.NotificationRepository;
import com.keystone.FieldServiceMgmtSystem.service.NotificationService;

@Service
public class NotificationServiceImpl implements NotificationService {

    private final NotificationRepository notificationRepository;

    public NotificationServiceImpl(NotificationRepository notificationRepository) {
        this.notificationRepository = notificationRepository;
    }

    @Override
    public NotificationDTO createNotification(NotificationDTO dto) {

        Notification notification = new Notification();

        notification.setTitle(dto.getTitle());
        notification.setMessage(dto.getMessage());
        notification.setType(dto.getType());
        notification.setRead(dto.getRead());

        Notification saved = notificationRepository.save(notification);

        return convertToDTO(saved);
    }

    @Override
    public List<NotificationDTO> getAllNotifications() {

        return notificationRepository.findAll()
                .stream()
                .map(this::convertToDTO)
                .collect(Collectors.toList());
    }

    @Override
    public NotificationDTO getNotificationById(Long id) {

        Notification notification = notificationRepository.findById(id)
                .orElseThrow(() ->
                        new RuntimeException("Notification Not Found"));

        return convertToDTO(notification);
    }

    @Override
    public NotificationDTO markAsRead(Long id) {

        Notification notification = notificationRepository.findById(id)
                .orElseThrow(() ->
                        new RuntimeException("Notification Not Found"));

        notification.setRead(true);

        Notification updated = notificationRepository.save(notification);

        return convertToDTO(updated);
    }

    @Override
    public void deleteNotification(Long id) {

        Notification notification = notificationRepository.findById(id)
                .orElseThrow(() ->
                        new RuntimeException("Notification Not Found"));

        notificationRepository.delete(notification);
    }

    private NotificationDTO convertToDTO(Notification notification) {

        NotificationDTO dto = new NotificationDTO();

        dto.setId(notification.getId());
        dto.setTitle(notification.getTitle());
        dto.setMessage(notification.getMessage());
        dto.setType(notification.getType());
        dto.setRead(notification.getRead());
        dto.setCreatedAt(notification.getCreatedAt());

        return dto;
    }
}
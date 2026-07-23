package com.keystone.FieldServiceMgmtSystem.controller;

import java.util.List;

import org.springframework.web.bind.annotation.*;

import com.keystone.FieldServiceMgmtSystem.dto.NotificationDTO;
import com.keystone.FieldServiceMgmtSystem.service.NotificationService;

@RestController
@RequestMapping("/api/notifications")
@CrossOrigin(origins = "http://localhost:5173")
public class NotificationController {

    private final NotificationService notificationService;

    public NotificationController(NotificationService notificationService) {
        this.notificationService = notificationService;
    }

    @PostMapping
    public NotificationDTO createNotification(@RequestBody NotificationDTO dto) {
        return notificationService.createNotification(dto);
    }
    


    @GetMapping
    public List<NotificationDTO> getAllNotifications() {
        return notificationService.getAllNotifications();
    }

    @GetMapping("/{id}")
    public NotificationDTO getNotificationById(@PathVariable Long id) {
        return notificationService.getNotificationById(id);
    }

    @PutMapping("/{id}/read")
    public NotificationDTO markAsRead(@PathVariable Long id) {
        return notificationService.markAsRead(id);
    }

    @DeleteMapping("/{id}")
    public String deleteNotification(@PathVariable Long id) {

        notificationService.deleteNotification(id);

        return "Notification Deleted Successfully";
    }
}
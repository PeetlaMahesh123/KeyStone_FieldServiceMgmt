package com.keystone.FieldServiceMgmtSystem.controller;

import java.util.Map;

import org.springframework.web.bind.annotation.*;

import com.keystone.FieldServiceMgmtSystem.service.EmailService;

@RestController
@RequestMapping("/api/email")
@CrossOrigin(origins = "http://localhost:5173")
public class EmailController {

    private final EmailService emailService;

    public EmailController(EmailService emailService) {
        this.emailService = emailService;
    }

    @PostMapping("/send")
    public String sendEmail(@RequestBody Map<String, String> request) {

        System.out.println(request);

        System.out.println("To = " + request.get("to"));
        System.out.println("Subject = " + request.get("subject"));
        System.out.println("Message = " + request.get("message"));

        emailService.sendEmail(
                request.get("to"),
                request.get("subject"),
                request.get("message"));

        return "Email Sent Successfully";
    }

}
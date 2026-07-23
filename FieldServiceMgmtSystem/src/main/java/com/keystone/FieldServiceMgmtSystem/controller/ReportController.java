package com.keystone.FieldServiceMgmtSystem.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.keystone.FieldServiceMgmtSystem.dto.ReportDTO;
import com.keystone.FieldServiceMgmtSystem.service.ReportService;

@RestController
@RequestMapping("/api/reports")
@CrossOrigin(origins = "http://localhost:5173")
public class ReportController {

    private final ReportService reportService;

    public ReportController(ReportService reportService) {
        this.reportService = reportService;
    }

    @GetMapping("/daily")
    public ReportDTO getDailyReport() {
        return reportService.getDailyReport();
    }

    @GetMapping("/monthly")
    public ReportDTO getMonthlyReport() {
        return reportService.getMonthlyReport();
    }

    @GetMapping("/yearly")
    public ReportDTO getYearlyReport() {
        return reportService.getYearlyReport();
    }

    @GetMapping("/overall")
    public ReportDTO getOverallReport() {
        return reportService.getOverallReport();
    }
}
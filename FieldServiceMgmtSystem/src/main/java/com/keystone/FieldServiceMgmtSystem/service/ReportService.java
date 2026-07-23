package com.keystone.FieldServiceMgmtSystem.service;

import com.keystone.FieldServiceMgmtSystem.dto.ReportDTO;

public interface ReportService {

    ReportDTO getDailyReport();

    ReportDTO getMonthlyReport();

    ReportDTO getYearlyReport();

    ReportDTO getOverallReport();

}
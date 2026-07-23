package com.keystone.FieldServiceMgmtSystem.controller;

import org.springframework.core.io.Resource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import com.keystone.FieldServiceMgmtSystem.service.FileService;

@RestController
@RequestMapping("/api/files")
@CrossOrigin(origins = "http://localhost:5173")
public class FileController {

    private final FileService fileService;

    public FileController(FileService fileService) {
        this.fileService = fileService;
    }

    @PostMapping("/upload")
    public String uploadFile(@RequestParam("file") MultipartFile file) {

        String fileName = fileService.uploadFile(file);

        return "File Uploaded Successfully : " + fileName;
    }

    @GetMapping("/{fileName}")
    public ResponseEntity<Resource> downloadFile(
            @PathVariable String fileName) {

        Resource resource = fileService.downloadFile(fileName);

        return ResponseEntity.ok()
                .header(HttpHeaders.CONTENT_DISPOSITION,
                        "attachment; filename=\"" + fileName + "\"")
                .body(resource);
    }

    @DeleteMapping("/{fileName}")
    public String deleteFile(@PathVariable String fileName) {

        fileService.deleteFile(fileName);

        return "File Deleted Successfully";
    }

}
package com.keystone.FieldServiceMgmtSystem.service.impl;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;

import org.springframework.core.io.Resource;
import org.springframework.core.io.UrlResource;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.keystone.FieldServiceMgmtSystem.service.FileService;

@Service
public class FileServiceImpl implements FileService {

    private final Path uploadPath =
            Paths.get("src/main/resources/uploads");

    public FileServiceImpl() {

        try {
            Files.createDirectories(uploadPath);
        } catch (IOException e) {
            throw new RuntimeException("Could not create upload folder");
        }
    }

    @Override
    public String uploadFile(MultipartFile file) {

        try {

            String fileName = file.getOriginalFilename();

            Path target = uploadPath.resolve(fileName);

            Files.copy(
                    file.getInputStream(),
                    target,
                    StandardCopyOption.REPLACE_EXISTING);

            return fileName;

        } catch (IOException e) {

            throw new RuntimeException("File Upload Failed");

        }
    }

    @Override
    public Resource downloadFile(String fileName) {

        try {

            Path file = uploadPath.resolve(fileName);

            Resource resource =
                    new UrlResource(file.toUri());

            if (resource.exists()) {
                return resource;
            }

            throw new RuntimeException("File Not Found");

        } catch (Exception e) {

            throw new RuntimeException("File Not Found");

        }
    }

    @Override
    public void deleteFile(String fileName) {

        try {

            Path file = uploadPath.resolve(fileName);

            Files.deleteIfExists(file);

        } catch (IOException e) {

            throw new RuntimeException("Unable To Delete File");

        }
    }

}
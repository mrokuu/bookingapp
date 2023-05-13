package com.app.backend.admin.doctor.controller;

import com.app.backend.admin.doctor.dto.AdminDoctorDto;
import com.app.backend.admin.doctor.dto.UploadResponse;
import com.app.backend.admin.doctor.model.AdminDoctor;
import com.app.backend.admin.doctor.service.AdminDoctorService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;

@RestController
@RequiredArgsConstructor
public class AdminDoctorController {

    private final AdminDoctorService adminDoctorService;
    private static final Long EMPTY_ID = null;



    @GetMapping("/admin/doctors")
    public Page<AdminDoctor> getDoctors(Pageable pageable){
        return adminDoctorService.getDoctors(pageable);
    }

    @GetMapping("/admin/doctors/{id}")
    public AdminDoctor getDoctor(@PathVariable Long id){
        return adminDoctorService.getDoctor(id);
    }




    @PostMapping ("/admin/doctors")
    public void createDoctor(@RequestBody @Valid AdminDoctorDto adminDoctorDto){
        adminDoctorService.createDoctor(adminDoctorDto, EMPTY_ID);
    }


    @PutMapping ("/admin/doctors/{id}")
    public void createDoctor(@RequestBody @Valid AdminDoctorDto adminDoctorDto, @PathVariable Long id){
        adminDoctorService.updateeDoctor(adminDoctorDto, id);
    }

    @DeleteMapping  ("/admin/doctors/{id}")
    public void deleteDoctor(@PathVariable Long id){
        adminDoctorService.deleteDoctor(id);
    }


    public UploadResponse uploadImage(@RequestParam("file") MultipartFile multipartFile){
        String fileName = multipartFile.getOriginalFilename();
        String uploadDictionary = "./data/doctorImages/";
        Path filePath = Paths.get(uploadDictionary).resolve(fileName);

        try(InputStream stream = multipartFile.getInputStream()) {
            OutputStream outputStream = Files.newOutputStream(filePath);
            stream.transferTo(outputStream);
            return new UploadResponse(fileName);
        } catch (IOException e) {
            throw new RuntimeException("you can't save file", e);
        }
    }



}
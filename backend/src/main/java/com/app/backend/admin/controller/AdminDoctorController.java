package com.app.backend.admin.controller;

import com.app.backend.admin.model.AdminDoctor;
import com.app.backend.admin.service.AdminDoctorService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
public class AdminDoctorController {

    private final AdminDoctorService adminDoctorService;
    @GetMapping("/admin/doctors")
    public Page<AdminDoctor> getDoctors(Pageable pageable){

        return adminDoctorService.getDoctors(pageable);
    }
}

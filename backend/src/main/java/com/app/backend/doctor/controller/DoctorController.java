package com.app.backend.doctor.controller;

import com.app.backend.doctor.model.Doctor;
import com.app.backend.doctor.service.DoctorService;
import lombok.*;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.math.BigDecimal;
import java.util.List;

@RestController
@RequiredArgsConstructor
public class DoctorController {

    private final DoctorService doctorService;


    @GetMapping("/doctors")
    public Page<Doctor> getDoctors(Pageable pageable){
        return doctorService.getDoctor(pageable);
    }
}

package com.app.backend.doctor.controller;

import com.app.backend.doctor.model.Doctor;
import com.app.backend.doctor.service.DoctorService;
import jakarta.validation.constraints.Pattern;
import lombok.*;
import org.hibernate.validator.constraints.Length;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.math.BigDecimal;
import java.util.List;

@RestController
@RequiredArgsConstructor
@Validated
public class DoctorController {

    private final DoctorService doctorService;


    @GetMapping("/doctors")
    public Page<Doctor> getDoctors(Pageable pageable){

        return doctorService.getDoctor(pageable);
    }

@GetMapping("/doctors/{id}")
    public Doctor getDoctorWithDetails(
            @PathVariable
            Long id){
        return doctorService.getDoctorByDetails(id);
}

}
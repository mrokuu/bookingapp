package com.app.backend.doctor.service;

import com.app.backend.common.model.Doctor;
import com.app.backend.common.repository.DoctorRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor

public class DoctorService {
    private final DoctorRepository doctorRepository;

    public Page<Doctor> getDoctor(Pageable pageable){

        return doctorRepository.findAll(pageable);
    }

    public Doctor getDoctorByDetails(Long id) {

        return doctorRepository.findById(id).orElseThrow();
    }
}
package com.app.backend.doctor.service;

import com.app.backend.doctor.model.Doctor;
import com.app.backend.doctor.repository.DoctorRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class DoctorService {
    private final DoctorRepository doctorRepository;

    public List<Doctor> getDoctor(){
        return doctorRepository.findAll();
    }
}

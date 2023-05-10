package com.app.backend.admin.service;

import com.app.backend.admin.model.AdminDoctor;
import com.app.backend.admin.repository.AdminDoctorRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AdminDoctorService {

    private final AdminDoctorRepository adminDoctorRepository;

    public Page<AdminDoctor> getDoctors(Pageable pageable){

        return adminDoctorRepository.findAll(pageable);
    }
}

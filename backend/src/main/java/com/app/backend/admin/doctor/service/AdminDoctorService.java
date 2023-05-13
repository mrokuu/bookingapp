package com.app.backend.admin.doctor.service;

import com.app.backend.admin.doctor.model.AdminDoctor;
import com.app.backend.admin.doctor.repository.AdminDoctorRepository;
import com.app.backend.admin.doctor.dto.AdminDoctorDto;
import com.app.backend.admin.doctor.mapper.AdminMapper;
import com.app.backend.doctor.repository.DoctorRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AdminDoctorService {

    private final AdminDoctorRepository adminDoctorRepository;
    private final DoctorRepository doctorRepository;

    public Page<AdminDoctor> getDoctors(Pageable pageable){

        return adminDoctorRepository.findAll(pageable);
    }

    public AdminDoctor getDoctor(Long id) {
        return adminDoctorRepository.findById(id).orElseThrow();
    }


    //    public AdminDoctor createDoctor(AdminDoctor doctor) {
//        return adminDoctorRepository.save(doctor);
//    }
    public void createDoctor(AdminDoctorDto adminDoctorDto, Long id) {
        AdminDoctor adminDoctor = AdminMapper.mapAdminDoctor(adminDoctorDto, id);
        adminDoctorRepository.save(adminDoctor);
    }

//    public AdminDoctor updateeDoctor(AdminDoctor doctor) {
//        return adminDoctorRepository.save(doctor);
//    }

    public AdminDoctor updateeDoctor(AdminDoctorDto adminDoctorDto, Long id) {
        AdminDoctor adminDoctor = AdminMapper.mapAdminDoctor(adminDoctorDto, id);
        return adminDoctorRepository.save(adminDoctor);
    }

    public void deleteDoctor(Long id) {
        doctorRepository.deleteById(id);
    }
}
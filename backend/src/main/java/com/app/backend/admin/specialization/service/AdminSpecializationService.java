package com.app.backend.admin.specialization.service;

import com.app.backend.admin.doctor.mapper.AdminMapper;
import com.app.backend.admin.doctor.model.AdminDoctor;
import com.app.backend.admin.specialization.dto.AdminSpecializationDto;
import com.app.backend.admin.specialization.mapper.AdminSpecializationMapper;
import com.app.backend.admin.specialization.model.AdminSpecialization;
import com.app.backend.admin.specialization.repository.AdminSpecializationRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class AdminSpecializationService {

    private  final AdminSpecializationRepository adminSpecializationRepository;

    public List<AdminSpecialization> getSpecializations(){
        return adminSpecializationRepository.findAll();
    }

    public AdminSpecialization getSpecialization(Long id) {
        return adminSpecializationRepository.findById(id).orElseThrow();
    }

    public AdminSpecialization createSpecialization(AdminSpecializationDto adminSpecializationDto) {
        AdminSpecialization adminSpecialization = AdminSpecializationMapper.mapAdminSpecialization(adminSpecializationDto);
        return adminSpecializationRepository.save(adminSpecialization);
    }

    public AdminSpecialization updateSpecialization(AdminSpecializationDto adminSpecializationDto, Long id) {
        AdminSpecialization adminSpecialization = AdminSpecializationMapper.mapAdminSpecializationWtihId(adminSpecializationDto, id);
        return adminSpecializationRepository.save(adminSpecialization);
    }

    public void deleteSpecialization(Long id) {
         adminSpecializationRepository.deleteById(id);
    }
}

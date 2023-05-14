package com.app.backend.specialization.service;

import com.app.backend.doctor.model.Doctor;
import com.app.backend.doctor.repository.DoctorRepository;
import com.app.backend.specialization.dto.SpecializationDto;
import com.app.backend.specialization.model.Specialization;
import com.app.backend.specialization.repository.SpecializationRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@RequiredArgsConstructor
public class SpecializationService {
    private final SpecializationRepository specializationRepository;
    private final DoctorRepository doctorRepository;

    public List<Specialization> getSpecializations(){
    return specializationRepository.findAll();
    }



    public SpecializationDto getSpecializationWithDoctors(String name, Pageable pageable) {
        Specialization specialization = specializationRepository.findByName(name);
        Page<Doctor> page = doctorRepository.findBySpecializationId(specialization.getId(), pageable);
        return  new SpecializationDto(specialization, page);
    }
}

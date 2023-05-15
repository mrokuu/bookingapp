package com.app.backend.specialization.service;

import com.app.backend.common.dto.DoctorListDto;
import com.app.backend.common.model.Doctor;
import com.app.backend.common.repository.DoctorRepository;
import com.app.backend.specialization.dto.SpecializationDto;
import com.app.backend.common.model.Specialization;
import com.app.backend.specialization.repository.SpecializationRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

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
        List<DoctorListDto> doctorListDtos = page.getContent().stream()
                .map(doctor -> DoctorListDto.builder()
                        .id(doctor.getId())
                        .name(doctor.getName())
                        .description(doctor.getDescription())
                        .price(doctor.getPrice())
                        .details(doctor.getDetails())
                        .image(doctor.getImage())
                        .build()).toList();
        return  new SpecializationDto(specialization, new PageImpl<>(doctorListDtos, pageable, page.getTotalElements()));
    }
}

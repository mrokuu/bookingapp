package com.app.backend.admin.specialization.mapper;

import com.app.backend.admin.doctor.dto.AdminDoctorDto;
import com.app.backend.admin.doctor.model.AdminDoctor;
import com.app.backend.admin.specialization.dto.AdminSpecializationDto;
import com.app.backend.admin.specialization.model.AdminSpecialization;

public class AdminSpecializationMapper {

    public static AdminSpecialization mapAdminSpecialization (AdminSpecializationDto adminSpecializationDto){
        return AdminSpecialization.builder()
                .name(adminSpecializationDto.getName())
                .description(adminSpecializationDto.getDescription())
                .details(adminSpecializationDto.getDetails())
                .build();
    }

    public static AdminSpecialization mapAdminSpecializationWtihId (AdminSpecializationDto adminSpecializationDto, Long id){
        return AdminSpecialization.builder()
                .id(id)
                .name(adminSpecializationDto.getName())
                .description(adminSpecializationDto.getDescription())
                .details(adminSpecializationDto.getDetails())
                .build();
    }

}

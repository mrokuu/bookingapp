package com.app.backend.admin.doctor.mapper;

import com.app.backend.admin.doctor.model.AdminDoctor;
import com.app.backend.admin.doctor.dto.AdminDoctorDto;
import org.springframework.stereotype.Component;

@Component
public class AdminMapper {


//    public static AdminDoctor mapAdminDoctor(AdminDoctorDto adminDoctorDto){
//        return AdminDoctor.builder()
//                .id(adminDoctorDto.getId())
//                .name(adminDoctorDto.getName())
//                .specialization(adminDoctorDto.getSpecialization())
//                .description(adminDoctorDto.getDescription())
//                .price(adminDoctorDto.getPrice())
//                .build();
//    }

    public static AdminDoctor mapAdminDoctor (AdminDoctorDto adminDoctorDto, Long id){
        return AdminDoctor.builder()
                .id(id)
                .name(adminDoctorDto.getName())
                .specializationId(adminDoctorDto.getSpecializationId())
                .description(adminDoctorDto.getDescription())
                .price(adminDoctorDto.getPrice())
                .image(adminDoctorDto.getImage())
                .details(adminDoctorDto.getDetails())
                .build();
    }




}
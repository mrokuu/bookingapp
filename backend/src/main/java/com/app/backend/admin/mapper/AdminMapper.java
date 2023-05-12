package com.app.backend.admin.mapper;

import com.app.backend.admin.dto.AdminDoctorDto;
import com.app.backend.admin.model.AdminDoctor;
import com.github.slugify.Slugify;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
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
                .specialization(adminDoctorDto.getSpecialization())
                .description(adminDoctorDto.getDescription())
                .price(adminDoctorDto.getPrice())
                .image(adminDoctorDto.getImage())
                .details(adminDoctorDto.getDetails())
                .build();
    }




}
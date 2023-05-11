package com.app.backend.admin.controller;

import com.app.backend.admin.dto.AdminDoctorDto;
import com.app.backend.admin.mapper.AdminMapper;
import com.app.backend.admin.model.AdminDoctor;
import com.app.backend.admin.service.AdminDoctorService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
public class AdminDoctorController {

    private final AdminDoctorService adminDoctorService;
    private static final Long EMPTY_ID = null;



    @GetMapping("/admin/doctors")
    public Page<AdminDoctor> getDoctors(Pageable pageable){
        return adminDoctorService.getDoctors(pageable);
    }

    @GetMapping("/admin/doctors/{id}")
    public AdminDoctor getDoctor(@PathVariable Long id){
        return adminDoctorService.getDoctor(id);
    }


//    @PostMapping ("/admin/doctors/{id}")
//    public AdminDoctor createDoctor(@RequestBody AdminDoctorDto adminDoctorDto){
//        return adminDoctorService.createDoctor(mapAdminDoctor(adminDoctorDto, EMPTY_ID)
//        );
//    }

    @PostMapping ("/admin/doctors")
    public void createDoctor(@RequestBody AdminDoctorDto adminDoctorDto){
        adminDoctorService.createDoctor(adminDoctorDto);
    }
//
//    @PutMapping ("/admin/doctors/{id}")
//    public AdminDoctor createDoctor(@RequestBody AdminDoctorDto adminDoctorDto, @PathVariable Long id){
//        return adminDoctorService.updateeDoctor(mapAdminDoctor(adminDoctorDto, id)
//        );
//    }

    @PutMapping ("/admin/doctors/{id}")
    public void createDoctor(@RequestBody AdminDoctorDto adminDoctorDto, @PathVariable Long id){
        adminDoctorService.updateeDoctor(adminDoctorDto, id);
    }


//    public AdminDoctor mapAdminDoctor(AdminDoctorDto adminDoctorDto, Long id){
//        return AdminDoctor.builder()
//                .id(id)
//                .name(adminDoctorDto.getName())
//                .specialization(adminDoctorDto.getSpecialization())
//                .description(adminDoctorDto.getDescription())
//                .price(adminDoctorDto.getPrice())
//                .build();
//    }
}

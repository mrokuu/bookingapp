package com.app.backend.admin.specialization.controller;

import com.app.backend.admin.specialization.dto.AdminSpecializationDto;
import com.app.backend.admin.specialization.model.AdminSpecialization;
import com.app.backend.admin.specialization.service.AdminSpecializationService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
public class AdminSpecializationController {
    private final AdminSpecializationService adminSpecializationService;

    @GetMapping("/admin/specializations")
    public List<AdminSpecialization> getSpecializations(){
    return adminSpecializationService.getSpecializations();
    }


    @GetMapping("/admin/specialization/{id}")
    public AdminSpecialization getSpecialization(@PathVariable Long id){
        return adminSpecializationService.getSpecialization(id);
    }


    @PostMapping ("/admin/specialization")
    public AdminSpecialization createSpecialization(@RequestBody AdminSpecializationDto adminSpecializationDto){
         return adminSpecializationService.createSpecialization(adminSpecializationDto);
    }

    @PutMapping  ("/admin/specialization/{id}")
    public AdminSpecialization updateSpecialization(
            @PathVariable Long id,
            @RequestBody AdminSpecializationDto adminSpecializationDto){
        return adminSpecializationService.updateSpecialization(adminSpecializationDto, id);
    }

    @DeleteMapping  ("/admin/specialization/{id}")
    public void deleteSpecialization(
            @PathVariable Long id){
         adminSpecializationService.deleteSpecialization(id);
    }

}

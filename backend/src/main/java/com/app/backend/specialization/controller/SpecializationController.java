package com.app.backend.specialization.controller;

import com.app.backend.specialization.dto.SpecializationDto;
import com.app.backend.common.model.Specialization;
import com.app.backend.specialization.service.SpecializationService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequiredArgsConstructor
public class SpecializationController {
    private final SpecializationService specializationService;


    @GetMapping("/specializations")
    public List<Specialization> getSpecializations(){
        return specializationService.getSpecializations();
    }

    @GetMapping("/specializations/{name}/doctor")
    public SpecializationDto getSpecializationWithDoctors(@PathVariable String name, Pageable pageable){
        return specializationService.getSpecializationWithDoctors(name, pageable);
    }
}

package com.app.backend.specialization.controller;

import com.app.backend.specialization.model.Specialization;
import com.app.backend.specialization.service.SpecializationService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
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
}

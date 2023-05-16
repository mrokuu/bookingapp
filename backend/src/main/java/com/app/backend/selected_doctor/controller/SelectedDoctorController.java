package com.app.backend.selected_doctor.controller;

import com.app.backend.common.model.Doctor;
import com.app.backend.selected_doctor.service.SelectedDoctorService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
public class SelectedDoctorController {

    private final SelectedDoctorService selectedDoctorService;
    @GetMapping("/selectedDoctor/{id}")
public Doctor getSelectedDoctor(@PathVariable Long id){
    return selectedDoctorService.getDoctor(id);
}
}

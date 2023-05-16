package com.app.backend.selected_doctor.service;

import com.app.backend.admin.doctor.model.AdminDoctor;
import com.app.backend.common.model.Doctor;
import com.app.backend.selected_doctor.model.SelectedDoctor;
import com.app.backend.selected_doctor.repository.SelectedDoctorRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class SelectedDoctorService {
    private final SelectedDoctorRepository selectedDoctorRepository;

    public Doctor getDoctor(Long id) {
        return selectedDoctorRepository.findById(id).orElseThrow();
    }
}

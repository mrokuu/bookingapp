package com.app.backend.specialization.dto;

import com.app.backend.doctor.model.Doctor;
import com.app.backend.specialization.model.Specialization;
import org.springframework.data.domain.Page;

public record SpecializationDto(Specialization specialization, Page<Doctor> doctors) {


}

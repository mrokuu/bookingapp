package com.app.backend.specialization.dto;

import com.app.backend.common.dto.DoctorListDto;
import com.app.backend.common.model.Specialization;
import org.springframework.data.domain.Page;

public record SpecializationDto(Specialization specialization, Page<DoctorListDto> doctors) {


}

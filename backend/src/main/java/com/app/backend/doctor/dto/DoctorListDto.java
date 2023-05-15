package com.app.backend.doctor.dto;

import lombok.Builder;
import lombok.Getter;

import java.math.BigDecimal;

@Getter
@Builder
public class DoctorListDto {

    private  Long id;
    private String name;
    private String description;
    private BigDecimal price;

    private String image;
    private String details;
}

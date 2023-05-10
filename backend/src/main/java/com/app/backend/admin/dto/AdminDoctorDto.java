package com.app.backend.admin.dto;

import lombok.Getter;

import java.math.BigDecimal;

@Getter
public class AdminDoctorDto {

    private Long id;
    private String name;
    private String specialization;
    private String description;
    private BigDecimal price;
}

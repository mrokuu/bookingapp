package com.app.backend.admin.dto;

import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import lombok.Getter;
import org.hibernate.validator.constraints.Length;

import java.math.BigDecimal;

@Getter
public class AdminDoctorDto {

    private Long id;
    @NotBlank
    private String name;
    @NotBlank
    private String specialization;
    @NotBlank
    private String description;
    @NotNull
    @Min(0)
    private BigDecimal price;
    private String image;
}
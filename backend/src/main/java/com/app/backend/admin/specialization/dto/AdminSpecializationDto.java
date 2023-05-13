package com.app.backend.admin.specialization.dto;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import lombok.*;

@Getter
public class AdminSpecializationDto {
    @NotBlank
    private String name;
    private String description;
    @NotBlank
    private String details;
}


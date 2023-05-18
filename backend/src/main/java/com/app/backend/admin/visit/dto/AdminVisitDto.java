package com.app.backend.admin.visit.dto;

import com.app.backend.admin.visit.model.AdminVisitStatus;
import lombok.Builder;
import lombok.Getter;

import java.math.BigDecimal;
import java.time.LocalDateTime;

@Getter
@Builder
public class AdminVisitDto {

    private Long id;
    private LocalDateTime placeDate;
    private AdminVisitStatus visitStatus;
    private BigDecimal grossValue;
}

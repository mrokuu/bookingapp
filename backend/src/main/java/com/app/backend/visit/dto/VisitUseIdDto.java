package com.app.backend.visit.dto;

import com.app.backend.visit.model.VisitStatus;
import lombok.AllArgsConstructor;
import lombok.Getter;

import java.math.BigDecimal;
import java.time.LocalDateTime;

@Getter
@AllArgsConstructor
public class VisitUseIdDto {

    private Long id;
    private LocalDateTime placeDate;
    private VisitStatus status;
    private BigDecimal grossValue;
}

package com.app.backend.visit.dto;

import com.app.backend.visit.model.Payment;
import com.app.backend.visit.model.VisitStatus;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;
import java.time.LocalDateTime;

@Getter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class VisitSummary {

    private Long id;
    private LocalDateTime placeDate;
    private VisitStatus status;
    private BigDecimal grossValue;
    private Payment payment;
}

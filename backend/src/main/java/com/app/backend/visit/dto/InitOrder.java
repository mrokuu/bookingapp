package com.app.backend.visit.dto;

import com.app.backend.visit.model.Payment;
import lombok.Builder;
import lombok.Getter;

import java.util.List;

@Getter
@Builder
public class InitOrder {

    private List<Payment> payment;
}

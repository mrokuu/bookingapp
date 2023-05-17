package com.app.backend.visit.service;


import com.app.backend.visit.model.Payment;
import com.app.backend.visit.repository.PaymentRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class PaymentService {
    private final PaymentRepository paymentRepository;

    public List<Payment> getPayments() {

        return paymentRepository.findAll();
    }
}

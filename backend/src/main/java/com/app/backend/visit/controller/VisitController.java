package com.app.backend.visit.controller;

import com.app.backend.common.model.Doctor;
import com.app.backend.visit.dto.InitOrder;
import com.app.backend.visit.dto.VisitDto;
import com.app.backend.visit.dto.VisitSummary;
import com.app.backend.visit.model.Visit;
import com.app.backend.visit.service.PaymentService;
import com.app.backend.visit.service.VisitService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
public class VisitController {

    private final VisitService visitService;
    private final PaymentService paymentService;


    @GetMapping("/booking/{id}")
    public Doctor getDoctor(@PathVariable Long id){
        return visitService.getDoctor(id);
    }

    @GetMapping("/visits")
    public List<Visit> getVisits(@AuthenticationPrincipal Long userId){
        return visitService.getVistis(userId);
    }

    @PostMapping("/booking/{id}")
    public VisitSummary bookVisit(@RequestBody VisitDto visitDto, @AuthenticationPrincipal Long userId){
        return visitService.bookVisit(visitDto, userId);
    }


    @GetMapping("/booking/initData")
    public InitOrder initData() {

        return InitOrder.builder()
                .payment(paymentService.getPayments())
                .build();
    }



}

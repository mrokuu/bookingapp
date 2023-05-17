package com.app.backend.visit.controller;

import com.app.backend.common.model.Doctor;
import com.app.backend.visit.dto.VisitDto;
import com.app.backend.visit.dto.VisitSummary;
import com.app.backend.visit.service.VisitService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
public class VisitController {

    private final VisitService visitService;


    @GetMapping("/booking/{id}")
    public Doctor getDoctor(@PathVariable Long id){
        return visitService.getDoctor(id);
    }

    @PostMapping("/booking/{id}")
    public VisitSummary bookVisit(@RequestBody VisitDto visitDto){
        return visitService.bookVisit(visitDto);
    }
}

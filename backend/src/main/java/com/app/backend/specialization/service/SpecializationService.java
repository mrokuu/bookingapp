package com.app.backend.specialization.service;

import com.app.backend.specialization.model.Specialization;
import com.app.backend.specialization.repository.SpecializationRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class SpecializationService {
    private final SpecializationRepository specializationRepository;

    public List<Specialization> getSpecializations(){
    return specializationRepository.findAll();
    }
}

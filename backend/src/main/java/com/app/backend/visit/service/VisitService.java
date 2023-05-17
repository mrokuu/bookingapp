package com.app.backend.visit.service;

import com.app.backend.common.model.Doctor;
import com.app.backend.common.model.Review;
import com.app.backend.common.repository.DoctorRepository;
import com.app.backend.visit.dto.VisitDto;
import com.app.backend.visit.dto.VisitSummary;
import com.app.backend.visit.model.Visit;
import com.app.backend.visit.model.VisitRow;
import com.app.backend.visit.model.VisitStatus;
import com.app.backend.visit.repository.VisitRepository;
import com.app.backend.visit.repository.VisitRowRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;

@Service
@RequiredArgsConstructor
public class VisitService {
    private final VisitRepository visitRepository;
    private final DoctorRepository doctorRepository;
    private final VisitRowRepository visitRowRepository;
    @Transactional
    public VisitSummary bookVisit(VisitDto visitDto) {
        Doctor doctor = doctorRepository.findById(visitDto.getDoctorId()).orElseThrow();
        Visit visit = Visit.builder()
                .firstname(visitDto.getFirstname())
                .lastname(visitDto.getLastname())
                .street(visitDto.getStreet())
                .zipcode(visitDto.getZipcode())
                .city(visitDto.getCity())
                .email(visitDto.getEmail())
                .phone(visitDto.getPhone())
                .placeDate(LocalDateTime.now())
                .visitStatus(VisitStatus.NEW)
                .grossValue(doctor.getPrice())
                .build();
        Visit newVisit = visitRepository.save(visit);
        saveVisitRows(doctor, newVisit.getId());
        return VisitSummary.builder()
                .id(newVisit.getId())
                .placeDate(newVisit.getPlaceDate())
                .status(newVisit.getVisitStatus())
                .grossValue(doctor.getPrice())
                .build();
    }

    private void saveVisitRows(Doctor doctor, Long id) {
        VisitRow visitRow = VisitRow.builder()
                .doctorId(doctor.getId())
                .price(doctor.getPrice())
                .visitId(id)
                .build();

        visitRowRepository.save(visitRow);
    }

    public Doctor getDoctor(Long id) {

        return doctorRepository.findById(id).orElseThrow();
    }
}

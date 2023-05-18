package com.app.backend.visit.mapper;

import com.app.backend.common.model.Doctor;
import com.app.backend.visit.dto.VisitDto;
import com.app.backend.visit.dto.VisitSummary;
import com.app.backend.visit.model.Payment;
import com.app.backend.visit.model.Visit;
import com.app.backend.visit.model.VisitRow;
import com.app.backend.visit.model.VisitStatus;
import com.app.backend.visit.repository.VisitRowRepository;
import lombok.RequiredArgsConstructor;

import java.time.LocalDateTime;

@RequiredArgsConstructor
public class VisitMapper {

    private final VisitRowRepository visitRowRepository;


    public static VisitSummary getSummary(Doctor doctor, Payment payment, Visit newVisit) {
        return VisitSummary.builder()
                .id(newVisit.getId())
                .placeDate(newVisit.getPlaceDate())
                .status(newVisit.getVisitStatus())
                .grossValue(doctor.getPrice())
                .payment(payment)
                .build();
    }



    public static Visit createNewVisit(VisitDto visitDto, Doctor doctor, Payment payment) {
        return Visit.builder()
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
                .payment(payment)
                .build();
    }





}

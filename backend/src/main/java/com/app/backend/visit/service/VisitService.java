package com.app.backend.visit.service;


import com.app.backend.common.mail.EmailService;
import com.app.backend.common.model.Doctor;
import com.app.backend.common.repository.DoctorRepository;
import com.app.backend.visit.dto.VisitDto;
import com.app.backend.visit.dto.VisitSummary;
import com.app.backend.visit.model.Payment;
import com.app.backend.visit.model.Visit;
import com.app.backend.visit.model.VisitRow;
import com.app.backend.visit.repository.PaymentRepository;
import com.app.backend.visit.repository.VisitRepository;
import com.app.backend.visit.repository.VisitRowRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

import static com.app.backend.visit.mapper.EmailMapper.createEmailMessage;
import static com.app.backend.visit.mapper.VisitMapper.createNewVisit;
import static com.app.backend.visit.mapper.VisitMapper.getSummary;

@Service
@RequiredArgsConstructor
public class VisitService {
    private final VisitRepository visitRepository;
    private final DoctorRepository doctorRepository;
    private final VisitRowRepository visitRowRepository;

    private final PaymentRepository paymentRepository;
    private final EmailService emailService;

    @Transactional
    public VisitSummary bookVisit(VisitDto visitDto, Long userId) {
        Doctor doctor = doctorRepository.findById(visitDto.getDoctorId()).orElseThrow();
        Payment payment = paymentRepository.findById(visitDto.getPaymentId()).orElseThrow();

        Visit visit = createNewVisit(visitDto, doctor, payment, userId);
        Visit newVisit = visitRepository.save(visit);
        saveVisitRows(doctor, newVisit.getId());
        emailService.send(visit.getEmail(), "your visit has been booked", createEmailMessage(visit));
        return getSummary(doctor, payment, newVisit);
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




    public List<Visit> getVistis(Long userId) {

        return visitRepository.findByUserId(userId);

    }
}

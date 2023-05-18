package com.app.backend.visit.service;

import com.app.backend.common.mail.EmailService;
import com.app.backend.common.model.Doctor;
import com.app.backend.common.model.Review;
import com.app.backend.common.repository.DoctorRepository;
import com.app.backend.visit.dto.VisitDto;
import com.app.backend.visit.dto.VisitSummary;
import com.app.backend.visit.model.Payment;
import com.app.backend.visit.model.Visit;
import com.app.backend.visit.model.VisitRow;
import com.app.backend.visit.model.VisitStatus;
import com.app.backend.visit.repository.PaymentRepository;
import com.app.backend.visit.repository.VisitRepository;
import com.app.backend.visit.repository.VisitRowRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

@Service
@RequiredArgsConstructor
public class VisitService {
    private final VisitRepository visitRepository;
    private final DoctorRepository doctorRepository;
    private final VisitRowRepository visitRowRepository;

    private final PaymentRepository paymentRepository;
    private final EmailService emailService;




    @Transactional
    public VisitSummary bookVisit(VisitDto visitDto) {
        Doctor doctor = doctorRepository.findById(visitDto.getDoctorId()).orElseThrow();
        Payment payment = paymentRepository.findById(visitDto.getPaymentId()).orElseThrow();

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
                .payment(payment)
                .build();
        Visit newVisit = visitRepository.save(visit);
        saveVisitRows(doctor, newVisit.getId());
        emailService.send(visit.getEmail(), "your visit has been booked", createEmailMessage(visit));
        return VisitSummary.builder()
                .id(newVisit.getId())
                .placeDate(newVisit.getPlaceDate())
                .status(newVisit.getVisitStatus())
                .grossValue(doctor.getPrice())
                .payment(payment)
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


    public String createEmailMessage(Visit visit){
        return "Your visit at id: " + visit.getId() +
                "\nDate: " + visit.getPlaceDate().format(DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm")) +
                "\nValue: " + visit.getGrossValue() + " PLN " +
                "\n\n" +
                "\nPayment: " + visit.getPayment().getName() +
                (visit.getPayment().getNote() != null ? "\n" + visit.getPayment().getNote() : "");
    }
}

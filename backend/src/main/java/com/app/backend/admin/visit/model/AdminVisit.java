package com.app.backend.admin.visit.model;

import com.app.backend.admin.doctor.model.AdminDoctor;
import com.app.backend.common.model.Doctor;
import com.app.backend.visit.model.VisitRow;
import jakarta.persistence.*;
import lombok.Getter;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.List;

@Entity
@Table(name = "visit")
@Getter
public class AdminVisit {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(name = "place_date")
    private LocalDateTime placeDate;
    @Enumerated(EnumType.STRING)
    @Column(name = "visit_status")
    private AdminVisitStatus visitStatus;
    @OneToMany
    @JoinColumn(name = "visitId")
    private List<AdminVisitRow> visitRows;
    @Column(name = "gross_value")
    private BigDecimal grossValue;
    private String firstname;
    private String lastname;
    private String street;
    private String zipcode;
    private String city;
    private String email;
    private String phone;

    @OneToOne
    private AdminPayment payment;
}

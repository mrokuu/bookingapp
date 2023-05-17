package com.app.backend.visit.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.List;

@Entity
@Table(name = "visit")
@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor

public class Visit {


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(name = "place_date")
    private LocalDateTime placeDate;
    @Enumerated(EnumType.STRING)
    @Column(name = "visit_status")
    private VisitStatus visitStatus;
    @OneToMany
    @JoinColumn(name = "visitId")
    private List<VisitRow> visitRows;
    @Column(name = "gross_value")
    private BigDecimal grossValue;
    private String firstname;
    private String lastname;
    private String street;
    private String zipcode;
    private String city;
    private String email;
    private String phone;
}

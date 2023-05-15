package com.app.backend.common.model;

import jakarta.persistence.*;
import lombok.*;

import java.math.BigDecimal;
import java.util.List;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Doctor {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long id;
    private String name;
    private Long specializationId;
    private String description;
    private BigDecimal price;

    private String image;
    private String details;

    @OneToMany()
    @JoinColumn(name = "doctorId ")
    private List<Review> reviews;

}
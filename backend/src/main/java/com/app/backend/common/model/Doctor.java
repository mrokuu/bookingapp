package com.app.backend.common.model;

import com.app.backend.admin.visit.model.AdminVisitRow;
import jakarta.persistence.*;
import lombok.*;

import javax.print.Doc;
import java.math.BigDecimal;
import java.util.List;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Builder
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
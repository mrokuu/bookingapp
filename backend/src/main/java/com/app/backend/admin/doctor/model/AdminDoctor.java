package com.app.backend.admin.doctor.model;

import com.app.backend.review.entity.Review;
import jakarta.persistence.*;
import lombok.*;

import java.math.BigDecimal;
import java.util.List;

@Entity
@Getter
@Setter
@Table( name= "doctor")
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class AdminDoctor {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long id;
    private String name;
    private Long specializationId;
    private String description;
    private BigDecimal price;
    private String image;
    private String details;

}
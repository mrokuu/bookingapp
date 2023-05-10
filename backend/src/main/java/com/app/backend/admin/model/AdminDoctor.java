package com.app.backend.admin.model;

import jakarta.persistence.*;
import lombok.*;

import java.math.BigDecimal;

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
    private String specialization;
    private String description;
    private BigDecimal price;
}

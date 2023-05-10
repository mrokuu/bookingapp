package com.app.backend.admin.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.math.BigDecimal;

@Entity
@Getter
@Setter
@Table( name= "doctor")
public class AdminDoctor {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long id;
    private String name;
    private String specialization;
    private String description;
    private BigDecimal price;
}

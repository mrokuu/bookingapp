package com.app.backend.common.model;

import jakarta.persistence.*;
import lombok.Getter;

@Entity
@Getter
public class Specialization {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String description;
    private String details;
//    @OneToMany
//    @JoinColumn (name = "specializationId")
//    private List<Doctor> doctor;

}

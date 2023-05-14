package com.app.backend.specialization.model;

import com.app.backend.doctor.model.Doctor;
import jakarta.persistence.*;
import lombok.Getter;

import java.util.List;

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

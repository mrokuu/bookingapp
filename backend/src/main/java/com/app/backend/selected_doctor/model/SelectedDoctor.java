package com.app.backend.selected_doctor.model;

import com.app.backend.common.model.Doctor;
import jakarta.persistence.*;
import lombok.Getter;

import javax.print.Doc;

@Entity
@Getter
public class SelectedDoctor {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @OneToOne
    private Doctor doctor;
}

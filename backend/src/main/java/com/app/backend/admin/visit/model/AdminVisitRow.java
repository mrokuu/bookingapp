package com.app.backend.admin.visit.model;

import com.app.backend.admin.doctor.dto.AdminDoctorDto;
import com.app.backend.admin.doctor.model.AdminDoctor;
import com.app.backend.common.dto.DoctorDto;
import com.app.backend.common.model.Doctor;
import jakarta.persistence.*;
import lombok.Getter;

import java.math.BigDecimal;
import java.util.List;

@Entity
@Table(name = "visit_row")
@Getter
public class AdminVisitRow {


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private Long visitId;
    private Long doctorId;
    private BigDecimal price;



}

package com.app.backend.visit.model;

import com.app.backend.admin.doctor.model.AdminDoctor;
import com.app.backend.admin.visit.model.AdminVisitDoctor;
import com.app.backend.common.model.Doctor;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;
import java.util.List;

@Entity
@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class VisitRow {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private Long visitId;
    private Long doctorId;
    private BigDecimal price;


   

}

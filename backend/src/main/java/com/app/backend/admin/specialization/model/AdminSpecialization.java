package com.app.backend.admin.specialization.model;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Getter
@Setter
@Table( name= "specialization")
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class AdminSpecialization {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String description;
    private String details;
}

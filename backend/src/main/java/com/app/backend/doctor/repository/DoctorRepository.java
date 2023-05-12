package com.app.backend.doctor.repository;

import com.app.backend.doctor.model.Doctor;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface DoctorRepository extends JpaRepository <Doctor, Long> {

    Optional<Doctor> findById(Long id);
}

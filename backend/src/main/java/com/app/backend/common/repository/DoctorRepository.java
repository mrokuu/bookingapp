package com.app.backend.common.repository;

import com.app.backend.common.model.Doctor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


import java.util.Optional;

@Repository
public interface DoctorRepository extends JpaRepository <Doctor, Long> {

    Optional<Doctor> findById(Long id);

    Page<Doctor> findBySpecializationId(Long id, Pageable pageable);
}

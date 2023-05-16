package com.app.backend.selected_doctor.repository;

import com.app.backend.common.model.Doctor;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SelectedDoctorRepository extends JpaRepository<Doctor, Long> {
}

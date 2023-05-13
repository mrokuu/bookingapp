package com.app.backend.admin.doctor.repository;

import com.app.backend.admin.doctor.model.AdminDoctor;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AdminDoctorRepository extends JpaRepository<AdminDoctor, Long> {

}

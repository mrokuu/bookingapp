package com.app.backend.admin.specialization.repository;

import com.app.backend.admin.specialization.model.AdminSpecialization;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AdminSpecializationRepository extends JpaRepository<AdminSpecialization, Long> {
}

package com.app.backend.admin.visit.repository;

import com.app.backend.admin.visit.dto.AdminVisitDto;
import com.app.backend.admin.visit.model.AdminVisit;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AdminVisitRepository extends JpaRepository<AdminVisit, Long> {
}

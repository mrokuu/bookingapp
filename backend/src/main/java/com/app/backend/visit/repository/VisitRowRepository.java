package com.app.backend.visit.repository;

import com.app.backend.visit.model.VisitRow;
import org.springframework.data.jpa.repository.JpaRepository;

public interface VisitRowRepository extends JpaRepository<VisitRow, Long> {
}

package com.app.backend.visit.repository;

import com.app.backend.visit.model.Visit;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@Repository
public interface VisitRepository extends JpaRepository<Visit,Long> {
    List<Visit> findByUserId(Long userId);
}

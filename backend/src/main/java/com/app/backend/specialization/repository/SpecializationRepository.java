package com.app.backend.specialization.repository;

import com.app.backend.common.model.Specialization;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SpecializationRepository extends JpaRepository<Specialization, Long> {

    Specialization findByName(String name);
}

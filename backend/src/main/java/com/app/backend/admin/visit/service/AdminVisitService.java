package com.app.backend.admin.visit.service;

import com.app.backend.admin.doctor.repository.AdminDoctorRepository;
import com.app.backend.admin.visit.dto.AdminVisitDto;
import com.app.backend.admin.visit.model.AdminVisit;
import com.app.backend.admin.visit.repository.AdminVisitRepository;
import com.app.backend.common.model.Doctor;
import com.app.backend.common.repository.DoctorRepository;
import com.app.backend.visit.dto.VisitDto;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AdminVisitService {

    private final AdminVisitRepository adminVisitRepository;
    private final DoctorRepository doctorRepository;

    public Page<AdminVisit> getVisits(Pageable pageable) {
        return adminVisitRepository.findAll(
                PageRequest.of(
                        pageable.getPageNumber(),
                        pageable.getPageSize(),
                        Sort.by("id").descending())
        );
    }


    public AdminVisit getVisit(Long id) {

        return adminVisitRepository.findById(id).orElseThrow();
    }
}

package com.app.backend.admin.visit.controller;

import com.app.backend.admin.visit.dto.AdminVisitDto;
import com.app.backend.admin.visit.mapper.AdminVisitMapper;
import com.app.backend.admin.visit.model.AdminVisit;
import com.app.backend.admin.visit.service.AdminVisitService;
import com.app.backend.visit.dto.VisitDto;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
public class AdminVisitController {

    private final AdminVisitService adminVisitService;

    @GetMapping("/admin/visits")
    public Page<AdminVisitDto> getVisits(Pageable pageable) {
        return AdminVisitMapper.mapToPageDtos(adminVisitService.getVisits(pageable));
    }


    @GetMapping("/admin/visits/{id}")
    public AdminVisit getVisit(@PathVariable Long id) {
        return adminVisitService.getVisit(id);
    }


}

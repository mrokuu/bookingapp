package com.app.backend.admin.visit.controller;

import com.app.backend.admin.visit.dto.AdminDataDto;
import com.app.backend.admin.visit.dto.AdminVisitDto;
import com.app.backend.admin.visit.mapper.AdminVisitMapper;
import com.app.backend.admin.visit.model.AdminVisit;
import com.app.backend.admin.visit.model.AdminVisitStatus;
import com.app.backend.admin.visit.service.AdminVisitService;
import com.app.backend.visit.dto.VisitDto;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

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

    @PatchMapping("/admin/visits/{id}")
     public void patchVisit(@PathVariable Long id, @RequestBody Map<String, String> values){
        adminVisitService.patchVisit(id, values);
    }

    @GetMapping("/admin/visits/initData")
    public AdminDataDto getInitData(){
    return new AdminDataDto(createVisitStatusMap());
    }

    private Map<String, String> createVisitStatusMap() {
        HashMap<String,String> statuses = new HashMap<>();
        for (AdminVisitStatus value : AdminVisitStatus.values()) {
            statuses.put(value.name(), value.getValue()); 
        }
        return statuses; 
    }


}

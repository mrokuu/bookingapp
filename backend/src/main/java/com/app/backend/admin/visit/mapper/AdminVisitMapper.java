package com.app.backend.admin.visit.mapper;

import com.app.backend.admin.visit.dto.AdminVisitDto;
import com.app.backend.admin.visit.model.AdminVisit;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

public class AdminVisitMapper {


    public static Page<AdminVisitDto> mapToPageDtos(Page<AdminVisit> orders) {
        return new PageImpl<AdminVisitDto>(mapToDtoList(orders.getContent()), orders.getPageable(), orders.getTotalElements());
    }

    private static List<AdminVisitDto> mapToDtoList(List<AdminVisit> content) {
        return content.stream()
                .map(AdminVisitMapper::mapToAdminVisitDto)
                .toList();
    }

    private static AdminVisitDto mapToAdminVisitDto(AdminVisit adminOrder) {
        return AdminVisitDto.builder()
                .id(adminOrder.getId())
                .visitStatus(adminOrder.getVisitStatus())
                .placeDate(adminOrder.getPlaceDate())
                .grossValue(adminOrder.getGrossValue())
                .build();
    }
}

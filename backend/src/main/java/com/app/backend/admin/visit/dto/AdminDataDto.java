package com.app.backend.admin.visit.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;

import java.util.Map;

@Getter
@AllArgsConstructor
public class AdminDataDto {

    private Map<String, String> visitStatus;
}

package com.app.backend.review.controller;

import com.app.backend.review.dto.ReviewDto;
import com.app.backend.review.service.ReviewService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
public class ReviewController {

    private final ReviewService reviewService;

    @PostMapping("/reviews")
    public void addReview(@RequestBody ReviewDto reviewDto ){
        reviewService.addReview(reviewDto);
    }
}

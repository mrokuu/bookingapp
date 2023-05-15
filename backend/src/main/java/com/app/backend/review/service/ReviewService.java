package com.app.backend.review.service;

import com.app.backend.review.dto.ReviewDto;
import com.app.backend.common.model.Review;
import com.app.backend.review.mapper.ReviewMapper;
import com.app.backend.review.repository.ReviewRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class ReviewService {

    private final ReviewRepository reviewRepository;

    public void addReview(ReviewDto reviewDto){
        Review review = ReviewMapper.mapAToReview(reviewDto);
        reviewRepository.save(review);
    }

}

package com.app.backend.review.mapper;

import com.app.backend.admin.doctor.dto.AdminDoctorDto;
import com.app.backend.admin.doctor.model.AdminDoctor;
import com.app.backend.review.dto.ReviewDto;
import com.app.backend.review.entity.Review;
import org.jsoup.Jsoup;
import org.jsoup.safety.Safelist;



public class ReviewMapper {


    public static Review mapAToReview (ReviewDto reviewDto){
        return Review.builder()
                .authorName(cleanContrnt(reviewDto.authorName()))
                .content(cleanContrnt(reviewDto.content()))
                .doctorId(reviewDto.doctorId())
                .build();
    }

    private static String cleanContrnt(String authorName) {
        return Jsoup.clean(authorName, Safelist.none());
    }
}

package com.app.MobileRecharge.service;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.MobileRecharge.exception.ReviewNotFoundException;
import com.app.MobileRecharge.model.Review;
import com.app.MobileRecharge.repository.ReviewRepo;




@Service
@Transactional
public class ReviewService {
	private final ReviewRepo reviewRepo;

    @Autowired
    public ReviewService(ReviewRepo reviewRepo) {
        this.reviewRepo = reviewRepo;
    }

    public Review addReviewPlan(Review review) {
        return reviewRepo.save(review);
    }
    public List<Review> findAllReviewPlan() {return reviewRepo.findAll(); }

    public Review updateReviewPlan(Review review){ return reviewRepo.save(review); }

    public Review findReviewPlanById(Long id){
        return reviewRepo.findReviewPlanById(id)
                .orElseThrow(()-> new ReviewNotFoundException("Review not found"));
    }

    public void deleteById(Long id){ reviewRepo.deleteById(id);}

}

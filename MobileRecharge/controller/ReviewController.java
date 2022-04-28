package com.app.MobileRecharge.controller;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.MobileRecharge.model.Review;
import com.app.MobileRecharge.repository.ReviewRepo;
import com.app.MobileRecharge.service.ReviewService;




@RestController
@RequestMapping()
@CrossOrigin(origins="http://localhost:4200")

public class ReviewController {
	@Autowired
	private ReviewRepo reviewRepo;
	private final ReviewService reviewService;

    public ReviewController(ReviewService reviewService) {
        this.reviewService = reviewService;
    }

    @GetMapping("/review")
    public ResponseEntity<List<Review>> getAllReviewPlan(){
        List<Review> reviewPlans= reviewService.findAllReviewPlan();
        return new ResponseEntity<>(reviewPlans, HttpStatus.OK);
    }
    @GetMapping("/review/{id}")
    public ResponseEntity<Review> getReviewPlanById(@PathVariable("id") Long id){
        Review reviewPlan= reviewService.findReviewPlanById(id);
        return new ResponseEntity<>(reviewPlan, HttpStatus.OK);
    }

    @PostMapping("/review")
    public ResponseEntity<Review> addReviewPlan(@RequestBody Review review){
        Review newReviewPlan = reviewService.addReviewPlan(review);
        return new ResponseEntity<>(newReviewPlan, HttpStatus.CREATED);
    }

    @PutMapping("/review/{id}")
    public ResponseEntity<Review> updateReviewPlan(@PathVariable("id") Long id,@RequestBody Review review){
        Review reviews = reviewRepo.getById(id);
        reviews.setReviewDescription(review.getReviewDescription());
        final Review updatedReview=reviewRepo.save(reviews);
        return  ResponseEntity.ok(updatedReview);
    }

    @DeleteMapping("/review/{id}")
    public ResponseEntity<?> deleteReviewPlan(@PathVariable("id") Long id){
        reviewService.deleteById(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }

}

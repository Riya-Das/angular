package com.app.MobileRecharge.repository;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.MobileRecharge.model.Review;



public interface ReviewRepo extends JpaRepository<Review,Long> {
    void deleteById(Long id);

    Optional<Review> findReviewPlanById(Long id);
}
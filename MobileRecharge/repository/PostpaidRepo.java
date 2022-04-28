package com.app.MobileRecharge.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.MobileRecharge.model.Postpaid;


public interface PostpaidRepo extends JpaRepository<Postpaid,Long> {
    void deleteById(Long id);

    Optional<Postpaid> findPostpaidPlanById(Long id); 


}

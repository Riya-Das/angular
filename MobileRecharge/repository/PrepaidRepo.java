package com.app.MobileRecharge.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.MobileRecharge.model.Prepaid;


public interface PrepaidRepo extends JpaRepository<Prepaid,Long> {
    void deleteById(Long id);

    Optional<Prepaid> findPrepaidPlanById(Long id); 

}

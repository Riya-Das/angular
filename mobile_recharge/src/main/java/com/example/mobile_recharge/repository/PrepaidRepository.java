package com.example.mobile_recharge.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.mobile_recharge.model.Prepaid;

@Repository

public interface PrepaidRepository extends JpaRepository<Prepaid, Long> {

}

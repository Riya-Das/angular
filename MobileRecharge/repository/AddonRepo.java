package com.app.MobileRecharge.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.MobileRecharge.model.Addon;

public interface AddonRepo extends JpaRepository<Addon,Long> {
    void deleteById(Long id);

    Optional<Addon> findAddonPlanById(Long id); 


}

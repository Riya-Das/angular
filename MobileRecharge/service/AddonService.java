package com.app.MobileRecharge.service;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.MobileRecharge.exception.AddonNotFoundException;
import com.app.MobileRecharge.model.Addon;
import com.app.MobileRecharge.repository.AddonRepo;

@Service
@Transactional

public class AddonService {
	private final AddonRepo addonRepo;

    @Autowired
    public AddonService(AddonRepo addonRepo) {
        this.addonRepo = addonRepo;
    }

    public Addon addAddonPlan(Addon addon) {
        return addonRepo.save(addon);
    }
    public List<Addon> findAllAddonPlan() {return addonRepo.findAll(); }

    public Addon updateAddonPlan(Addon addon){ return addonRepo.save(addon); }

    public Addon findAddonPlanById(Long id){
        return addonRepo.findAddonPlanById(id)
                .orElseThrow(()-> new AddonNotFoundException("Addon not found"));
    }

    public void deleteById(Long id){ addonRepo.deleteById(id);}

}

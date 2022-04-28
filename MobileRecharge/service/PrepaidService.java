package com.app.MobileRecharge.service;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.MobileRecharge.exception.PrepaidNotFoundException;
import com.app.MobileRecharge.model.Prepaid;
import com.app.MobileRecharge.repository.PrepaidRepo;


@Service
@Transactional
public class PrepaidService {
	private final PrepaidRepo prepaidRepo;

    @Autowired
    public PrepaidService(PrepaidRepo prepaidRepo) {
        this.prepaidRepo = prepaidRepo;
    }

    public Prepaid addPrepaidPlan(Prepaid prepaid) {
        return prepaidRepo.save(prepaid);
    }
    public List<Prepaid> findAllPrepaidPlan() {return prepaidRepo.findAll(); }

    public Prepaid updatePrepaidPlan(Prepaid prepaid){ return prepaidRepo.save(prepaid); }

    public Prepaid findPrepaidPlanById(Long id){
        return prepaidRepo.findPrepaidPlanById(id)
                .orElseThrow(()-> new PrepaidNotFoundException("Prepaid not found"));
    }

    public void deleteById(Long id){ prepaidRepo.deleteById(id);}

}

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

import com.app.MobileRecharge.model.Prepaid;
import com.app.MobileRecharge.repository.PrepaidRepo;
import com.app.MobileRecharge.service.PrepaidService;


@RestController
@RequestMapping()
@CrossOrigin(origins="http://localhost:4200")

public class PrepaidController {
	@Autowired
	private PrepaidRepo prepaidRepo;
	private final PrepaidService prepaidService;
	
	
	public PrepaidController(PrepaidService prepaidService) {
        this.prepaidService = prepaidService;
    }
	
	@GetMapping("/prepaid")
    public ResponseEntity<List<Prepaid>> getAllPrepaidPlan(){
        List<Prepaid> prepaidPlans= prepaidService.findAllPrepaidPlan();
        return new ResponseEntity<>(prepaidPlans, HttpStatus.OK);
    }
	
	
	 @GetMapping("/prepaid/{id}")
	    public ResponseEntity<Prepaid> getPrepaidPlanById(@PathVariable("id") Long id){
		 Prepaid prepaidPlan= prepaidService.findPrepaidPlanById(id);
	        return new ResponseEntity<>(prepaidPlan, HttpStatus.OK);
	    }

	 
	 @PostMapping("/prepaid")
	    public ResponseEntity<Prepaid> addPrepaidPlan(@RequestBody Prepaid prepaid){
	        Prepaid newPrepaidPlan = prepaidService.addPrepaidPlan(prepaid);
	        return new ResponseEntity<>(newPrepaidPlan, HttpStatus.CREATED);
	    }

	    @PutMapping("/prepaid/{id}")
	    public ResponseEntity<Prepaid> updatePrepaidPlan(@PathVariable("id") Long id,@RequestBody Prepaid prepaid){
	        Prepaid prepaids = prepaidRepo.getById(id);
	        prepaids.setPrepaidDescription(prepaid.getPrepaidDescription());
	        prepaids.setPrepaidName(prepaid.getPrepaidName());
	        prepaids.setPrepaidType(prepaid.getPrepaidType());
	        prepaids.setPrepaidPrice(prepaid.getPrepaidPrice());
	        prepaids.setPrepaidOffer(prepaid.getPrepaidOffer());
	        prepaids.setPrepaidValidity(prepaid.getPrepaidValidity());
	        final Prepaid updatedPrepaid=prepaidRepo.save(prepaids);
	        return  ResponseEntity.ok(updatedPrepaid);
	    }

	    @DeleteMapping("/prepaid/{id}")
	    public ResponseEntity<?> deletePrepaidPlan(@PathVariable("id") Long id){
	        prepaidService.deleteById(id);
	        return new ResponseEntity<>(HttpStatus.OK);
	    }

}

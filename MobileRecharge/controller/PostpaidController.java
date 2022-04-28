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

import com.app.MobileRecharge.model.Postpaid;
import com.app.MobileRecharge.repository.PostpaidRepo;
import com.app.MobileRecharge.service.PostpaidService;

@RestController
@RequestMapping()
@CrossOrigin(origins="http://localhost:4200")

public class PostpaidController {
	@Autowired
	private PostpaidRepo postpaidRepo;
	private final PostpaidService postpaidService;
	
	
	public PostpaidController(PostpaidService postpaidService) {
        this.postpaidService = postpaidService;
    }
	
	@GetMapping("/postpaid")
    public ResponseEntity<List<Postpaid>> getAllPostpaidPlan(){
        List<Postpaid> postpaidPlans= postpaidService.findAllPostpaidPlan();
        return new ResponseEntity<>(postpaidPlans, HttpStatus.OK);
    }
	
	
	 @GetMapping("/postpaid/{id}")
	    public ResponseEntity<Postpaid> getPostpaidPlanById(@PathVariable("id") Long id){
		 Postpaid postpaidPlan= postpaidService.findPostpaidPlanById(id);
	        return new ResponseEntity<>(postpaidPlan, HttpStatus.OK);
	    }

	 
	 @PostMapping("/postpaid")
	    public ResponseEntity<Postpaid> addPostpaidPlan(@RequestBody Postpaid postpaid){
	        Postpaid newPostpaidPlan = postpaidService.addPostpaidPlan(postpaid);
	        return new ResponseEntity<>(newPostpaidPlan, HttpStatus.CREATED);
	    }

	    @PutMapping("/postpaid/{id}")
	    public ResponseEntity<Postpaid> updatePostpaidPlan(@PathVariable("id") Long id,@RequestBody Postpaid postpaid){
	        Postpaid postpaids = postpaidRepo.getById(id);
	        postpaids.setPostpaidName(postpaid.getPostpaidName());
	        postpaids.setPostpaidType(postpaid.getPostpaidType());
	        postpaids.setPostpaidPrice(postpaid.getPostpaidPrice());
	        postpaids.setPostpaidOffer(postpaid.getPostpaidOffer());
	        postpaids.setPostpaidValidity(postpaid.getPostpaidValidity());
	        postpaids.setPostpaidDescription(postpaid.getPostpaidDescription());
	        final Postpaid updatedPostpaid=postpaidRepo.save(postpaids);
	        return  ResponseEntity.ok(updatedPostpaid);
	    }

	    @DeleteMapping("/postpaid/{id}")
	    public ResponseEntity<?> deletePostpaidPlan(@PathVariable("id") Long id){
	        postpaidService.deleteById(id);
	        return new ResponseEntity<>(HttpStatus.OK);
	    }

}

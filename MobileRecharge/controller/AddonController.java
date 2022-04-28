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

import com.app.MobileRecharge.model.Addon;
import com.app.MobileRecharge.repository.AddonRepo;
import com.app.MobileRecharge.service.AddonService;

@RestController
@RequestMapping()
@CrossOrigin(origins="http://localhost:4200")
public class AddonController {
	@Autowired
	private AddonRepo addonRepo;
	private final AddonService addonService;
	
	
	public AddonController(AddonService addonService) {
        this.addonService = addonService;
    }
	
	@GetMapping("/addon")
    public ResponseEntity<List<Addon>> getAllAddonPlan(){
        List<Addon> addonPlans= addonService.findAllAddonPlan();
        return new ResponseEntity<>(addonPlans, HttpStatus.OK);
    }
	
	
	 @GetMapping("/addon/{id}")
	    public ResponseEntity<Addon> getAddonPlanById(@PathVariable("id") Long id){
		 Addon addonPlan= addonService.findAddonPlanById(id);
	        return new ResponseEntity<>(addonPlan, HttpStatus.OK);
	    }

	 
	 @PostMapping("/addon")
	    public ResponseEntity<Addon> addAddonPlan(@RequestBody Addon addon){
	        Addon newAddonPlan = addonService.addAddonPlan(addon);
	        return new ResponseEntity<>(newAddonPlan, HttpStatus.CREATED);
	    }

	    @PutMapping("/addon/{id}")
	    public ResponseEntity<Addon> updateAddonPlan(@PathVariable("id") Long id,@RequestBody Addon addon){
	  Addon addons = addonRepo.getById(id);
	        addons.setAddonName(addon.getAddonName());
	        addons.setAddonType(addon.getAddonType());
	        addons.setAddonPrice(addon.getAddonPrice());
	        addons.setAddonValidity(addon.getAddonValidity());
	        addons.setAddonDescription(addon.getAddonDescription());
	        final Addon updatedAddon=addonRepo.save(addons);
	        return  ResponseEntity.ok(updatedAddon);
	    }

	    @DeleteMapping("/addon/{id}")
	    public ResponseEntity<?> deleteAddonPlan(@PathVariable("id") Long id){
	        addonService.deleteById(id);
	        return new ResponseEntity<>(HttpStatus.OK);
	    }

}

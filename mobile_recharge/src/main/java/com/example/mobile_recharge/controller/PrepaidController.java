package com.example.mobile_recharge.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.mobile_recharge.exception.ResourceNotFoundException;
import com.example.mobile_recharge.model.Prepaid;
import com.example.mobile_recharge.repository.PrepaidRepository;



@CrossOrigin(origins = "*")
@RestController
@Controller

public class PrepaidController {
	@Autowired
	private PrepaidRepository prepaidRepository;

	@RequestMapping("/prepaid")
	public List<Prepaid> getAllPrepaids() {
		return prepaidRepository.findAll();
	}

	@RequestMapping("/prepaid/{id}")
	public ResponseEntity<Prepaid> getPrepaidById(@PathVariable(value = "id") Long prepaidId)
			throws ResourceNotFoundException {
		Prepaid prepaid = prepaidRepository.findById(prepaidId)
				.orElseThrow(() -> new ResourceNotFoundException("Prepaid not found for this id :: " + prepaidId));
		return ResponseEntity.ok().body(prepaid);
	}

	@PostMapping("/add")
	public Prepaid createPrepaid( Prepaid prepaid) {
		return prepaidRepository.save(prepaid);
	}

	@PutMapping("/add/{id}")
	public ResponseEntity<Prepaid> updatePrepaid(@PathVariable(value = "id") Long prepaidId,
			 @RequestBody Prepaid prepaidDetails) throws ResourceNotFoundException {
		Prepaid prepaid = prepaidRepository.findById(prepaidId)
				.orElseThrow(() -> new ResourceNotFoundException("Prepaid not found for this id :: " + prepaidId));

		prepaid.setId(prepaidDetails.getId());
		prepaid.setRechargeType(prepaidDetails.getRechargeType());
		prepaid.setRechargeName(prepaidDetails.getRechargeName());
		prepaid.setRechargePrice(prepaidDetails.getRechargePrice());
		prepaid.setDescription(prepaidDetails.getDescription());
		prepaid.setOffer(prepaidDetails.getOffer());
		prepaid.setPlanValidity(prepaidDetails.getPlanValidity());
		final Prepaid updatedPrepaid = prepaidRepository.save(prepaid);
		return ResponseEntity.ok(updatedPrepaid);
	}

	@DeleteMapping("/prepaid/{id}")
	public Map<String, Boolean> deletePrepaid(@PathVariable(value = "id") Long prepaidId)
			throws ResourceNotFoundException {
		Prepaid prepaid = prepaidRepository.findById(prepaidId)
				.orElseThrow(() -> new ResourceNotFoundException("Prepaid not found for this id :: " + prepaidId));

		prepaidRepository.delete(prepaid);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return response;
	}

}

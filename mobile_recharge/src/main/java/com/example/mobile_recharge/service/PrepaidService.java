package com.example.mobile_recharge.service;

import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.mobile_recharge.model.Prepaid;
import com.example.mobile_recharge.repository.PrepaidRepository;

@Service
@Transactional
public class PrepaidService {
    private final PrepaidRepository prepaidRepository;
    @Autowired
    public PrepaidService(PrepaidRepository prepaidRepository) {
    	this.prepaidRepository=prepaidRepository;
    }
    
    public Prepaid addPrepaid(Prepaid prepaid) {
        return prepaidRepository.save(prepaid);
    }
    
    public List<Prepaid> findAllPrepaid(){
    	return prepaidRepository.findAll();
    }
    
    public Prepaid updatePrepaid(Prepaid prepaid) {
        return prepaidRepository.save(prepaid);
    }

    public Optional<Prepaid> getPrepaidById(Long id) {
        return prepaidRepository.findById(id);
    }

    public void deletePrepaid(Long id){
    	prepaidRepository.deleteById(id);
    	}
}

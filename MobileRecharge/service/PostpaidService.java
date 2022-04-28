package com.app.MobileRecharge.service;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.MobileRecharge.exception.PostpaidNotFoundException;
import com.app.MobileRecharge.model.Postpaid;
import com.app.MobileRecharge.repository.PostpaidRepo;



@Service
@Transactional

public class PostpaidService {
	private final PostpaidRepo postpaidRepo;

    @Autowired
    public PostpaidService(PostpaidRepo postpaidRepo) {
        this.postpaidRepo = postpaidRepo;
    }

    public Postpaid addPostpaidPlan(Postpaid postpaid) {
        return postpaidRepo.save(postpaid);
    }
    public List<Postpaid> findAllPostpaidPlan() {return postpaidRepo.findAll(); }

    public Postpaid updatePostpaidPlan(Postpaid postpaid){ return postpaidRepo.save(postpaid); }

    public Postpaid findPostpaidPlanById(Long id){
        return postpaidRepo.findPostpaidPlanById(id)
                .orElseThrow(()-> new PostpaidNotFoundException("Postpaid not found"));
    }

    public void deleteById(Long id){ postpaidRepo.deleteById(id);}

}

package com.example.mobile_recharge.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "prepaid")

public class Prepaid {
	   @Id
	    @GeneratedValue(strategy = GenerationType.AUTO)
	private long id;
	private String RechargeType;
	private String RechargeName ;
	private String RechargePrice;
	private String Description;
	private String Offer;
	private String PlanValidity;
//  
//
//    public Prepaid() {}
//    
//	public Prepaid(long id, String rechargeType, String rechargeName, String rechargePrice, String description,
//			String offer, String planValidity,String PrepaidCode) {
//		this.id = id;
//		this.RechargeType = rechargeType;
//		this.RechargeName = rechargeName;
//		this.RechargePrice = rechargePrice;
//		this.Description = description;
//		this.Offer = offer;
//		this.PlanValidity = planValidity;
//	}
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getRechargeType() {
		return RechargeType;
	}
	public void setRechargeType(String rechargeType) {
		RechargeType = rechargeType;
	}
	public String getRechargeName() {
		return RechargeName;
	}
	public void setRechargeName(String rechargeName) {
		RechargeName = rechargeName;
	}
	public String getRechargePrice() {
		return RechargePrice;
	}
	public void setRechargePrice(String rechargePrice) {
		RechargePrice = rechargePrice;
	}
	public String getDescription() {
		return Description;
	}
	public void setDescription(String description) {
		Description = description;
	}
	public String getOffer() {
		return Offer;
	}
	public void setOffer(String offer) {
		Offer = offer;
	}
	public String getPlanValidity() {
		return PlanValidity;
	}
	public void setPlanValidity(String planValidity) {
		PlanValidity = planValidity;
	}

	}

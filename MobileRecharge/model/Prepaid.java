package com.app.MobileRecharge.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "prepaidplans")

public class Prepaid {
	 @Id
	    @GeneratedValue(strategy = GenerationType.AUTO)
	    @Column(nullable = false, updatable = false)
	    private long id;
	 	private String PrepaidName;
	 	private String PrepaidType;
	 	private String PrepaidPrice;
	 	private String PrepaidOffer;
	 	private String PrepaidValidity;
	 	private String PrepaidDescription;
	 	
	 	public Prepaid() {}

				
		
	 	
		public Prepaid(long id, String prepaidName, String prepaidType, String prepaidPrice, String prepaidOffer,
				String prepaidValidity, String prepaidDescription) {
			this.id = id;
			this.PrepaidName = prepaidName;
			this.PrepaidType = prepaidType;
			this.PrepaidPrice = prepaidPrice;
			this.PrepaidOffer = prepaidOffer;
			this.PrepaidValidity = prepaidValidity;
			this.PrepaidDescription = prepaidDescription;
		}




		public long getId() {
			return id;
		}




		public void setId(long id) {
			this.id = id;
		}




		public String getPrepaidName() {
			return PrepaidName;
		}




		public void setPrepaidName(String prepaidName) {
			PrepaidName = prepaidName;
		}




		public String getPrepaidType() {
			return PrepaidType;
		}




		public void setPrepaidType(String prepaidType) {
			PrepaidType = prepaidType;
		}




		public String getPrepaidPrice() {
			return PrepaidPrice;
		}




		public void setPrepaidPrice(String prepaidPrice) {
			PrepaidPrice = prepaidPrice;
		}




		public String getPrepaidOffer() {
			return PrepaidOffer;
		}




		public void setPrepaidOffer(String prepaidOffer) {
			PrepaidOffer = prepaidOffer;
		}




		public String getPrepaidValidity() {
			return PrepaidValidity;
		}




		public void setPrepaidValidity(String prepaidValidity) {
			PrepaidValidity = prepaidValidity;
		}




		public String getPrepaidDescription() {
			return PrepaidDescription;
		}




		public void setPrepaidDescription(String prepaidDescription) {
			PrepaidDescription = prepaidDescription;
		}




		@Override
	    public String toString() {
	        return "Prepaid{" +
	                "id=" + id +
	                ", PrepaidName='" + PrepaidName + '\'' +
	                ", PrepaidType='" + PrepaidType + '\'' +
	                ", PrepaidPrice='" + PrepaidPrice + '\'' +
	                ", PrepaidOffer='" + PrepaidOffer + '\'' +
	                ", PrepaidValidity='" + PrepaidValidity + '\'' +
	                ", PrepaidDescription='" + PrepaidDescription + '\'' +
	                '}';
	    }

}

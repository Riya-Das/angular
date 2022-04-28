package com.app.MobileRecharge.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "postpaidplans")
public class Postpaid {
	 @Id
	    @GeneratedValue(strategy = GenerationType.AUTO)
	    @Column(nullable = false, updatable = false)
	    private long id;
	 	private String PostpaidName;
	 	private String PostpaidType;
	 	private String PostpaidPrice;
	 	private String PostpaidOffer;
	 	private String PostpaidValidity;
	 	private String PostpaidDescription;
	 	
	 	public Postpaid() {}

				
		 public Postpaid(long id, String postpaidName, String postpaidType, String postpaidPrice, String postpaidOffer,
				String postpaidValidity, String postpaidDescription) {
			this.id = id;
			this.PostpaidName = postpaidName;
			this.PostpaidType = postpaidType;
			this.PostpaidPrice = postpaidPrice;
			this.PostpaidOffer = postpaidOffer;
			this.PostpaidValidity = postpaidValidity;
			this.PostpaidDescription = postpaidDescription;
		}


		public long getId() {
			return id;
		}


		public void setId(long id) {
			this.id = id;
		}


		public String getPostpaidName() {
			return PostpaidName;
		}


		public void setPostpaidName(String postpaidName) {
			PostpaidName = postpaidName;
		}


		public String getPostpaidType() {
			return PostpaidType;
		}


		public void setPostpaidType(String postpaidType) {
			PostpaidType = postpaidType;
		}


		public String getPostpaidPrice() {
			return PostpaidPrice;
		}


		public void setPostpaidPrice(String postpaidPrice) {
			PostpaidPrice = postpaidPrice;
		}


		public String getPostpaidOffer() {
			return PostpaidOffer;
		}


		public void setPostpaidOffer(String postpaidOffer) {
			PostpaidOffer = postpaidOffer;
		}


		public String getPostpaidValidity() {
			return PostpaidValidity;
		}


		public void setPostpaidValidity(String postpaidValidity) {
			PostpaidValidity = postpaidValidity;
		}


		public String getPostpaidDescription() {
			return PostpaidDescription;
		}


		public void setPostpaidDescription(String postpaidDescription) {
			PostpaidDescription = postpaidDescription;
		}


		@Override
		    public String toString() {
		        return "Postpaid{" +
		                "id=" + id +
		                ", PostpaidName='" + PostpaidName + '\'' +
		                ", PostpaidType='" + PostpaidType + '\'' +
		                ", PostpaidPrice='" + PostpaidPrice + '\'' +
		                ", PostpaidOffer='" + PostpaidOffer + '\'' +
		                ", PostpaidValidity='" + PostpaidValidity + '\'' +
		                ", PostpaidDescription='" + PostpaidDescription + '\'' +
		                '}';
		    }
	 	
	 	
}

package com.app.MobileRecharge.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "review")

public class Review {
	 @Id
	    @GeneratedValue(strategy = GenerationType.AUTO)
	    @Column(nullable = false, updatable = false)
	    private long id;
	    private String reviewDescription;
	    
	    public Review() {}

		public Review(long id, String reviewDescription) {
			this.id = id;
			this.reviewDescription = reviewDescription;
		}

		public long getId() {
			return id;
		}

		public void setId(long id) {
			this.id = id;
		}

		public String getReviewDescription() {
			return reviewDescription;
		}

		public void setReviewDescription(String reviewDescription) {
			this.reviewDescription = reviewDescription;
		}
		 @Override
		    public String toString() {
		        return "Review{" +
		                "id=" + id +
		                ", reviewDescription='" + reviewDescription + '\'' +
		                '}';
		    }
	    
}

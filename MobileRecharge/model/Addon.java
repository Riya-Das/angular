package com.app.MobileRecharge.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "addonplans")
public class Addon {
	 @Id
	    @GeneratedValue(strategy = GenerationType.AUTO)
	    @Column(nullable = false, updatable = false)
	    private long id;
	 	private String AddonName;
	 	private String AddonType;
	 	private String AddonPrice;
	 	private String AddonValidity;
	 	private String AddonDescription;
	 	
		public Addon() {}
		
		public Addon(long id, String addonName, String addonType, String addonPrice, String addonValidity,
				String addonDescription) {
			super();
			this.id = id;
			AddonName = addonName;
			AddonType = addonType;
			AddonPrice = addonPrice;
			AddonValidity = addonValidity;
			AddonDescription = addonDescription;
		}

		public long getId() {
			return id;
		}

		public void setId(long id) {
			this.id = id;
		}

		public String getAddonName() {
			return AddonName;
		}

		public void setAddonName(String addonName) {
			AddonName = addonName;
		}

		public String getAddonType() {
			return AddonType;
		}

		public void setAddonType(String addonType) {
			AddonType = addonType;
		}

		public String getAddonPrice() {
			return AddonPrice;
		}

		public void setAddonPrice(String addonPrice) {
			AddonPrice = addonPrice;
		}

		public String getAddonValidity() {
			return AddonValidity;
		}

		public void setAddonValidity(String addonValidity) {
			AddonValidity = addonValidity;
		}

		public String getAddonDescription() {
			return AddonDescription;
		}

		public void setAddonDescription(String addonDescription) {
			AddonDescription = addonDescription;
		}
	 	
		@Override
	    public String toString() {
	        return "Addon{" +
	                "id=" + id +
	                ", AddonName='" + AddonName + '\'' +
	                ", AddonType='" + AddonType + '\'' +
	                ", AddonPrice='" + AddonPrice + '\'' +
	                ", AddonValidity='" + AddonValidity + '\'' +
	                ", AddonDescription='" + AddonDescription + '\'' +
	                '}';
	    }

}

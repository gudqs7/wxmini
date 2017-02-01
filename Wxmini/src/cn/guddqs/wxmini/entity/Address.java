package cn.guddqs.wxmini.entity;

public class Address implements java.io.Serializable {

	private static final long serialVersionUID = 4366754153138107897L;

	@Override
	public String toString() {
		return "Address [id=" + id + ", userId=" + userId + ", name=" + name + ", phone=" + phone + ", postNo=" + postNo
				+ ", province=" + province + ", city=" + city + ", area=" + area + ", street=" + street + ", desc="
				+ desc + ", isDefault=" + isDefault + "]";
	}

	private Integer id;
	private Integer userId;
	private String name;
	private String phone;
	private String postNo;
	private String province;
	private String city;
	private String area;
	private String street;
	private String desc;
	private Boolean isDefault;

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public Integer getUserId() {
		return userId;
	}

	public void setUserId(Integer userId) {
		this.userId = userId;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getPhone() {
		return phone;
	}

	public void setPhone(String phone) {
		this.phone = phone;
	}

	public String getPostNo() {
		return postNo;
	}

	public void setPostNo(String postNo) {
		this.postNo = postNo;
	}

	public String getProvince() {
		return province;
	}

	public void setProvince(String province) {
		this.province = province;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public String getArea() {
		return area;
	}

	public void setArea(String area) {
		this.area = area;
	}

	public String getStreet() {
		return street;
	}

	public void setStreet(String street) {
		this.street = street;
	}

	public String getDesc() {
		return desc;
	}

	public void setDesc(String desc) {
		this.desc = desc;
	}

	public Boolean getIsDefault() {
		return isDefault;
	}

	public void setIsDefault(Boolean isDefault) {
		this.isDefault = isDefault;
	}

	public static long getSerialversionuid() {
		return serialVersionUID;
	}

}

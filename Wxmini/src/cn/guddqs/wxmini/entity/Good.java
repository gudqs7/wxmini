package cn.guddqs.wxmini.entity;

import java.util.Arrays;
import java.util.List;

public class Good {
	private Integer id;
	private String title;
	private String[] pics;
	private Integer tc;
	private String[] tcs;
	private Double[] tcprices;
	private Double price;
	private Double prevprice;
	private Integer store;
	private Type type;
	private List<Xq> xqs;

	public Good() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Good(Integer id, String title, Integer tc, String[] tcs, Double[] tcprices, Double price,
			Double prevprice, Integer store, Type type) {
		super();
		this.id = id;
		this.title = title;
		this.tc = tc;
		this.tcs = tcs;
		this.tcprices = tcprices;
		this.price = price;
		this.prevprice = prevprice;
		this.store = store;
		this.type = type;
	}

	@Override
	public String toString() {
		return "Good [id=" + id + ", title=" + title + ", pics=" + pics + ", tc=" + tc + ", tcs=" + Arrays.toString(tcs)
				+ ", tcprices=" + Arrays.toString(tcprices) + ", price=" + price + ", prevprice=" + prevprice
				+ ", store=" + store + ", type=" + type + "]";
	}
	
	

	public List<Xq> getXqs() {
		return xqs;
	}

	public void setXqs(List<Xq> xqs) {
		this.xqs = xqs;
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	

	public String[] getPics() {
		return pics;
	}

	public void setPics(String[] pics) {
		this.pics = pics;
	}

	public Integer getTc() {
		return tc;
	}

	public void setTc(Integer tc) {
		this.tc = tc;
	}

	public String[] getTcs() {
		return tcs;
	}

	public void setTcs(String[] tcs) {
		this.tcs = tcs;
	}

	public Double[] getTcprices() {
		return tcprices;
	}

	public void setTcprices(Double[] tcprices) {
		this.tcprices = tcprices;
	}

	public Double getPrice() {
		return price;
	}

	public void setPrice(Double price) {
		this.price = price;
	}

	public Double getPrevprice() {
		return prevprice;
	}

	public void setPrevprice(Double prevprice) {
		this.prevprice = prevprice;
	}

	public Integer getStore() {
		return store;
	}

	public void setStore(Integer store) {
		this.store = store;
	}

	public Type getType() {
		return type;
	}

	public void setType(Type type) {
		this.type = type;
	}

}

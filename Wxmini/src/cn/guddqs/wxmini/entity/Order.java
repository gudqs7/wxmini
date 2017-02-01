package cn.guddqs.wxmini.entity;

public class Order {
	
	private Integer id;
	
	private Good good;
	
	private Integer num;
	
	private String status;
	
	private Double totalPrice;

	private Wuliu wuliu;
	
	
	public Order(Integer id, Good good, Integer num, String status, Double totalPrice) {
		super();
		this.id = id;
		this.good = good;
		this.num = num;
		this.status = status;
		this.totalPrice = totalPrice;
	}

	public Order() {
		super();
		// TODO Auto-generated constructor stub
	}

	@Override
	public String toString() {
		return "Order [id=" + id + ", good=" + good + ", num=" + num + ", status=" + status + ", totalPrice="
				+ totalPrice + "]";
	}

	
	
	public Wuliu getWuliu() {
		return wuliu;
	}

	public void setWuliu(Wuliu wuliu) {
		this.wuliu = wuliu;
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public Good getGood() {
		return good;
	}

	public void setGood(Good good) {
		this.good = good;
	}

	public Integer getNum() {
		return num;
	}

	public void setNum(Integer num) {
		this.num = num;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public Double getTotalPrice() {
		return totalPrice;
	}

	public void setTotalPrice(Double totalPrice) {
		this.totalPrice = totalPrice;
	}
	
	
	
}

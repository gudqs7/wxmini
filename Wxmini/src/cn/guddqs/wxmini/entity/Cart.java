package cn.guddqs.wxmini.entity;

public class Cart {
	private Integer id;

	private Good good;

	private Integer num;

	private Integer mode;

	private Boolean checked;

	public Cart() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Cart(Integer id, Good good, Integer num, Integer mode, Boolean checked) {
		super();
		this.id = id;
		this.good = good;
		this.num = num;
		this.mode = mode;
		this.checked = checked;
	}

	@Override
	public String toString() {
		return "Cart [id=" + id + ", good=" + good + ", num=" + num + ", mode=" + mode + ", checked=" + checked + "]";
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

	public Integer getMode() {
		return mode;
	}

	public void setMode(Integer mode) {
		this.mode = mode;
	}

	public Boolean getChecked() {
		return checked;
	}

	public void setChecked(Boolean checked) {
		this.checked = checked;
	}

}

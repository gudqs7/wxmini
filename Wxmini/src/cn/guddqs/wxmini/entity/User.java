package cn.guddqs.wxmini.entity;

public class User implements java.io.Serializable {

	private static final long serialVersionUID = -1896767450060325516L;

	private Integer id;
	private String openid;
	private Float jifen;

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getOpenid() {
		return openid;
	}

	public void setOpenid(String openid) {
		this.openid = openid;
	}

	public Float getJifen() {
		return jifen;
	}

	public void setJifen(Float jifen) {
		this.jifen = jifen;
	}

}

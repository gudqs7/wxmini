package cn.guddqs.wxmini.entity;

public class Xq {
	private Integer id;
	private Integer type;
	private String content;

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public Integer getType() {
		return type;
	}

	public void setType(Integer type) {
		this.type = type;
	}

	public String getContent() {
		return content;
	}

	public void setContent(String content) {
		this.content = content;
	}

	@Override
	public String toString() {
		return "Xq [id=" + id + ", type=" + type + ", content=" + content + "]";
	}

	public Xq() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Xq(Integer id, Integer type, String content) {
		super();
		this.id = id;
		this.type = type;
		this.content = content;
	}

}

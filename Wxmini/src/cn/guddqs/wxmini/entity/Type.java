package cn.guddqs.wxmini.entity;

import java.util.List;

public class Type {
	private Integer id;
	private String name;
	private Integer parentId;
	private List<Good> goods;
	
	
	
	public List<Good> getGoods() {
		return goods;
	}

	public void setGoods(List<Good> goods) {
		this.goods = goods;
	}

	public Type() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Type(Integer id, String name, Integer parentId) {
		super();
		this.id = id;
		this.name = name;
		this.parentId = parentId;
	}

	@Override
	public String toString() {
		return "Type [id=" + id + ", name=" + name + ", parentId=" + parentId + "]";
	}

	public Integer getParentId() {
		return parentId;
	}

	public void setParentId(Integer parentId) {
		this.parentId = parentId;
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

}

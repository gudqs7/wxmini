package cn.guddqs.wxmini.entity;

import java.util.Arrays;

public class Wuliu {

	private Integer id;
	private String no;

	private String[] infos;

	public Wuliu() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Wuliu(Integer id, String no, String[] infos) {
		super();
		this.id = id;
		this.no = no;
		this.infos = infos;
	}

	@Override
	public String toString() {
		return "Wuliu [id=" + id + ", no=" + no + ", infos=" + Arrays.toString(infos) + "]";
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getNo() {
		return no;
	}

	public void setNo(String no) {
		this.no = no;
	}

	public String[] getInfos() {
		return infos;
	}

	public void setInfos(String[] infos) {
		this.infos = infos;
	}

}

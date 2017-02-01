package cn.guddqs.wxmini.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

import cn.guddqs.wxmini.entity.Good;
import cn.guddqs.wxmini.entity.Type;
import cn.guddqs.wxmini.entity.Xq;

@Service
public class GoodService {

	private static List<Good> alist = new ArrayList<>();

	static {
		for (int i = 1; i < 11; i++) {
			Good good = new Good();
			good.setId(i);
			good.setTitle(i + "雷柏v500 RGB机械游戏键盘 机械键盘 黑轴 青轴 游戏键盘 有线背光");
			good.setTc(0);
			good.setPics(new String[]{"../../../../image/01.jpg","../../../../image/02.jpg","../../../../image/03.jpg"});
			if (i % 2 == 0) {
				good.setTcs(new String[] { "官方标配", "套餐一", "套餐二" });
			} else {
				good.setTcs(new String[] { "官方标配", "套餐一", "套餐二", "套餐三", "套餐四" });
			}
			if (i % 2 == 0) {
				good.setTcprices(new Double[] { 169.0, 200.0, 225.0 });
			} else {
				good.setTcprices(new Double[] { 169.0, 200.0, 225.0, 300.0, 325.0 });
			}
			good.setPrevprice(599.9);
			good.setStore(9);
			good.setType(new Type(10, "机械键盘", 1));
			good.setPrice(169.0);
			good.setXqs(getXqs());
			alist.add(good);
			System.out.println(good);
		}
	}

	public void insertGood(Good good) {
		good.setId(getMaxId());
		alist.add(good);
	}

	private static List<Xq> getXqs() {
		List<Xq> xqs=new ArrayList<>();
		for (int i = 1; i <5; i++) {
			if(i<4){
				Xq tw=new Xq(i, 0, "../../../../image/0"+i+".jpg");
				xqs.add(tw);
			}else{
				Xq tw=new Xq(i, 1, "史上第一好键盘,各种机械轴俱全,欢迎选购!");
				xqs.add(tw);
			}
		}
		return xqs;
	}

	private Integer getMaxId() {
		int id = 0;
		for (Good good : alist) {
			if (good.getId().intValue() > id) {
				id = good.getId();
			}
		}
		return id + 1;
	}

	public void delGood(int id) {
		for (Good good : alist) {
			if (good.getId().equals(id)) {
				alist.remove(good);
				break;
			}
		}
	}

	public void updateGood(Good good) {
		for (Good god : alist) {
			if (god.getId().equals(good.getId())) {
				god = good;
				break;
			}
		}
	}

	public Good getGood(int id) {
		for (Good good : alist) {
			if (good.getId().equals(id)) {
				return good;
			}
		}
		return null;
	}

	public List<Good> getList() {
		return alist;
	}

	public List<Good> getOnly8List() {
		List<Good> list=new ArrayList<>();
		for(int i=0;i<8;i++){
			list.add(alist.get(i));
		}
		return list;
	}

	public List<Good> getList(Integer typeId, String keyword) {
		System.out.println("typeId:"+typeId+"-->keyword:"+keyword);
		return alist;
	}

}

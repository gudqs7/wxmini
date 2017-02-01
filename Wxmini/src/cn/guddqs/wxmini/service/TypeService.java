package cn.guddqs.wxmini.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

import cn.guddqs.wxmini.entity.Good;
import cn.guddqs.wxmini.entity.Type;

@Service
public class TypeService {

	private static List<Type> alist = new ArrayList<>();

	static {
		for (int i = 1; i < 11; i++) {
			Type type = new Type();
			type.setId(i);
			type.setName("Test0"+i);
			type.setGoods(getGoods());
			alist.add(type);
			System.out.println(type);
		}
	}

	public void insertType(Type type) {
		type.setId(getMaxId());
		alist.add(type);
	}

	private static List<Good> getGoods() {
		List<Good> goods=new GoodService().getOnly8List();
		return goods;
	}

	private Integer getMaxId() {
		int id = 0;
		for (Type type : alist) {
			if (type.getId().intValue() > id) {
				id = type.getId();
			}
		}
		return id + 1;
	}

	public void delType(int id) {
		for (Type type : alist) {
			if (type.getId().equals(id)) {
				alist.remove(type);
				break;
			}
		}
	}

	public void updateType(Type type) {
		for (Type god : alist) {
			if (god.getId().equals(type.getId())) {
				god = type;
				break;
			}
		}
	}

	public Type getType(int id) {
		for (Type type : alist) {
			if (type.getId().equals(id)) {
				return type;
			}
		}
		return null;
	}

	public List<Type> getList() {
		return alist;
	}

}

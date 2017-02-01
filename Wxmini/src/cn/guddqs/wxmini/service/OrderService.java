package cn.guddqs.wxmini.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

import cn.guddqs.wxmini.entity.Order;

@Service
public class OrderService {

	private static List<Order> alist = new ArrayList<>();

	private static GoodService goodService = new GoodService();

	static {
		for (int i = 1; i < 11; i++) {
			Order order = new Order();
			order.setId(i);
			order.setGood(goodService.getGood(i));
			order.setNum(2);
			order.setTotalPrice(338.0);
			switch (i % 3) {
			case 0:
				order.setStatus("交易成功");
				break;
			case 1:
				order.setStatus("未付款");
				break;
			case 2:
				order.setStatus("待收货");
				break;

			}
			alist.add(order);
			System.out.println(order);
		}
	}

	public int insertOrder(Order order) {
		int id=getMaxId();
		order.setId(id);
		alist.add(order);
		return id;
	}

	private Integer getMaxId() {
		int id = 0;
		for (Order order : alist) {
			if (order.getId().intValue() > id) {
				id = order.getId();
			}
		}
		return id + 1;
	}

	public void delOrder(int id) {
		for (Order order : alist) {
			if (order.getId().equals(id)) {
				alist.remove(order);
				break;
			}
		}
	}

	public void updateOrder(Order order) {
		for (Order ord : alist) {
			if (ord.getId().equals(order.getId())) {
				ord = order;
				break;
			}
		}
	}

	public Order getOrder(int id) {
		for (Order order : alist) {
			if (order.getId().equals(id)) {
				return order;
			}
		}
		return null;
	}

	public List<Order> getList() {
		return alist;
	}

	public List<Order> getList(Integer typeId) {
		List<Order> olist=new ArrayList<>();
		if (typeId == 0) {
			return getList();
		}else if(typeId==1){
			for (Order order : alist) {
				if(order.getStatus().equals("未付款")){
					olist.add(order);
				}
			}
		}else{
			for (Order order : alist) {
				if(order.getStatus().equals("待收货")){
					olist.add(order);
				}
			}
		}
		return olist;
	}

}

package cn.guddqs.wxmini.service;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import org.springframework.stereotype.Service;

import cn.guddqs.wxmini.entity.Cart;
import cn.guddqs.wxmini.entity.Order;

@Service
public class CartService {

	private static List<Cart> alist = new ArrayList<>();

	private static GoodService goodService = new GoodService();

	static {
		for (int i = 1; i < 11; i++) {
			Cart cart = new Cart();
			cart.setId(i);
			cart.setGood(goodService.getGood(i));
			cart.setNum(2);
			cart.setChecked(false);
			cart.setMode(0);
			
			alist.add(cart);
			System.out.println(cart);
		}
	}

	public void insertCart(Cart cart) {
		cart.setId(getMaxId());
		alist.add(cart);
	}

	private Integer getMaxId() {
		int id = 0;
		for (Cart cart : alist) {
			if (cart.getId().intValue() > id) {
				id = cart.getId();
			}
		}
		return id + 1;
	}

	public void delCart(int id) {
		for (Cart cart : alist) {
			if (cart.getId().equals(id)) {
				alist.remove(cart);
				break;
			}
		}
	}

	public void updateCart(Cart cart) {
		for (Cart ord : alist) {
			if (ord.getId().equals(cart.getId())) {
				ord = cart;
				break;
			}
		}
	}

	public Cart getCart(int id) {
		for (Cart cart : alist) {
			if (cart.getId().equals(id)) {
				return cart;
			}
		}
		return null;
	}

	public List<Cart> getList() {
		return alist;
	}

	public void submitCart() {
		for (Cart cart : alist) {
			if(cart.getChecked()){
				OrderService ords=new OrderService();
				Order order=new Order();
				order.setGood(cart.getGood());
				order.setNum(cart.getNum());
				order.setStatus("未付款");
				order.setTotalPrice(getTotalPrice(cart.getId()));
				ords.insertOrder(order);
			}
		}
		
		Iterator<Cart> it=alist.iterator();
		while(it.hasNext()){
			Cart cart=it.next();
			if(cart.getChecked()){
				System.out.println("RemoveOne:"+cart.getId());
				it.remove();
			}
		}
	}

	private Double getTotalPrice(int id) {
		Double totalPrice=0.0;
		for (Cart cart : alist) {
			if(cart.getId().equals(id)){
				totalPrice+=cart.getGood().getTcprices()[cart.getGood().getTc()]*cart.getNum();
			}
		}
		System.out.println("TotalPrice:"+totalPrice);
		return totalPrice;
	}


}

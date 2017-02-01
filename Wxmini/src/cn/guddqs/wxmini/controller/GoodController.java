package cn.guddqs.wxmini.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import cn.guddqs.wxmini.entity.Cart;
import cn.guddqs.wxmini.entity.Good;
import cn.guddqs.wxmini.entity.Order;
import cn.guddqs.wxmini.service.CartService;
import cn.guddqs.wxmini.service.GoodService;
import cn.guddqs.wxmini.service.OrderService;

@Controller
public class GoodController {

	@Autowired
	private GoodService goodService;

	@Autowired
	private CartService cartService;
	
	@Autowired
	private OrderService orderService;
	
	
	@ResponseBody
	@RequestMapping("/good_getlist")
	public List<Good> getList(Integer typeId,String keyword) {
		List<Good> olist = goodService.getList(typeId,keyword);
		return olist;
	}

	@ResponseBody
	@RequestMapping("/good_get")
	public Good get(Integer id) {
		if (id != null) {
			return goodService.getGood(id);
		}
		return null;
	}

	@ResponseBody
	@RequestMapping("/good_addToCart")
	public Map<String, Object> good_addToCart(Integer id,Integer tc) {
		Map<String, Object> map = new HashMap<>();
		map.put("flag", false);
		if (id != null) {
			Cart cart=new Cart();
			Good good=goodService.getGood(id);
			good.setTc(tc);
			cart.setGood(good);
			cart.setNum(1);
			cart.setChecked(false);
			cart.setMode(0);
			cartService.insertCart(cart);
			map.put("flag", true);
		}
		return map;
	}

	@ResponseBody
	@RequestMapping("/good_buy")
	public Map<String, Object> buyGood(Integer id,Integer tc) {
		Map<String, Object> map = new HashMap<>();
		map.put("flag", false);
		if (id != null) {
			Order order=new Order();
			Good good=goodService.getGood(id);
			good.setTc(tc);
			order.setGood(good);
			order.setNum(1);
			order.setStatus("未付款");
			order.setTotalPrice(good.getTcprices()[good.getTc()]);
			order.setWuliu(null);
			int orderId=orderService.insertOrder(order);
			map.put("orderId", orderId);
			map.put("flag", true);
		}
		return map;
	}


}

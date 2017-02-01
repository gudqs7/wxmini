package cn.guddqs.wxmini.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import cn.guddqs.wxmini.entity.Cart;
import cn.guddqs.wxmini.service.CartService;

@Controller
public class CartControlll {

	@Autowired
	private CartService cartService;

	@ResponseBody
	@RequestMapping("/cart_getlist")
	public List<Cart> getList() {
		List<Cart> olist = cartService.getList();
		return olist;
	}

	@ResponseBody
	@RequestMapping("/cart_get")
	public Cart get(Integer id) {
		if (id != null) {
			return cartService.getCart(id);
		}
		return null;
	}

	@ResponseBody
	@RequestMapping("/cart_del")
	public Map<String, Object> delCart(Integer id) {
		Map<String, Object> map = new HashMap<>();
		map.put("flag", false);
		if (id != null) {
			cartService.delCart(id);
			map.put("flag", true);
		}
		return map;
	}

	@ResponseBody
	@RequestMapping("/cart_changeNum")
	public Map<String, Object> cart_changeNum(Integer id, Integer num) {
		Map<String, Object> map = new HashMap<>();
		map.put("flag", false);
		if (id != null) {
			Cart cart = cartService.getCart(id);
			cart.setNum(num);
			cartService.updateCart(cart);
			map.put("flag", true);
		}
		return map;
	}

	@ResponseBody
	@RequestMapping("/cart_check")
	public Map<String, Object> cart_check(Integer id) {
		Map<String, Object> map = new HashMap<>();
		map.put("flag", false);
		if (id != null) {
			Cart cart = cartService.getCart(id);
			if (cart != null) {
				cart.setChecked(true);
				cartService.updateCart(cart);
				map.put("flag", true);
			}
		}
		return map;
	}

	@ResponseBody
	@RequestMapping("/cart_changeTc")
	public Map<String, Object> cart_changeTc(Integer id, Integer tc) {
		Map<String, Object> map = new HashMap<>();
		map.put("flag", false);
		if (id != null) {
			Cart cart = cartService.getCart(id);
			cart.getGood().setTc(tc);
			cartService.updateCart(cart);
			map.put("flag", true);
		}
		return map;
	}

	@ResponseBody
	@RequestMapping("/cart_submit")
	public Map<String, Object> submitCart() {
		Map<String, Object> map = new HashMap<>();
		map.put("flag", false);
		cartService.submitCart();
		map.put("flag", true);
		return map;
	}

}

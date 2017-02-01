package cn.guddqs.wxmini.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import cn.guddqs.wxmini.entity.Order;
import cn.guddqs.wxmini.entity.Wuliu;
import cn.guddqs.wxmini.service.OrderService;

@Controller
public class OrderControll {

	@Autowired
	private OrderService orderService;

	@ResponseBody
	@RequestMapping("/order_getlist")
	public List<Order> getList(Integer typeId) {
		List<Order> olist = orderService.getList(typeId);
		return olist;
	}

	@ResponseBody
	@RequestMapping("/order_get")
	public Order get(Integer id) {
		if (id != null) {
			return orderService.getOrder(id);
		}

		return null;
	}

	@ResponseBody
	@RequestMapping("/order_del")
	public Map<String, Object> delOrder(Integer id) {
		Map<String, Object> map = new HashMap<>();
		map.put("flag", false);
		if (id != null) {
			orderService.delOrder(id);
			map.put("flag", true);
		}
		return map;
	}

	@ResponseBody
	@RequestMapping("/order_pay")
	public Map<String, Object> payOrder(Integer id) {
		Map<String, Object> map = new HashMap<>();
		map.put("flag", false);
		if (id != null) {
			Order ord = orderService.getOrder(id);
			ord.setStatus("待收货");
			ord.setWuliu(
					new Wuliu(1, "62170035881254", new String[] { "你的包裹已打包,正在送往申通分支寄送", "你的包裹已签收,签收人是:Guddqs" }));
			orderService.updateOrder(ord);
			map.put("flag", true);
		}
		return map;
	}
	
	@ResponseBody
	@RequestMapping("/order_cancel")
	public Map<String, Object> cancelOrder(Integer id) {
		Map<String, Object> map = new HashMap<>();
		map.put("flag", false);
		if (id != null) {
			Order ord = orderService.getOrder(id);
			ord.setStatus("交易关闭");
			orderService.updateOrder(ord);
			map.put("flag", true);
		}
		return map;
	}
	
	@ResponseBody
	@RequestMapping("/order_confirm")
	public Map<String, Object> confirmOrder(Integer id) {
		Map<String, Object> map = new HashMap<>();
		map.put("flag", false);
		if (id != null) {
			Order ord = orderService.getOrder(id);
			ord.setStatus("交易成功");
			orderService.updateOrder(ord);
			map.put("flag", true);
		}
		return map;
	}


}

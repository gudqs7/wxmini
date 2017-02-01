package cn.guddqs.wxmini.controller;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import cn.guddqs.wxmini.entity.Address;
import cn.guddqs.wxmini.entity.User;
import cn.guddqs.wxmini.service.AddressService;

@Controller
public class AddressController {

	@Autowired
	private AddressService addrService;

	@SuppressWarnings("unused")
	@ResponseBody
	@RequestMapping("addr_getlist")
	public List<Address> addr_getList(HttpSession session) {
		List<Address> alist = new ArrayList<>();
		User user = (User) session.getAttribute("loginUser");
		//System.out.println(user);
		alist = addrService.getList();
		// System.out.println(alist);
		return alist;
	}

	@ResponseBody
	@RequestMapping("/addr_get")
	public Address addr_get(HttpSession session, Integer id) {
		Address addr = null;
		if (id != null) {
			addr = addrService.getAddr(id);
		}
		// System.out.println(addr);
		return addr;
	}

	@ResponseBody
	@RequestMapping("/addr_bedefault")
	public Map<String, String> addr_bedefault(Integer id) {
		Map<String, String> map = new HashMap<>();
		map.put("flag", "false");
		if (id != null) {
			addrService.beDefault(id);
			map.put("flag", "true");
		}
		return map;

	}

	@ResponseBody
	@RequestMapping("/addr_del")
	public Map<String, String> addr_del(Integer id) {
		Map<String, String> map = new HashMap<>();
		map.put("flag", "false");
		if (id != null) {
			addrService.delAddr(id);
			map.put("flag", "true");
		}
		return map;

	}

	@ResponseBody
	@RequestMapping("/addr_saveOrUpdate")
	public Map<String, String> addr_save(@RequestBody Address address) {
		Map<String, String> map = new HashMap<>();
		map.put("flag", "false");
		if (address.getId() != null) {
			addrService.updateAddr(address);
			map.put("flag", "true");
		} else {
			addrService.insertAddr(address);
			if (address.getId() != null) {
				map.put("flag", "true");
			}
		}
		// System.out.println(address);
		return map;

	}

}

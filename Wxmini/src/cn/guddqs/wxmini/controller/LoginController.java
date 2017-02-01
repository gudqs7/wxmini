package cn.guddqs.wxmini.controller;

import java.util.HashMap;
import java.util.Map;

import javax.servlet.http.HttpSession;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import cn.guddqs.wxmini.entity.User;

@Controller
public class LoginController {
	
	@ResponseBody
	@RequestMapping("/login")
	public Map<String, String> addr_getList(HttpSession session,String nickName){
		Map<String, String> map=new HashMap<>();
//		System.out.println(nickName);
		User user=new User();
		user.setOpenid(nickName);
		user.setId(1);
		session.setAttribute("loginUser", user);
		map.put("flag", "true");
		return map;
		
	}
	
	

}

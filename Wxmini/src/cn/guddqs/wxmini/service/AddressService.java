package cn.guddqs.wxmini.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

import cn.guddqs.wxmini.entity.Address;

@Service
public class AddressService {
	
	private static List<Address> alist=new ArrayList<>();
	
	static{
		for(int i=1;i<11;i++){
			Address addr=new Address();
			addr.setId(i);
			addr.setProvince("湖南");
			addr.setCity("长沙");
			addr.setArea("开福区");
			addr.setStreet("湘江中路");
			addr.setName("大全"+i);
			addr.setPhone("186"+i+i+i+i+"7032");
			addr.setDesc("测试数据之"+i);
			if(i==10){
				addr.setIsDefault(true);
			}else{
				addr.setIsDefault(false);
			}
			alist.add(addr);
			System.out.println(addr);
		}
	}
	
	public void insertAddr(Address addr){
		addr.setId(getMaxId());
		alist.add(addr);
		if(addr.getIsDefault()){
			beDefault(addr.getId());
		}
	}
	
	private Integer getMaxId() {
		int id=0;
		for (Address address : alist) {
			if(address.getId().intValue()>id){
				id=address.getId();
			}
		}
		return id+1;
	}

	public void delAddr(int id){
		for (Address address : alist) {
			if(address.getId().equals(id)){
				alist.remove(address);
				break;
			}
		}
	}
	
	public void updateAddr(Address addr){
		delAddr(addr.getId());
		alist.add(0, addr);
		if(addr.getIsDefault()){
			beDefault(addr.getId());
		}
	}

	public void beDefault(int id){
		for (Address address : alist) {
			if(address.getId().equals(id)){
				address.setIsDefault(true);
			}else{
				address.setIsDefault(false);
			}
		}
	}
	
	public Address getAddr(int id){
		for (Address address : alist) {
			if(address.getId().equals(id)){
				return address;
			}
		}
		return null;
	}
	
	public List<Address> getList(){
		return alist;
	}
	
}

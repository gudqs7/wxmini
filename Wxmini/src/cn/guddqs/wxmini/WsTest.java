package cn.guddqs.wxmini;

import javax.websocket.Session;

//@ServerEndpoint(value = "/ws")
public class WsTest {

	private Session session;

	//@OnMessage
	public void onMessage(String message) throws Exception {
		System.out.println(message);
		session.getBasicRemote().sendText("YouSendMessageIs:"+message+"\nReply:Test");
	}

	//@OnOpen
	public void onOpen(Session session) {
		this.session=session;
		System.out.println("-->open:"+session.getId());
	}

	//@OnClose
	public void onClose() {
		System.out.println("-->close:"+session.getId());
	}
	
	//@OnError
	public void onError(Throwable ex){
		System.out.println(ex.getMessage());
	}

}

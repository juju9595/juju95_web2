package example.실습.실습2;


import org.springframework.stereotype.Component;
import org.springframework.web.socket.CloseStatus;
import org.springframework.web.socket.TextMessage;
import org.springframework.web.socket.WebSocketSession;
import org.springframework.web.socket.handler.TextWebSocketHandler;

import java.util.List;
import java.util.Vector;

@Component // 스프링 컨테니어에 빈 등록
public class AlarmHandler extends TextWebSocketHandler {

    private static final List<WebSocketSession> 접속명단 = new Vector<>();

    @Override
    public void afterConnectionEstablished(WebSocketSession session) throws Exception {
        System.out.println("익명의 유저가 접속했습니다.");
        접속명단.add(session);
    }

    @Override
    public void afterConnectionClosed(WebSocketSession session, CloseStatus status) throws Exception {
        System.out.println("익명의 유저가 퇴장했습니다.");
        접속명단.remove(session);
    }

}

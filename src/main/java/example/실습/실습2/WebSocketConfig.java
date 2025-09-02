package example.실습.실습2;

import example.day02.ChatHandler;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.socket.config.annotation.EnableWebSocket;
import org.springframework.web.socket.config.annotation.WebSocketConfigurer;
import org.springframework.web.socket.config.annotation.WebSocketHandlerRegistry;

@Configuration// 스프링 컨테이너 빈 등록
@EnableWebSocket // 웹소켓 사용 활성화
public class WebSocketConfig implements WebSocketConfigurer {

    @Autowired
    private AlarmHandler alarmHandler;//DI 서버웹소켓 객체

    @Override
    public void registerWebSocketHandlers(WebSocketHandlerRegistry registry) {
        registry.addHandler(alarmHandler, "/chat");
    }
}

package example.실습.실습3.service;

import example.실습.실습3.mapper.BookMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.Map;
import java.util.Objects;

@Service
@RequiredArgsConstructor
public class BookService {
    private final BookMapper bookMapper;

    public boolean loan(Map<String, Object> booksInfo){
        int stock = Integer.parseInt(String.valueOf(booksInfo.get("stock")));

        // 대출 도서 차감
        String loanbook = String.valueOf(booksInfo.get("loanbook"));
        boolean result = bookMapper.loan(loanbook,stock);
        if( stock == 0 )throw new RuntimeException("loanbook 에서 [차감실패]");
        return true;
    }

    public boolean returnBook(
            @RequestBody Map<String, Object> body){
        // 반납 도서 증가
        String returnbook = String.valueOf(body.get("returnbook"));
        boolean result2 = bookMapper.returnBook(returnbook, stock);
        if( result2 == false) throw new RuntimeException("returnbook 에서 [차감 실패]");
    }
}

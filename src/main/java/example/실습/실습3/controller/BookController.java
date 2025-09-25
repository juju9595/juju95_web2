package example.실습.실습3.controller;

import example.실습.실습3.service.BookService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
@RequestMapping("/book")
@RequiredArgsConstructor
public class BookController {
    private final BookService bookService;

    //도서대출
    @PostMapping("/rent")
    public boolean loan(
        @RequestBody Map<String, Object> booksInfo ){
        return bookService.loan(booksInfo);
    }


    //도서반납
    @PostMapping("/return")
    public boolean returnBook(
            @RequestBody Map<String, Object> body) {
        return bookService.returnBook(body);
    }

}

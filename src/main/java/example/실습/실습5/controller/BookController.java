package example.실습.실습5.controller;

import example.실습.실습5.model.BooksDto;
import example.실습.실습5.service.BookService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/book")
@RequiredArgsConstructor
public class BookController {
    private final BookService bookService;

    // 책books 테이블에 price 가격(int) 필드 추가
    @PostMapping("")
    public ResponseEntity< ? > addprice(@RequestBody BooksDto dto){
        return ResponseEntity.ok( dto);

    }

    // 책books 테이블에 title 책이름 필드 (longtext) 필드 수정
    @PutMapping("")
    public ResponseEntity< ? > update(@RequestBody BooksDto bookDto){
        int result = bookService.update(BooksDto);
        return ResponseEntity.ok(result);

    }
    // 평균 재고보다 많은 재고를 가진 도서 조회
    @GetMapping("")
    public ResponseEntity< ? > find(@RequestBody int id){
        int result = bookService.find( id );
        return  ResponseEntity.ok(result);

    }
    //가장 많이 대출한 도서 조회
    @GetMapping("")
    public ResponseEntity< ? >{

    }

    // 대출기록 상세 뷰 생성 ( 책 + 대출기록 JOIN )

    // 평균 재고보다 많은 재고를 가진 도서 뷰 생성

    // 생성한 view 조회 대출기록 상세 뷰 생성 ( 책 + 대출기록 JOIN )

    // 생성한 view 조회 평균 재고보다 많은 재고를 가진 도서(조건2-2) 조회



}

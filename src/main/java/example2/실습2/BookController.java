package example2.실습2;

import lombok.RequiredArgsConstructor;
import org.apache.ibatis.annotations.Delete;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/books")
public class BookController {

    private final BookService bookService;

    //1. C 등록
    @PostMapping
    public ResponseEntity<?> add( @RequestBody BookEntity bookEntity){
        return ResponseEntity.ok(bookService.add(bookEntity));
    }

    //2. R 조회
    @GetMapping
    public ResponseEntity<?> get(){
        return ResponseEntity.ok(bookService.get());
    }

    //3. U 수정
    @PutMapping
    public ResponseEntity<?> put(@RequestParam BookEntity bookEntity){
        return ResponseEntity.ok(bookService.put2(bookEntity));
    }

    //4. D 삭제
    @DeleteMapping
    public ResponseEntity<?> delete(@RequestParam int book_id){
        return ResponseEntity.ok(bookService.delete(book_id));
    }
}

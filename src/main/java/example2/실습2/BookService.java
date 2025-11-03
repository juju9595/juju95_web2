package example2.실습2;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.awt.print.Book;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class BookService {

    private final BookRepository bookRepository;

    //1. C 등록
    public BookEntity add( BookEntity bookEntity){
        BookEntity addEntity = bookRepository.save(bookEntity);
        return addEntity;

    }

    //2. R 조회
    public List<BookEntity> get(){
        List<BookEntity> bookEntityList = bookRepository.findAll();
        return bookEntityList;
    }

    //3. U 수정
    public BookEntity put(BookEntity bookEntity){
        BookEntity editEntity =
                bookRepository.save(bookEntity);
        return editEntity;
    }

    //3. U 특정한 엔티티 수정
    @Transactional
    public BookEntity put2(BookEntity bookEntity){
        Optional<BookEntity> optional =
                bookRepository.findById(bookEntity.getBook_id());
        if(optional.isPresent()){
            BookEntity entity = optional.get();
            entity.setAuthor(bookEntity.getAuthor());
            entity.setPublisher(bookEntity.getPublisher());
            entity.setTitle(bookEntity.getTitle());
            return entity;
        }
        return bookEntity;
    }

    //4. D 삭제
    public boolean delete(int book_id){
        bookRepository.deleteById(book_id);
        return true;
    }

}

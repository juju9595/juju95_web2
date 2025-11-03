package example2.실습2;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.Data;

@Entity
@Data
public class BookEntity {
    @Id
    private int book_id;
    private String title;
    private String author;
    private String publisher;
}//class e

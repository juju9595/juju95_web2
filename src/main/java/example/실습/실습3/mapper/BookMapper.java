package example.실습.실습3.mapper;

import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Update;

@Mapper
public interface BookMapper {

    // 도서 대출
    @Update( "update books set stock = stock + #{stock} where id = #{id} ")
    public boolean loan( String id, int stock );

    // 도서 반납
    @Update( "update books set stock = stock + #{stock} where id = #{id} and stock >= #{stock} ")
    public boolean returnBook(String id, int stock);

}

package example.day08.mapper;

import example.day08.model.dto.BoardDto;
import org.apache.ibatis.annotations.Delete;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

import java.util.List;

@Mapper
public interface BoardMapper {
    @Insert("insert into member(mname, mage, mphone) values(#{mname}, #{mage}, #{mphone})")

    //[1] 등록
    public boolean boardWrite(BoardDto boardDto);

    //[2] 전체조회
    @Select("select * from member")
    public List<BoardDto> boardPrint();

    //[3] 개별삭제
    @Delete("delete from member where mno = #{mno}")
    public boolean boardDelete(int mno);
}

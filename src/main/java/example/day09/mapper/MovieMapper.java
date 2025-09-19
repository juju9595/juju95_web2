package example.day09.mapper;

import example.day09.model.dto.MovieDto;
import example.day09.model.dto.ReplyDto;
import org.apache.ibatis.annotations.Delete;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;
import org.springframework.web.bind.annotation.PostMapping;

import java.util.List;
import java.util.Map;

@Mapper
public interface MovieMapper {

    @Insert("insert into movie(mtitle, mdirector, mgenre, mcontent, mpwd) values(#{mtitle}, #{mdirector}, #{mgenre}, #{mcontent}, #{mpwd})")
    //[1] 등록
    public boolean movieWrite(MovieDto movieDto);

    //[2] 개별삭제
    @Delete("delete from movie where pno = #{pno} and mpwd = #{mpwd}")
    public boolean movieDelete(int pno, String mpwd);

    //[3] 목록조회
    @Select("select * from movie")
    public List<MovieDto> moviePrint();


   @Insert("insert into reply(pno, rcontent, rpwd) values(#{pno}, #{rcontent}, #{rpwd})")
    //[4] 댓글작성
    public int writeReply(Map<String,String> reply);

   //[5] 댓글개별삭제
   @Delete("delete from reply where rno = #{rno} and rpwd = #{rpwd}")
   public boolean replyDelete(int rno, String mpwd);

   //[6] 댓글전체조회
   @Select("select rno, pno, rcontent from reply where pno = #{pno} order by rno desc")
   public List<ReplyDto> replyPrint(int pno);
}

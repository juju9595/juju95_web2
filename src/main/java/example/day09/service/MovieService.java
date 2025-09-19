package example.day09.service;

import example.day09.mapper.MovieMapper;
import example.day09.model.dto.MovieDto;
import example.day09.model.dto.ReplyDto;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

@Service
@RequiredArgsConstructor
public class MovieService {
    private final MovieMapper movieMapper;

    //[1] 등록
    public boolean movieWrite(MovieDto movieDto) {
        boolean result = movieMapper.movieWrite(movieDto);
        return result;
    }

    //[2] 개별삭제
    public  boolean movieDelete(int mno, String mpwd) {
        boolean result = movieMapper.movieDelete(mno, mpwd);
        return result;
    }

    //[3] 전체조회
    public List<MovieDto> moviePrint(){
        List<MovieDto> result = movieMapper.moviePrint();
        return result;
    }

    //[4] 댓글작성
    public int writeReply(Map<String,String> reply){
        int result = movieMapper.writeReply(reply);
        return result;
    }

    //[5] 댓글개별삭제
    public boolean replyDelete(int rno, String rpwd){
        boolean result = movieMapper.replyDelete(rno, rpwd);
        return result;
    }

    //[6] 댓글전체조회
    public List<ReplyDto> replyPrint(int pno){
        List<ReplyDto> result = movieMapper.replyPrint(pno);
        return result;
    }
}

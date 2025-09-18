package example.day08.service;

import example.day08.mapper.BoardMapper;
import example.day08.model.dto.BoardDto;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class BoardService {
    private final BoardMapper boardMapper;

    //[1] 등록
    public boolean boardWrite(BoardDto boardDto){
        boolean result = boardMapper.boardWrite(boardDto);
        return result;
    }

    //[2] 전체조회
    public List<BoardDto> boardPrint(){
        List<BoardDto> result = boardMapper.boardPrint();
        return result;
    }

    //[3] 개별삭제
    public boolean boardDelete(int mno){
        boolean result = boardMapper.boardDelete(mno);
        return result;
    }
}

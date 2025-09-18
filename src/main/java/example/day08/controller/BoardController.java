package example.day08.controller;

import example.day08.model.dto.BoardDto;
import example.day08.service.BoardService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/member")
@RequiredArgsConstructor
@CrossOrigin(value = "http://localhost:5173")
public class BoardController {
    private final BoardService boardService;

    //[1] 등록
    @PostMapping("")
    public ResponseEntity<Boolean> boardWrite(@RequestBody BoardDto boardDto){
        boolean result = boardService.boardWrite(boardDto);
        return ResponseEntity.status(200).body(result);
    }

    //[2] 전체조회
    @GetMapping("")
    public ResponseEntity<List<BoardDto>> boardPrint(){
        List<BoardDto> result = boardService.boardPrint();
        return ResponseEntity.ok(result);
    }

    //[3] 개별삭제
    @DeleteMapping("")
    public ResponseEntity<Boolean> boardDelete(@RequestParam int mno){
        boolean result = boardService.boardDelete(mno);
        return ResponseEntity.ok(result);}
}

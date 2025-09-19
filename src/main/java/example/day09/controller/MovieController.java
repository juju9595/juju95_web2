package example.day09.controller;

import example.day09.model.dto.MovieDto;
import example.day09.model.dto.ReplyDto;
import example.day09.service.MovieService;
import lombok.RequiredArgsConstructor;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.awt.*;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/movie")
@RequiredArgsConstructor
@CrossOrigin(value = "http://localhost:5173")
public class MovieController {
    private final MovieService movieService;

    //[1] 등록
    @PostMapping("")
    public ResponseEntity<Boolean> movieWrite(@RequestBody MovieDto movieDto){
        boolean result = movieService.movieWrite(movieDto);
        return ResponseEntity.ok(result);
    }

    //[2] 개별삭제
    @DeleteMapping("")
    public ResponseEntity<Boolean> movieDelete(@RequestParam int pno, @RequestParam String mpwd) {
        boolean result = movieService.movieDelete(pno, mpwd);
        return ResponseEntity.ok(result);
    }

    //[3] 목록조회
    @GetMapping("")
    public ResponseEntity<List<MovieDto>> moviePrint(){
        List<MovieDto> result = movieService.moviePrint();
        return ResponseEntity.ok(result);
    }

    //[4] 댓글작성
    @PostMapping("/reply")
    public ResponseEntity writeReply(@RequestBody Map<String,String> reply){
        int result = movieService.writeReply(reply);
        return ResponseEntity.ok(result);
    }

    //[5] 댓글개별삭제
    @DeleteMapping("/reply")
    public ResponseEntity<Boolean> replyDelete(@RequestParam int rno, @RequestParam String mpwd){
        boolean result = movieService.replyDelete(rno, mpwd);
        return ResponseEntity.ok(result);
    }

    //[6] 댓글전체조회
    @GetMapping("/reply")
    public ResponseEntity<List<ReplyDto>> replyPrint(@RequestParam int pno){
        List<ReplyDto> result = movieService.replyPrint(pno);
        return ResponseEntity.ok(result);
    }
}

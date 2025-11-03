package example2.day01;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/exam")
public class ExamController {
    private final ExamService examService;

    //1. C 등록
    // {'col1' : '1' , 'col2' : '유재석' ,'col3' : '90.5'}
    public ResponseEntity<?> post(ExamEntity examEntity){
        return ResponseEntity.ok(examService.post(examEntity));
    }

    //2. R 전제조회
    public ResponseEntity<?> get(){
        return ResponseEntity.ok(examService.get());
    }
}

package example2.day04.model.dto;

import example2.day04.model.entity.TodoEntity;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data@Builder@NoArgsConstructor@AllArgsConstructor
public class TodoDto {
    // 데이터베이스 데이터를 이동하는 객체
    // 기능 구현에 필요한 목적에 따른 이동할 데이터 구성
    // 실무: 1) 데이터브 2) 기능별/상황 별 <--> MAP

    private int id;// RU
    private String title; //CRU
    private String content; //CRU
    private boolean done;//CRU
    private String createDate;//R
    private String updateDate;//R


    // * Dto -> Entity 변환 : C
    public TodoEntity todoEntity(){
        return TodoEntity.builder()
                .title(this.title)
                .content(this.content)
                .done(this.done)
                .build();
    }
}

package example.day09.model.dto;

import lombok.*;

@NoArgsConstructor
@AllArgsConstructor
@Getter @Setter @ToString
public class ReplyDto {
    private int rno;
    private int pno;
    private String rcontent;
    private String rpwd;

}

package example.day09.model.dto;

import lombok.*;

@NoArgsConstructor
@AllArgsConstructor
@Getter@Setter@ToString
public class MovieDto {
    private int pno;
    private String mtitle;
    private String mdirector;
    private String mgenre;
    private String mcontent;
    private String mpwd;

}

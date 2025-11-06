package example2.실습2.실습3;

import jakarta.persistence.*;
import lombok.Builder;
import lombok.Data;
import lombok.ToString;

import java.util.ArrayList;
import java.util.List;

@Entity
@Data
@Table(name = "sstudent")
@Builder
public class StudentEntity extends BaseTime{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int studentId;
    private String studentNam;
    @OneToMany( mappedBy = "studentEntity")
    @ToString.Exclude
    @Builder.Default
    private List<EnrollEntity>
    enrollEntityList = new ArrayList<>();

}

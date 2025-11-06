package example2.실습2.실습3;


import jakarta.persistence.*;
import lombok.Builder;
import lombok.Data;
import lombok.ToString;

import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "scourse")
@Data
@Builder
public class CourseEntity extends BaseTime{

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int courseId;
    private String courseName;
    //* 양방향 *//
    @OneToMany(mappedBy = "courseEntity")
    @ToString.Exclude
    @Builder.Default
    private List<EnrollEntity> enrollEntityList = new ArrayList<>();
}

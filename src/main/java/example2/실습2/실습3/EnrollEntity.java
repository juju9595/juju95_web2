package example2.실습2.실습3;

import jakarta.persistence.*;
import lombok.Builder;
import lombok.Data;

@Entity
@Table(name = "senroll")
@Data
@Builder
public class EnrollEntity extends BaseTime{
    @Id
    @GeneratedValue( strategy = GenerationType.IDENTITY )
    private int enrollId;
    private String status;

    @ManyToOne(cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    @JoinColumn(name = "courseId")
    private CourseEntity courseEntity;

    @ManyToOne(cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    @JoinColumn(name = "studentId")
    private StudentEntity studentEntity;

    // 양방향 연결

}

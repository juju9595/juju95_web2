package example.실습.실습1;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

@Service
public class TaskService {

    @Autowired
    private TaskDao taskDao;

       // 1. 매 30초마다 모든 제품의 재고는 3개씩 감소한다.
    @Scheduled( cron = " 0/30 * * * * *") //d예시] 12:57:00 , 12:57:30
    public void task1(){
            System.out.println("TaskService.task1");
            // DAO 호출하여 모든 제품 3개씩 감소 요청/응답++
            taskDao.task1();

        }


       // 2. 매 1분마다 모든 제품 정보를 조회/출력 한다. *console 화면에 모든 제품 정보가 보이도록*
    @Scheduled (cron = " 0 0/1 * * * *") // 예시1] 12:57:00, 12:58:00
    public void task2() {
        System.out.println("TaskService.task2");
        //모든 제품 정보를 조회/출력 한다.
        taskDao.task2();
    }


       // 3. 매 5분마다 재고가 10 이하인 상품의 재고를 +20개 추가한다.
    @Scheduled (cron = " 0 0/5 * * * *")
    public void task3(){
        System.out.println("TaskService.task3");
        //재고가 10 이하인 상품의 재고를 +20개 추가한다.
        taskDao.task3();
    }


}

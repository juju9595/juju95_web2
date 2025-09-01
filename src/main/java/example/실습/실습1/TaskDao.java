package example.실습.실습1;

import org.springframework.stereotype.Repository;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;

@Repository
public class TaskDao{
    private String db_url = "jdbc:mysql://localhost:3306/springweb2";
    private String db_user = "root";
    private String db_password = "1234";
    public Connection conn;
    public TaskDao(){connect();}
    private void connect(){
        try{
            Class.forName("com.mysql.cj.jdbc.Driver");
            conn = DriverManager.getConnection(db_url, db_user, db_password);
        } catch (Exception e) {
            System.out.println(e);
        }
    }
    //3.
    public void task3(int product_id){
        try {
            String sql = "uqdate products set 10 >= stock_quantity = stock_quantity + 20 where product_id";
            PreparedStatement ps = conn.prepareStatement(sql);

        } catch (Exception e) {
            System.out.println(e);
        }
    }
}

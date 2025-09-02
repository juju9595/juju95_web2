package example.실습.실습1;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import javax.sql.DataSource;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.*;

@Repository
public class TaskDao extends Dao{


    //1. 모든 제품 3개씩 감소 요청
    public int task1(){
        try{
            String sql = "update products set stock_quantity - 3 where stock_quantity >= 3";
            PreparedStatement ps = conn.prepareStatement(sql);
            int result = ps.executeUpdate();  //업데이트된 갯수
            return result;
        }catch (Exception e){
            System.out.println(e);
        }return 0;
    }


    //2. 모든 제품 정보를 조회/출력 한다.
    public List<Map<String, Object>> task2(){
        List<Map<String, Object>> list = new ArrayList<>();
        try{
            String sql = "select * from products";
            PreparedStatement ps = conn.prepareStatement(sql);
            ResultSet rs = ps.executeQuery();
            while (rs.next()) {
                Map<String, Object> map = new HashMap<>();
                map.put("product_name", rs.getString("product_name"));
                map.put("stock_quantity", rs.getInt("stock_quantity"));
                list.add(map);
            }
        } catch (Exception e) {System.out.println(e);
        }return list;
    }

    //3. 재고가 10 이하인 상품의 재고를 +20개 추가한다.
    public void task3(){
        try {
            String sql = "update products set stock_quantity = stock_quantity + 20 where stock_quantity <= 10";
            PreparedStatement ps = conn.prepareStatement(sql);
            ps.executeUpdate();
        } catch (Exception e) {
            System.out.println(e);
        }
    }
}

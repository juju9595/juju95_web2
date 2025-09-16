  const products = [
    { title: "무선 키보드", price: 45000, inStock: true },
    { title: "게이밍 마우스", price: 32000, inStock: false },
    { title: "27인치 모니터", price: 280000, inStock: true }
  ]; 

  //[3] CSS 파일 불러오기 : import 'CSS파일경로'
  import './Task2.css'


  //[1] 해당 .jsx 파일내 대표(default) 컴포넌트 만들기
export default function Task2( props ){
    return (<>  
        <div class="products">
                
            {/* 하위 컴포넌트 호출과 동시에 props속성 자료 전달 */}
            <InfoCard product = {products[0]} />
            <InfoCard product = {products[1]} />
            <InfoCard product = {products[2]} />
        </div>
    </>)
    }// func end 

//[2] 하위 컴포넌트 : 제품1개당 정보 구성하는 컴포넌트
    function InfoCard( props ){
        // 구문 분해 props현재 상태 : { product : {title, price, inStock} }
        const{title, price, inStock} = props.product   
        console.log(title); console.log(price); console.log(inStock);
        return(<>
            <ul>
                <li> {title}</li>
                <li> {price.toLocaleString()}</li>
                <li> {inStock == true ? '재고있음' : '재고없음'}</li>
            </ul>
        </>)
    }// func end 


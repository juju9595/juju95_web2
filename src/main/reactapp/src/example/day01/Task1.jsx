// REACT 실습1 : Task1과 Profile 컴포넌트를 완성하시오.

// Fecth 이용하여 서버로 부터 받은 데이터/자료 
const data = [
  {
    name: 'Hedy Lamarr',
    imageUrl:'https://i.pravatar.cc/150?img=47'
  },
  {
    name: 'Grace Hopper',
    imageUrl: 'https://i.pravatar.cc/150?img=48'
  }
];

export default function Task1( props ){
  return (<> 
    <Profile 속성명 = {data[0]} />
    <Profile 속성명 = {data[1]} />
  </>)
}//func e

function Profile( props ) {// 함수 목적 : 재사용성, 중복제거, 매개변수에 따른 서로 다른 결과물 
  return (<> 
  <h3> {props.속성명.name} </h3>
  <img src = {props.속성명.imageUrl}/>
  </> )
}//func e
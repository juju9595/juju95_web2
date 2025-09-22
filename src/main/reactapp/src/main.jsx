// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )

// ** main.jsx 에서 index.html의 id='root' 마크업에 최초의 컴포넌트(화면함수) 렌더링하는 곳 **
// 1. 리액트 라이브러리 의 createRoot 함수 import 한다.
import {createRoot} from 'react-dom/client'
// 2. index.html 에서 root 마크업 가져오기
const root = document.querySelector('#root');
// 3. 가져온 root 마크업을 createRoot 함수의 매개변수로 전달한다.
const create = createRoot(root);



//***********최초 렌더링할  */
// 4. root에 렌더링할 컴포넌트(화면함수)
// 4-1 : 렌더링할 컴포넌트(함수) 가져오기
//  import App from './App.jsx'
// 4-2 : 렌더링하기
//  create.render( <App/> );

//day01
// import Component1 from './example/day01/Component1.jsx';
// import { Component2 } from './example/day01/Component2.jsx';
// import Coomponent3 from './example/day01/Component3.jsx';
// reder은 1번만 가능하다
// create.render( <Component1> </Component1>)
// create.render(<Component2 />);
// create.render(<Coomponent3/>)

// day01 Task1
// import Task1 from './example/day01/Task1';
// create.render(<Task1 />);

//day01 Task2
// import Task2 from './example/day01/Task2';
// create.render(<Task2/>);

//day02 
// import Component4 from './example/day02/Component4';
// create.render(<Component4/>);

// import Component5 from './example/day02/Component5';
// create.render(<Component5/>);

// import Component6 from './example/day02/Component6';
// create.render(<Component6/>);

// import Component7 from './example/day02/Component7';
// create.render(<Component7/>);

// import Task3 from './example/day02/Task3';
// create.render(<Task3/>);

// import Task4 from './example/day02/Task4';
// create.render(<Task4/>);

// import Component8 from './example/day03/Component8';
// create.render(<Component8/>)

// import Component9 from './example/day03/Component9';
// create.render(<Component9/>)

// import Component10 from './example/day03/Component10';
// create.render(<Component10/>)

// import Task5  from './example/day03/Task5';
// create.render(<Task5/>)

// import Task6 from './example/day04/Task6';
// create.render(<Task6/>)

//day05
// import Component11 from './example/day05/Component11';
// create.render(<Component11/>);

// import Component12 from './example/day05/Component12';
// create.render(<Component12/>)

import Task6 from './example/day05/Task6';
create.render(<Task6/>)

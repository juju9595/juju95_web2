import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1> 여기가 최초 렌데링 합니다 </h1>
    </>
  )
}//func e

//다른 js파일에서 함수를 import 할 수 있도록 export

export default App

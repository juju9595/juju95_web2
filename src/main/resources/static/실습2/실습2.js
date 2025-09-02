console.log("실습2.js open");

const client = new WebSocket("/chat");

// onopen() : 서버 소켓과 연결이 성공 되었을때
client.onopen = (event) =>{
    console.log("익명의 유저가 접속했습니다.")
}

// onclose() : 서버소켓과 연결이 종료되었을때
client.onclose = (event) =>{
    console.log("익명의 유저가 퇴장했습니다.")
}

client.onmessage = (event) =>{
    console.log(event); // 서버로부터 받은 이벤트 정보객체
    alert(event.data); // 이벤트정보객체내 data 속성내 메시지가 들어있다.
}


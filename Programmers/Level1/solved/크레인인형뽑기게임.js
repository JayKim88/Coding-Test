function solution(board, moves) {
  let answer = 0;
  let basket = [];

  for (let i = 0; i < moves.length; i++) {
    for (let j = 0; j < board.length; j++) {
      if (board[j][moves[i] - 1] !== 0) {
        //1. 집게 위치에 인형이 있을 경우
        if (basket.length === 0) {
          //1) 바스켓이 비어 있을 경우
          basket.push(board[j][moves[i] - 1]);
          board[j][moves[i] - 1] = 0;
          break;
        } else if (board[j][moves[i] - 1] === basket[basket.length - 1]) {
          //2) 바스켓 마지막 인형과 새로 넣을 인형이 같을 경우
          basket.pop();
          answer = answer + 2;
          board[j][moves[i] - 1] = 0;
          break; //다음 moves 로 이동
        } else {
          //3) 바스켓 마지막 인형과 새로 넣을 인형이 다를 경우
          basket.push(board[j][moves[i] - 1]);
          board[j][moves[i] - 1] = 0;
          break; //다음 moves 로 이동
        }
      } else {
        //2. 집게 위치에 인형이 없을 경우
        continue;
      }
    }
  }
  return answer;
}

/*
        1. 집게 위치에 인형이 있을 경우
          1) 바스켓이 비어 있을 경우
            1-1) 바스켓에 추가
            1-2) 기존 인형 위치에 0할당
            1-3) 반복문 탈출(다음 moves로 이동)
          2) 바스켓 마지막 인형과 새로 넣을 인형이 같을 경우
            2-1) 바스켓 마지막 인형 폭파
            2-2) 폭파된 인형 개수 2개 추가 
            2-3) 기존 인형 위치에 0할당
            2-4) 반복문 탈출(다음 moves로 이동)
          3) 바스켓 마지막 인형과 새로 넣을 인형이 다를 경우
            3-1) 바스켓에 추가 
            3-2) 기존 인형 위치에 0할당
            3-3) 반복문 탈출(다음 moves로 이동)
        2. 집게 위치에 인형이 없을 경우
          아래로 이동 
*/

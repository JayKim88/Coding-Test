/*
수포자는 수학을 포기한 사람의 준말입니다. 수포자 삼인방은 모의고사에 수학 문제를 전부 찍으려 합니다. 수포자는 1번 문제부터 마지막 문제까지 다음과 같이 찍습니다.

1번 수포자가 찍는 방식: 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, ...
2번 수포자가 찍는 방식: 2, 1, 2, 3, 2, 4, 2, 5, 2, 1, 2, 3, 2, 4, 2, 5, ...
3번 수포자가 찍는 방식: 3, 3, 1, 1, 2, 2, 4, 4, 5, 5, 3, 3, 1, 1, 2, 2, 4, 4, 5, 5, ...

1번 문제부터 마지막 문제까지의 정답이 순서대로 들은 배열 answers가 주어졌을 때, 가장 많은 문제를 맞힌 사람이 누구인지 배열에 담아 return 하도록 solution 함수를 작성해주세요.
제한 조건

    시험은 최대 10,000 문제로 구성되어있습니다.
    문제의 정답은 1, 2, 3, 4, 5중 하나입니다.
    가장 높은 점수를 받은 사람이 여럿일 경우, return하는 값을 오름차순 정렬해주세요.

입출력 예
answers 	return
[1,2,3,4,5] 	[1]
[1,3,2,4,2] 	[1,2,3]
입출력 예 설명

입출력 예 #1

    수포자 1은 모든 문제를 맞혔습니다.
    수포자 2는 모든 문제를 틀렸습니다.
    수포자 3은 모든 문제를 틀렸습니다.

따라서 가장 문제를 많이 맞힌 사람은 수포자 1입니다.

입출력 예 #2

    모든 사람이 2문제씩을 맞췄습니다.


*/

function solution(answers) {
  var answer = [];

  const person1 = [1, 2, 3, 4, 5];
  const person2 = [2, 1, 2, 3, 2, 4, 2, 5];
  const person3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  const Compare = (answers, person) => {
    let count = 0;
    for (let i = 0; i < answers.length; i++) {
      if (i > person.length - 1) {
        let newIdx = i % person.length;
        if (answers[newIdx] === person[newIdx]) {
          count++;
        }
      } else {
        if (answers[i] === person[i]) {
          count++;
        }
      }
    }
    return count;
  };
  count1 = Compare(answers, person1);
  count2 = Compare(answers, person2);
  count3 = Compare(answers, person3);
  answer.push([1, count1], [2, count2], [3, count3]);
  answer.sort((a, b) => {
    return b[1] - a[1];
  });
  let result = [answer[0]];
  for (let i = 1; i < answer.length; i++) {
    if (answer[i][1] === answer[0][1]) {
      result.push(answer[i]);
    }
  }
  let final = result.map((ele) => ele[0]);
  return final;
}
console.log(solution([1, 2, 3, 4, 5]));
console.log(solution([1, 3, 2, 4, 2]));
/*
수포자1: 1,2,3,4,5 반복
수포자2: 2,1,2,3,2,4,2,5 반복
수포자3: 3,3,1,1,2,2,4,4,5,5 반복 

숫자를 하나씩 넣어가면서 비교 및 같으면 카운트.
*/

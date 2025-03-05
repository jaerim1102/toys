function doubleNumbers(arr) {
   let result = [];

   for (let i = 0; i < arr.length; i++) { // ✅ 'length' 오타 수정
      let value = arr[i];

      if (value % 2 === 0) { // 짝수인지 확인
         result.push(value);
      }
   }

   return result;
}

// ✅ 함수 바깥에서 결과를 출력해야 함!
console.log(doubleNumbers([1, 2, 3, 4, 5, 6]));
// 출력: [2, 4, 6]

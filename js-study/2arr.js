function doubleNumbers(arr) {
   let result = [];

   for (let i = 0; i < arr.length; i++) {
      let value = arr[i];

      if (value % 2 === 0) {//짝수인지 확인
         result.push(value);
      }
   }

   return result;
}

console.log(result);

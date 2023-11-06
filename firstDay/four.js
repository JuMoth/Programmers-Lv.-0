// 대소문자 바꿔서 출력하기
// 문제 설명
// 영어 알파벳으로 이루어진 문자열 str이 주어집니다. 각 알파벳을 대문자는 소문자로 소문자는 대문자로 변환해서 출력하는 코드를 작성해 보세요.

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];
let result = [];

rl.on('line', function (line) {
    input = [line];
}).on('close',function(){
    str = input[0];
    const strValue = [...str]
    strValue.map(a => {
        if(a === a.toUpperCase()) {
            result.push(a.toLowerCase());
        }else {
            result.push(a.toUpperCase());
        }
    })
    console.log(result.join(''));
});

// input : aBcDeFg
// output : AbCdEfG
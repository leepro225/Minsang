/*
Copyrightⓒ2019 by Moon Hanju (github.com/it-crafts)
All rights reserved.
All source content is property of Moon Hanju.
All codes cannot be copied without permission.
*/
// thisIsNewMerge
*/난 김민상이야

//수정을 햇어222222
// 나도 수정해보자 연습 

// 다음 코드의 실행결과를 알려주세요
(async function() { console.group("1. 순수함수/비순수함수");
let state = 'test';
const pureFunc = (input) => {
    const output = input + '입니다';
    return output;
}
const impureFunc = (input) => {
    state += input;
    const output = state + '입니다';
    return output;
}
console.log(pureFunc(state)); // ----- 1
console.log(impureFunc(state)); // ----- 2
console.log(pureFunc(state)); // ----- 3
console.log(impureFunc(state)); // ----- 4
console.groupEnd(); }());

// 다음 코드의 실행결과를 알려주세요
(function() { console.group("2. 인스턴스멤버/클래스멤버");
const Test = (() => {
    let State = 'TEST'
    const Test = function(input) {
        let state = 'test'
        state += input;
        State += input;
        return {
            get state() {
                return state;
            },
            get State() {
                return State;
            }
        }
    }
    return Test;
})()
const {state: state1, State: State1} = new Test('테스트1');
console.log(state1, State1);
const {state: state2, State: State2} = new Test('테스트2');
console.log(state2, State2);
const {state: state3, State: State3} = new Test('테스트3');
console.log(state3, State3);
console.groupEnd(); }());

// 다음 코드의 설계구조를 개선해주세요
(async function() { console.group("3. 객체지향");
const obj1 = {
    test: '테스트1',
    log() {
        console.log('test: ' + this.test);
    }
}
const obj2 = {
    test: '테스트2',
    log() {
        console.log('test: ' + this.test);
    }
}
const obj3 = {
    test: '테스트3',
    log() {
        console.log('test: ' + this.test);
    }
}
obj1.log();
obj2.log();
obj3.log();
console.groupEnd(); }());
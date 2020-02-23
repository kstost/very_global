## very_global
아무데서나 접근 가능한 매우 전역적인 변수를 만들고 접근할수 있어요

## Install
```html
<script src="https://kstost.github.io/very_global/index.js"></script>
```
```js
const vg = new VeryGlobal();
```

## Install 2
$ npm install very_global
```js
import vg from 'very_global'
```

## Install 3 (Inline on console)
```js
((cb, url) => { let el = document.createElement('script'); el.onload = cb; el.src = url; document.head.appendChild(el); })(() => console.log('Importing complete'),
  'https://kstost.github.io/very_global/index.js');
```

## Usage
```js
vg.set('mydata1', 123);
vg.set('mydata2', ()=>44);
vg.set('mydata3', {hello:11});

let mydata1 = vg.get('mydata1');
let mydata2 = vg.get('mydata2');
let mydata3 = vg.get('mydata3');

console.log(mydata1); // 123
console.log(mydata2()); // 44
console.log(mydata3.hello); // 11

let key_list = vg.keyList(); // returns ['mydata1', 'mydata2', 'mydata3']

vg.clear(); // clear every data

let key_list = vg.keyList(); // returns []

while(true) {
    let val = vg.unique(); // It returns a number 1 bigger than call of previous time
    if(val > 100) { break; }
}
```

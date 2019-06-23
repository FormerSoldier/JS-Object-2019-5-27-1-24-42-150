var fruit = {
apple: 20,
pear: 20,
peach: 10
};
// write your code here...
var result = 0;
for(let key in fruit){
	result += fruit[key];
}
console.log(result);		//50
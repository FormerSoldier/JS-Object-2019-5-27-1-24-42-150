// 创建一个空对象，变量名为user
var user ={};
// 添加一个name属性，并设置值为John
user.name = 'John';
console.log(user.name);		// 'John'
// 添加一个surname属性，并设置其值为Mike
user.surname = 'Mike';
console.log(user.surname);	// 'Mike'
// 将name属性的值改为Peter
user.name = 'Peter';
console.log(user.name);		//'Peter'
// 删除user的name属性
delete user.name;
console.log(user);

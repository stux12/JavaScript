/**
 * http://usejsdoc.org/
 */

var temVar = 2;

for(var i=1; i<10; i++){
	console.log(temVar*i);
} 

//모듈이란
/*
 * 기능들을 한곳에 모아놓는곳 = 모듈
 * 
 * 모듈을 사용한 프로그램은 모듈에서 필요한 기능만 호출해서 사용
 * 
 */


//직접 모듈 만들어서 사용
var sum = {};
//sum안에 이런게 없으면 자동적으로 만듬
sum.execution = function(num1, num2) {
	var result = 0;
	for(var i=num1; i<=num2; i++){
		result += i;
	}
	return result;
};

// require로 호출해옴
var sum = require("./jsHello")
cosole.log(sum.execution(0,10))

//내부 모듈
var os = require("os");
console.log(os);
console.log(os.hostname());
console.log(os.type());
console.log(os.platform());
console.log(os.uptime());
console.log(os.networkInterfaces());


//외부 모듈
//npmjs.org에가면 여러가지 편리한 모듈이 있음
//끌어오는 방법 cmd켜서 cd 프로젝트장소로 이동
//npm install request하면 request다운됨
// 가져와야만 사용가능
var req = require("request");

req("http://www.naver.com",function(error, response, body){
	cosole.log(body);
});


////////////////////////////////////////////////////////////////////////////////////////


//노드의 이벤트 및 입출력
/*
EventEmitter객체를 상속하면됨
on() : 이벤트 연결
once() : 한번만 이벤트 연결
emit() : 이벤트 전달
removeListener() : 이벤트 연결 해제
*/
var util = require("util");
var eventEmitter = require("events").EventEmitter;

//fire를 받음
function TemObj() {
	this.on("fire",function(){
		console.log("fire event");
	});
}

util.inherits(TemObj, eventEmitter);
var obj = new TemObj();

//fire를 보냄
var fireTime = setTimeout(function() {
	console.log("fire event 3second");
	obj.emit("fire");
}, 3000);




// 파일 입출력 노드에서는 보통 비동기식으로 이루어짐 동기식은 사용x
/*
비동기식 : readFile(), writeFile()
동기식 : readFileSync(), writeFileSync()
*/

var fs = require("fs");
//비동기식 파일 읽기
//				파일명	 읽을형태
fs.readFile("hello.txt", "utf-8", function (err, data) {
	console.log(data);
});
//이게 먼저 실행됨
console.log("readFile end");

//비동기식 파일 쓰기 파일이 없으면 파일을 새로만들어줌
//				파일명				내용			실행
fs.writeFile("hello_world.txt", "hello world!!", function(err){
	console.log(err);
});
console.log("writeFile end");



//url객체
var url = require("url");
var queryString = require("queryString");

var temUrl = url.parse("https://www.google.co.kr")
var temStr = url.format(temUrl);

var temPar = queryString.parse(temUrl.query);
console.log(temPar.query);
console.log(temPar.dcr);
console.log(temPar.ei);
console.log(temPar.q);
console.log(querystring.stringify(temPar));

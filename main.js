var A = new Audio();
var B = new Audio();
var X = new Audio();
var i = 0;
var results = new Array();
var whichIsX = new Array();
var d = new Date();
var random = Math.floor(Math.random()*10);

function testABsampleA() {
    stopPlaying();
    document.getElementById("choice1").disabled = false;
    A = new Audio(audioTableAB[i][0]);
    setTimeout(function(){A.play()}, 1000);
}

function testABsampleB() {
  stopPlaying();
  document.getElementById("choice2").disabled = false;
  B = new Audio(audioTableAB[i][1]);
  setTimeout(function(){B.play()}, 1000);
}

function testABXsampleA() {
  stopPlaying();
  document.getElementById("choice1").disabled = false;
  A = new Audio(audioTableABX[i][0]);
  setTimeout(function(){A.play()}, 1000);
}

function testABXsampleB() {
  stopPlaying();
  document.getElementById("choice2").disabled = false;
  B = new Audio(audioTableABX[i][1]);
  setTimeout(function(){B.play()}, 1000);
}

function testABXsampleX() {
  stopPlaying();
  if (random % 2 == 0) testABXsampleA();
  else testABXsampleB();
}

function stopPlaying() {
  A.pause();
  A.currentTime = 0;
  B.pause();
  B.currentTime = 0;
  X.pause();
  X.currentTime = 0;
}



function seeAnsBtn() {
    // document.getElementsByClassName('displayDiv').style.display='none';
	// obj = document.getElementsByClassName('displayDiv');
	// obj.style.display=obj.style.display=="none"?"block":"none";
	obj = document.getElementsByClassName('displayDiv');
	for (i = 0; i < 20; i++) {
		obj[i].style.display='block';
	}
    // document.getElementsByClassName('displayDiv').style.display='block';
}

function nextHtml1() {
	setTimeout(function(){window.location.href = "./AB2.html"}, 300);
}

function nextHtml2() {
	setTimeout(function(){window.location.href = "./AB3.html"}, 300);
}

function nextHtml3() {
	setTimeout(function(){window.location.href = "./AB4.html"}, 300);
}

function nextHtml4() {
	setTimeout(function(){window.location.href = "./AB5.html"}, 300);
}
function nextHtml5() {
	setTimeout(function(){window.location.href = "./AB6.html"}, 300);
}
function nextHtml6() {
	setTimeout(function(){window.location.href = "./AB7.html"}, 300);
}
function nextHtml7() {
	setTimeout(function(){window.location.href = "./AB8.html"}, 300);
}
function nextHtml8() {
	setTimeout(function(){window.location.href = "./AB9.html"}, 300);
}

function nextButton1() {
  // stopPlaying();
  // i += 1;
  var r10 = choice10.value;
  var r11 = choice11.value;
  var r12 = choice12.value;
  
  var r20 = choice20.value;
  var r21 = choice21.value;
  var r22 = choice22.value;
  
  var r30 = choice30.value;
  var r31 = choice31.value;
  var r32 = choice32.value;
  
  var r40 = choice40.value;
  var r41 = choice41.value;
  var r42 = choice42.value;
  
  var r50 = choice50.value;
  var r51 = choice51.value;
  var r52 = choice52.value;
  
  var r60 = choice60.value;
  var r61 = choice61.value;
  var r62 = choice62.value;
  
  var r70 = choice70.value;
  var r71 = choice71.value;
  var r72 = choice72.value;
  
  var r80 = choice80.value;
  var r81 = choice81.value;
  var r82 = choice82.value;
  
  var r90 = choice90.value;
  var r91 = choice91.value;
  var r92 = choice92.value;
  
  var r100 = choice100.value;
  var r101 = choice101.value;
  var r102 = choice102.value;
  
  var r110 = choice110.value;
  var r111 = choice111.value;
  var r112 = choice112.value;
  
  var r120 = choice120.value;
  var r121 = choice121.value;
  var r122 = choice122.value;
  
  var r130 = choice130.value;
  var r131 = choice131.value;
  var r132 = choice132.value;
  
  var r140 = choice140.value;
  var r141 = choice141.value;
  var r142 = choice142.value;
  
  var r150 = choice150.value;
  var r151 = choice151.value;
  var r152 = choice152.value;
  
  var r160 = choice160.value;
  var r161 = choice161.value;
  var r162 = choice162.value;
  
  var r170 = choice170.value;
  var r171 = choice171.value;
  var r172 = choice172.value;
  
  var r180 = choice180.value;
  var r181 = choice181.value;
  var r182 = choice182.value;
  
  var r190 = choice190.value;
  var r191 = choice191.value;
  var r192 = choice192.value;
  
  var r200 = choice200.value;
  var r201 = choice201.value;
  var r202 = choice202.value;
  
  if(choice10.checked) {
    results.push(r10);
  }
  else if(choice11.checked) {
    results.push(r11);
  }
  else if(choice12.checked){
	results.push(r12);
  }
  
  if(choice20.checked) {
    results.push(r20);
  }
  else if(choice21.checked) {
    results.push(r21);
  }
  else if(choice22.checked){
	results.push(r22);
  }
  
  if(choice30.checked) {
    results.push(r30);
  }
  else if(choice31.checked) {
    results.push(r31);
  }
  else if(choice32.checked){
	results.push(r32);
  }
  
  if(choice40.checked) {
    results.push(r40);
  }
  else if(choice41.checked) {
    results.push(r41);
  }
  else if(choice42.checked){
	results.push(r42);
  }
  
  if(choice50.checked) {
    results.push(r50);
  }
  else if(choice51.checked) {
    results.push(r51);
  }
  else if(choice52.checked){
	results.push(r52);
  }
  
  if(choice60.checked) {
    results.push(r60);
  }
  else if(choice61.checked) {
    results.push(r61);
  }
  else if(choice62.checked){
	results.push(r62);
  }
  
  if(choice70.checked) {
    results.push(r70);
  }
  else if(choice71.checked) {
    results.push(r71);
  }
  else if(choice72.checked){
	results.push(r72);
  }
  
  if(choice80.checked) {
    results.push(r80);
  }
  else if(choice81.checked) {
    results.push(r81);
  }
  else if(choice82.checked){
	results.push(r82);
  }
  
  if(choice90.checked) {
    results.push(r90);
  }
  else if(choice91.checked) {
    results.push(r91);
  }
  else if(choice92.checked){
	results.push(r92);
  }
  
  if(choice100.checked) {
    results.push(r100);
  }
  else if(choice101.checked) {
    results.push(r101);
  }
  else if(choice102.checked){
	results.push(r102);
  }
  
 
 
   if(choice110.checked) {
    results.push(r110);
  }
  else if(choice111.checked) {
    results.push(r111);
  }
  else if(choice112.checked){
	results.push(r112);
  }
  
  if(choice120.checked) {
    results.push(r120);
  }
  else if(choice121.checked) {
    results.push(r121);
  }
  else if(choice122.checked){
	results.push(r122);
  }
  
  if(choice130.checked) {
    results.push(r130);
  }
  else if(choice131.checked) {
    results.push(r131);
  }
  else if(choice132.checked){
	results.push(r132);
  }
  
  if(choice140.checked) {
    results.push(r140);
  }
  else if(choice141.checked) {
    results.push(r141);
  }
  else if(choice142.checked){
	results.push(r142);
  }
  
  if(choice150.checked) {
    results.push(r150);
  }
  else if(choice151.checked) {
    results.push(r151);
  }
  else if(choice152.checked){
	results.push(r152);
  }
  
  if(choice160.checked) {
    results.push(r160);
  }
  else if(choice161.checked) {
    results.push(r161);
  }
  else if(choice162.checked){
	results.push(r162);
  }
  
  if(choice170.checked) {
    results.push(r170);
  }
  else if(choice171.checked) {
    results.push(r171);
  }
  else if(choice172.checked){
	results.push(r172);
  }
  
  if(choice180.checked) {
    results.push(r180);
  }
  else if(choice181.checked) {
    results.push(r181);
  }
  else if(choice182.checked){
	results.push(r182);
  }
  
  if(choice190.checked) {
    results.push(r190);
  }
  else if(choice191.checked) {
    results.push(r191);
  }
  else if(choice192.checked){
	results.push(r192);
  }
  
  if(choice200.checked) {
    results.push(r200);
  }
  else if(choice201.checked) {
    results.push(r201);
  }
  else if(choice202.checked){
	results.push(r202);
  }

  // document.getElementById("test").reset();

  // if (random % 2 == 0) whichIsX.push("A");
  // else whichIsX.push("B");
  // random = Math.floor(Math.random()*10);

  // document.getElementById("choice1").disabled = true;
  // document.getElementById("choice2").disabled = true;

  // if(location.href.split("/").slice(-1) == "AB.html" ) {
    // document.getElementById("question").innerHTML = questionTable[i];
  // }

  if(location.href.split("/").slice(-1) == "AB1.html") {
    download(results.join('\r\n'), d.getFullYear()+"-"+d.getMonth()+"-"+d.getDate()+" "+location.href.split("/").slice(-1)+'.txt', "text/plain");
    setTimeout(function(){window.location.href = "./pass1.html"}, 300);
  }

}


function nextButton2() {
  // stopPlaying();
  // i += 1;
  var r10 = choice10.value;
  var r11 = choice11.value;
  var r12 = choice12.value;
  
  var r20 = choice20.value;
  var r21 = choice21.value;
  var r22 = choice22.value;
  
  var r30 = choice30.value;
  var r31 = choice31.value;
  var r32 = choice32.value;
  
  var r40 = choice40.value;
  var r41 = choice41.value;
  var r42 = choice42.value;
  
  var r50 = choice50.value;
  var r51 = choice51.value;
  var r52 = choice52.value;
  
  var r60 = choice60.value;
  var r61 = choice61.value;
  var r62 = choice62.value;
  
  var r70 = choice70.value;
  var r71 = choice71.value;
  var r72 = choice72.value;
  
  var r80 = choice80.value;
  var r81 = choice81.value;
  var r82 = choice82.value;
  
  var r90 = choice90.value;
  var r91 = choice91.value;
  var r92 = choice92.value;
  
  var r100 = choice100.value;
  var r101 = choice101.value;
  var r102 = choice102.value;
  
  var r110 = choice110.value;
  var r111 = choice111.value;
  var r112 = choice112.value;
  
  var r120 = choice120.value;
  var r121 = choice121.value;
  var r122 = choice122.value;
  
  var r130 = choice130.value;
  var r131 = choice131.value;
  var r132 = choice132.value;
  
  var r140 = choice140.value;
  var r141 = choice141.value;
  var r142 = choice142.value;
  
  var r150 = choice150.value;
  var r151 = choice151.value;
  var r152 = choice152.value;
  
  var r160 = choice160.value;
  var r161 = choice161.value;
  var r162 = choice162.value;
  
  var r170 = choice170.value;
  var r171 = choice171.value;
  var r172 = choice172.value;
  
  var r180 = choice180.value;
  var r181 = choice181.value;
  var r182 = choice182.value;
  
  var r190 = choice190.value;
  var r191 = choice191.value;
  var r192 = choice192.value;
  
  var r200 = choice200.value;
  var r201 = choice201.value;
  var r202 = choice202.value;
  
  if(choice10.checked) {
    results.push(r10);
  }
  else if(choice11.checked) {
    results.push(r11);
  }
  else if(choice12.checked){
	results.push(r12);
  }
  
  if(choice20.checked) {
    results.push(r20);
  }
  else if(choice21.checked) {
    results.push(r21);
  }
  else if(choice22.checked){
	results.push(r22);
  }
  
  if(choice30.checked) {
    results.push(r30);
  }
  else if(choice31.checked) {
    results.push(r31);
  }
  else if(choice32.checked){
	results.push(r32);
  }
  
  if(choice40.checked) {
    results.push(r40);
  }
  else if(choice41.checked) {
    results.push(r41);
  }
  else if(choice42.checked){
	results.push(r42);
  }
  
  if(choice50.checked) {
    results.push(r50);
  }
  else if(choice51.checked) {
    results.push(r51);
  }
  else if(choice52.checked){
	results.push(r52);
  }
  
  if(choice60.checked) {
    results.push(r60);
  }
  else if(choice61.checked) {
    results.push(r61);
  }
  else if(choice62.checked){
	results.push(r62);
  }
  
  if(choice70.checked) {
    results.push(r70);
  }
  else if(choice71.checked) {
    results.push(r71);
  }
  else if(choice72.checked){
	results.push(r72);
  }
  
  if(choice80.checked) {
    results.push(r80);
  }
  else if(choice81.checked) {
    results.push(r81);
  }
  else if(choice82.checked){
	results.push(r82);
  }
  
  if(choice90.checked) {
    results.push(r90);
  }
  else if(choice91.checked) {
    results.push(r91);
  }
  else if(choice92.checked){
	results.push(r92);
  }
  
  if(choice100.checked) {
    results.push(r100);
  }
  else if(choice101.checked) {
    results.push(r101);
  }
  else if(choice102.checked){
	results.push(r102);
  }
  
 
 
   if(choice110.checked) {
    results.push(r110);
  }
  else if(choice111.checked) {
    results.push(r111);
  }
  else if(choice112.checked){
	results.push(r112);
  }
  
  if(choice120.checked) {
    results.push(r120);
  }
  else if(choice121.checked) {
    results.push(r121);
  }
  else if(choice122.checked){
	results.push(r122);
  }
  
  if(choice130.checked) {
    results.push(r130);
  }
  else if(choice131.checked) {
    results.push(r131);
  }
  else if(choice132.checked){
	results.push(r132);
  }
  
  if(choice140.checked) {
    results.push(r140);
  }
  else if(choice141.checked) {
    results.push(r141);
  }
  else if(choice142.checked){
	results.push(r142);
  }
  
  if(choice150.checked) {
    results.push(r150);
  }
  else if(choice151.checked) {
    results.push(r151);
  }
  else if(choice152.checked){
	results.push(r152);
  }
  
  if(choice160.checked) {
    results.push(r160);
  }
  else if(choice161.checked) {
    results.push(r161);
  }
  else if(choice162.checked){
	results.push(r162);
  }
  
  if(choice170.checked) {
    results.push(r170);
  }
  else if(choice171.checked) {
    results.push(r171);
  }
  else if(choice172.checked){
	results.push(r172);
  }
  
  if(choice180.checked) {
    results.push(r180);
  }
  else if(choice181.checked) {
    results.push(r181);
  }
  else if(choice182.checked){
	results.push(r182);
  }
  
  if(choice190.checked) {
    results.push(r190);
  }
  else if(choice191.checked) {
    results.push(r191);
  }
  else if(choice192.checked){
	results.push(r192);
  }
  
  if(choice200.checked) {
    results.push(r200);
  }
  else if(choice201.checked) {
    results.push(r201);
  }
  else if(choice202.checked){
	results.push(r202);
  }

  // document.getElementById("test").reset();

  // if (random % 2 == 0) whichIsX.push("A");
  // else whichIsX.push("B");
  // random = Math.floor(Math.random()*10);

  // document.getElementById("choice1").disabled = true;
  // document.getElementById("choice2").disabled = true;

  // if(location.href.split("/").slice(-1) == "AB.html" ) {
    // document.getElementById("question").innerHTML = questionTable[i];
  // }

  if(location.href.split("/").slice(-1) == "AB2.html") {
    download(results.join('\r\n'), d.getFullYear()+"-"+d.getMonth()+"-"+d.getDate()+" "+location.href.split("/").slice(-1)+'.txt', "text/plain");
    setTimeout(function(){window.location.href = "./pass2.html"}, 300);
  }

}

function nextButton3() {
  // stopPlaying();
  // i += 1;
  var r10 = choice10.value;
  var r11 = choice11.value;
  var r12 = choice12.value;
  
  var r20 = choice20.value;
  var r21 = choice21.value;
  var r22 = choice22.value;
  
  var r30 = choice30.value;
  var r31 = choice31.value;
  var r32 = choice32.value;
  
  var r40 = choice40.value;
  var r41 = choice41.value;
  var r42 = choice42.value;
  
  var r50 = choice50.value;
  var r51 = choice51.value;
  var r52 = choice52.value;
  
  var r60 = choice60.value;
  var r61 = choice61.value;
  var r62 = choice62.value;
  
  var r70 = choice70.value;
  var r71 = choice71.value;
  var r72 = choice72.value;
  
  var r80 = choice80.value;
  var r81 = choice81.value;
  var r82 = choice82.value;
  
  var r90 = choice90.value;
  var r91 = choice91.value;
  var r92 = choice92.value;
  
  var r100 = choice100.value;
  var r101 = choice101.value;
  var r102 = choice102.value;
  
  var r110 = choice110.value;
  var r111 = choice111.value;
  var r112 = choice112.value;
  
  var r120 = choice120.value;
  var r121 = choice121.value;
  var r122 = choice122.value;
  
  var r130 = choice130.value;
  var r131 = choice131.value;
  var r132 = choice132.value;
  
  var r140 = choice140.value;
  var r141 = choice141.value;
  var r142 = choice142.value;
  
  var r150 = choice150.value;
  var r151 = choice151.value;
  var r152 = choice152.value;
  
  var r160 = choice160.value;
  var r161 = choice161.value;
  var r162 = choice162.value;
  
  var r170 = choice170.value;
  var r171 = choice171.value;
  var r172 = choice172.value;
  
  var r180 = choice180.value;
  var r181 = choice181.value;
  var r182 = choice182.value;
  
  var r190 = choice190.value;
  var r191 = choice191.value;
  var r192 = choice192.value;
  
  var r200 = choice200.value;
  var r201 = choice201.value;
  var r202 = choice202.value;
  
  if(choice10.checked) {
    results.push(r10);
  }
  else if(choice11.checked) {
    results.push(r11);
  }
  else if(choice12.checked){
	results.push(r12);
  }
  
  if(choice20.checked) {
    results.push(r20);
  }
  else if(choice21.checked) {
    results.push(r21);
  }
  else if(choice22.checked){
	results.push(r22);
  }
  
  if(choice30.checked) {
    results.push(r30);
  }
  else if(choice31.checked) {
    results.push(r31);
  }
  else if(choice32.checked){
	results.push(r32);
  }
  
  if(choice40.checked) {
    results.push(r40);
  }
  else if(choice41.checked) {
    results.push(r41);
  }
  else if(choice42.checked){
	results.push(r42);
  }
  
  if(choice50.checked) {
    results.push(r50);
  }
  else if(choice51.checked) {
    results.push(r51);
  }
  else if(choice52.checked){
	results.push(r52);
  }
  
  if(choice60.checked) {
    results.push(r60);
  }
  else if(choice61.checked) {
    results.push(r61);
  }
  else if(choice62.checked){
	results.push(r62);
  }
  
  if(choice70.checked) {
    results.push(r70);
  }
  else if(choice71.checked) {
    results.push(r71);
  }
  else if(choice72.checked){
	results.push(r72);
  }
  
  if(choice80.checked) {
    results.push(r80);
  }
  else if(choice81.checked) {
    results.push(r81);
  }
  else if(choice82.checked){
	results.push(r82);
  }
  
  if(choice90.checked) {
    results.push(r90);
  }
  else if(choice91.checked) {
    results.push(r91);
  }
  else if(choice92.checked){
	results.push(r92);
  }
  
  if(choice100.checked) {
    results.push(r100);
  }
  else if(choice101.checked) {
    results.push(r101);
  }
  else if(choice102.checked){
	results.push(r102);
  }
  
 
 
   if(choice110.checked) {
    results.push(r110);
  }
  else if(choice111.checked) {
    results.push(r111);
  }
  else if(choice112.checked){
	results.push(r112);
  }
  
  if(choice120.checked) {
    results.push(r120);
  }
  else if(choice121.checked) {
    results.push(r121);
  }
  else if(choice122.checked){
	results.push(r122);
  }
  
  if(choice130.checked) {
    results.push(r130);
  }
  else if(choice131.checked) {
    results.push(r131);
  }
  else if(choice132.checked){
	results.push(r132);
  }
  
  if(choice140.checked) {
    results.push(r140);
  }
  else if(choice141.checked) {
    results.push(r141);
  }
  else if(choice142.checked){
	results.push(r142);
  }
  
  if(choice150.checked) {
    results.push(r150);
  }
  else if(choice151.checked) {
    results.push(r151);
  }
  else if(choice152.checked){
	results.push(r152);
  }
  
  if(choice160.checked) {
    results.push(r160);
  }
  else if(choice161.checked) {
    results.push(r161);
  }
  else if(choice162.checked){
	results.push(r162);
  }
  
  if(choice170.checked) {
    results.push(r170);
  }
  else if(choice171.checked) {
    results.push(r171);
  }
  else if(choice172.checked){
	results.push(r172);
  }
  
  if(choice180.checked) {
    results.push(r180);
  }
  else if(choice181.checked) {
    results.push(r181);
  }
  else if(choice182.checked){
	results.push(r182);
  }
  
  if(choice190.checked) {
    results.push(r190);
  }
  else if(choice191.checked) {
    results.push(r191);
  }
  else if(choice192.checked){
	results.push(r192);
  }
  
  if(choice200.checked) {
    results.push(r200);
  }
  else if(choice201.checked) {
    results.push(r201);
  }
  else if(choice202.checked){
	results.push(r202);
  }

  // document.getElementById("test").reset();

  // if (random % 2 == 0) whichIsX.push("A");
  // else whichIsX.push("B");
  // random = Math.floor(Math.random()*10);

  // document.getElementById("choice1").disabled = true;
  // document.getElementById("choice2").disabled = true;

  // if(location.href.split("/").slice(-1) == "AB.html" ) {
    // document.getElementById("question").innerHTML = questionTable[i];
  // }

  if(location.href.split("/").slice(-1) == "AB3.html") {
    download(results.join('\r\n'), d.getFullYear()+"-"+d.getMonth()+"-"+d.getDate()+" "+location.href.split("/").slice(-1)+'.txt', "text/plain");
    setTimeout(function(){window.location.href = "./end.html"}, 300);
  }

}

// function question() {
  // document.getElementById("question").innerHTML = questionTable[i];
  // arr = [0,1,2,3,4,5,6,7,8,9];
  // random_index = arr.sort(function() {
    // return (0.5-Math.random());
	// })
// }

// function init(){
	// document.getElementById("submit").disabled = false;
// }

// function finish(){
	// document.getElementById("submit").disabled = true;
// }
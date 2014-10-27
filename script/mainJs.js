
function giveEvent() {
    // thumb1의 이벤트 함수 추가 : src에 넣고자 하는 이미지 입력
    changeImage("thumb1","jisung.jpg");
    changeText("thumb1");
    // thumb2의 이벤트 함수 추가
    changeImage("thumb2","lee.png");
    changeText("thumb2");
    // thumb3의 이벤트 함수 추가
    changeImage("thumb3","ki.jpg");
    changeText("thumb3");
    // thumb4의 이벤트 함수 추가
    changeImage("thumb4","son.jpg");
    changeText("thumb4");

}

function changeImage(id,imgSrc) {
    jindo.$Fn(function(event){
        // 이미지 변경
        jindo.$("main_image").src = "images/" + imgSrc;

        // 썸네일 이미지의 active효과
        jindo.$Element("thumb1").className("thumb1");
        jindo.$Element("thumb2").className("thumb2");
        jindo.$Element("thumb3").className("thumb3");
        jindo.$Element("thumb4").className("thumb4");
        jindo.$Element(id).addClass("thumb_active");

    }).attach(jindo.$(id),"click");
}

function changeText(id) {
    jindo.$Fn(function(event) {

        // 페이지내 링크 부여
        jindo.$("imageLink").href = "#move_" + id;
        jindo.$("textLink").href = "#move_" + id;

        // 텍스트 변경 : 요청을 통해 변경할 부분
        jindo.$Element("title_domain").html("<h3>" + id + "의 TITLE </h3>");
        jindo.$Element("story_domain").html("<h4>글내용(" + id +"이 올라와 있습니다.)");
    }).attach(jindo.$(id),"click");
}


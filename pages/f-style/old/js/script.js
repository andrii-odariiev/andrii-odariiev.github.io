//$(document).ready(function(){
//    $(".trigger").click(function(){
//        numIndex = $(this).index();
//        $(".active-card").removeClass("active-card");
//        $(".card:eq(" + numIndex + ")").addClass("active-card");
//        $(".trigger").removeClass("active-trigger");
//        $(".trigger:eq(" + numIndex + ")").addClass("active-trigger");
//    });
//});

let i = 1

while ( i > 0 ){
let nam = prompt("Введите пароль для доступа", '');

if ( nam == "123" ) {
    (function a() {
        alert("Успех");
        //продолжаем исполнять код при правильном пароле
        let i = 0;
    }) ();
    document.write(a);
} else {
    alert("попробуйте еще раз")
}
}
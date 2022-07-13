//$(document).ready(function () {

//    $(".knob").knob({
//        'release': function (v) { console.clear(), console.log(v); }
//    });//works

//});

$(function () {

    $(".knob").knob({
        'release': function (v) {
            console.clear(),
            console.log("Affected value: " + v);
            console.log("Front view radius: " + $("#frontViewRadius").val());
            console.log("Side view radius: " + $("#sideViewRadius").val());
            console.log("Length between rows: " + $("#lengthBtwnBows").val());
            //console.log("Side view radius: " + $("#sideViewRadius").val());
        }
    });//works
})
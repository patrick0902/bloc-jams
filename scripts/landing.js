 var pointsArray = document.getElementsByClassName('point');

 var animatePoints = function (points) {

     var points = document.getElementsByClassName('point');

     var revealPoint = function (number) {
         points[number].style.opacity = 1;
         points[number].style.transform = "scaleX(1) translateY(0)";
         points[number].style.msTransform = "scaleX(1) translateY(0)";
         points[number].style.WebkitTransform = "scaleX(1) translateY(0)";

     };

     for (var i = 0; i <= 2; i++) {
         revealPoint(i);
     }


 };

 window.onload = function () {
     if (window.innerHeight > 950) {
         animatePoints(pointsArray);
     }

     var sellingPoints = document.getElementsByClassName('selling-points')[0];
     var scrollDistance = sellingPoints.getBoundingClientRect().top - window.innerHeight + 200;

     window.addEventListener('scroll', function (event) {
         if (document.documentElement.scrollTop || document.body.scrollTop >= scrollDistance) {
             animatePoints(pointsArray);
         }
     });
 }

//* Materialize jQuery *//

$(document).ready(function () {
   $('.sidenav').sidenav({
      'preventScrolling': false
   });
   $('.fixed-action-btn').floatingActionButton({
      'direction': 'bottom',
      'hoverEnabled': false,
      // 'toolbarEnabled': true,
      // 'instance': close(),
   });
   $('.carousel').carousel({
      // 'numVisible': 4,
      // 'noWrap': true,
      'indicators': true,
      'shift': 70,
      'dist': -50,
      // 'padding': 20,
   });
   $('.carousel').carousel('set', 2);
   $('.scrollspy').scrollSpy({
      // 'throttle': 100,
      'scrollOffset': 0,
   });
});


//* Custom jQuery *//

// // To show sideBar like popUp on startUp
// setTimeout(() => {
//    $('#slide-out').addClass('sidenav-fixed');
// }, 300);
// setTimeout(() => {
//    $('#slide-out').removeClass('sidenav-fixed');
// }, 1200);

// To hide pulse effect from toggleBtn of fixed-action-btn after user first click;
$(".fixed-action-btn__toggle-btn").click(function () {
   $(".fixed-action-btn__toggle-btn").removeClass('pulse');
});

// To change menu icon to close icon on toggleBtn of fixed-action-btn
var btn = $('.fixed-action-btn__toggle-btn');
var icon = $('.fixed-action-btn__toggle-btn > .menu-btn');
let x = 0;
$(btn).click(() => (x === 0)
   ? `${$(icon).text('').text('close')} ${x = x -= 1}`
   : `${$(icon).text('').text('menu')} ${x = x += 1}`
);

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

//* Materialize jQuery *//

$(document).ready(function () {
   $('.sidenav').sidenav({
      'preventScrolling': false
   });
   $('.fixed-action-btn').floatingActionButton({
      'direction': 'bottom',
      'hoverEnabled': false,
      // 'toolbarEnabled': true,
      // 'instance': close()
   });
   $('.carousel').carousel({
      // 'numVisible': 4,
      // 'noWrap': true,
      'indicators': true
   });
});

//* /Materialize jQuery *//


//* Custom jQuery *//

// To show sideBar like  pop up
// setTimeout(() => {
//    $('#slide-out').addClass('sidenav-fixed');
// }, 300);
// setTimeout(() => {
//    $('#slide-out').removeClass('sidenav-fixed');
// }, 1200);

//* /Custom jQuery *//

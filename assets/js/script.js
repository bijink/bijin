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
});

//* /Materialize jQuery *//


//* Custom jQuery

// To show sideBar like  pop up
// setTimeout(() => {
//    $('#slide-out').addClass('sidenav-fixed');
// }, 300);
// setTimeout(() => {
//    $('#slide-out').removeClass('sidenav-fixed');
// }, 1200);



// let x = 0;
// $('#toggle').click(() => (x === 0)
//    ? `${$('.scaleClass').removeClass('scale-out').addClass('scale-in')} ${x = x -= 1}`
//    : `${$('.scaleClass').removeClass('scale-in').addClass('scale-out')} ${x = x += 1}`
// );

//* /Custom jQuery *//
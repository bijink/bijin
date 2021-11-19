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

{
   const toggle_btn = $('.fixed-action-btn__toggle-btn');
   const floating_btn = $('.fixed-action-btn__floating-btn > li');
   const icon = $('.fixed-action-btn__toggle-btn > .menu-btn');

   let state = false;

   // To change menu icon to close icon on toggleBtn of fixed-action-btn when btn clicked
   $(toggle_btn).click(() => {
      !state ?
         ($(icon).text('').text('close')) && (state = true)
         :
         ($(icon).text('').text('menu')) && (state = false);
   });
   $(floating_btn).click(() => {
      state && ($(icon).text('menu')) && (state = false);
   });

   // // To toggle pulse effect with clicks on toggleBtn of fixed-action-btn
   // $(toggle_btn).click(() => {
   //    state ?
   //       $(toggle_btn).removeClass('pulse')
   //       :
   //       $(toggle_btn).addClass('pulse');
   // });
   // $(floating_btn).click(() => {
   //    !state && $(".fixed-action-btn__toggle-btn").addClass('pulse');
   // });

   // To remove pulse effect in toggleBtn of fixed-action-btn after first click
   $(toggle_btn).click(() => {
      $(toggle_btn).removeClass('pulse');
   });
}

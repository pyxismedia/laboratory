const TIMEOUT = 300;
// const grid = document.querySelector('.Masonry');
// animateCSSGrid.wrapGrid(grid, { duration : TIMEOUT });

$.cssNumber.gridColumnStart = true;
$.cssNumber.gridColumnEnd = true;
$.cssNumber.gridRowStart = true;
$.cssNumber.gridRowEnd = true;

$('.Masonry__item').each(function() {
  $(this).css({
    gridColumnStart: $(this).data('origin-column-start'),
    gridColumnEnd: $(this).data('origin-column-end'),
    gridRowStart: $(this).data('origin-row-start'),
    gridRowEnd: $(this).data('origin-row-end'),
  });
});

// $('h1').textFill({
//   maxFontPixels: 200,
// });

$('.Masonry__item').click(function(event) {
  event.stopPropagation();
  $('.Masonry__item--active').each(function() {
    $(this).css({
      gridColumnStart: $(this).data('origin-column-start'),
      gridColumnEnd: $(this).data('origin-column-end'),
      gridRowStart: $(this).data('origin-row-start'),
      gridRowEnd: $(this).data('origin-row-end'),
    });
    $(this).find('.Masonry__close--active').removeClass('Masonry__close--active');
  });
  $('.Masonry__item').removeClass('Masonry__item--active');
  $(this).addClass('Masonry__item--active');
  $(this).css({
    gridColumnStart: $(this).data('opened-column-start'),
    gridColumnEnd: $(this).data('opened-column-end'),
    gridRowStart: $(this).data('opened-row-start'),
    gridRowEnd: $(this).data('opened-row-end'),
  });
  $(this).find('.Masonry__close').addClass('Masonry__close--active');
});

$('.Masonry__close').add(window).click(function(e) {
  $('.Masonry__item--active').each(function() {
    $(this).css({
      gridColumnStart: $(this).data('origin-column-start'),
      gridColumnEnd: $(this).data('origin-column-end'),
      gridRowStart: $(this).data('origin-row-start'),
      gridRowEnd: $(this).data('origin-row-end'),
    });
  });
  $('.Masonry__item--active').removeClass('Masonry__item--active');
  $(this).removeClass('Masonry__close--active');
  e.stopPropagation();
});

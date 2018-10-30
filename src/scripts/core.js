CF = {}

CF.affixSummary = function () {
$('.summary-box').after('<div class="affix" id="affix"></div>')

var affix = $('.affix')
affix.append($('.summary-box').clone(true))

// Show affix on scroll.
var element = document.getElementById('affix')
if (element !== null) {
  var position = $('.info-box').position()
  window.addEventListener('scroll', function () {
    var height = $(window).scrollTop()
    console.log("This is my height"+height + "Position.top"+position.top)
    if (height > 0) {
        $('.summary-box').css('visibility', 'hidden')
        $('.affix .summary-box').css('visibility', 'visible')
      affix.css('display', 'block')
    } else {
      affix.css('display', 'none')
      $('.summary-box').css('visibility', 'visible')
    }
  })
}
}

CF.readyHandler = function() {
    if ($('body').hasClass('cf-transaction')) { 
        CF.affixSummary();
    }
}
$(document).ready(CF.readyHandler);
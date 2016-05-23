$(function(){

  $('nav a.homePage').click(scroll);

  $(window).scroll(showReturn);
  $(window).resize(showReturn);
  $('#returntotop').click(returnTop);

});

function scroll()
{
  $.scrollTo( this.hash, 900, { easing: 'easeOutQuad', axis: 'y' });
  return false;
  // need return false so that the href normally there doesn't fire off
}

function returnTop()
{
  $.scrollTo( "#wrapper", 900, { easing: 'easeOutQuad', axis: 'y' });
}

function showReturn()
{
  if (($(this).scrollTop() > 300))
    {
        $('#returntotop').fadeIn();
    }
  else
    {
        $('#returntotop').fadeOut();
    }
}




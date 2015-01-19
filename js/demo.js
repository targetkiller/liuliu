$('.walk-add').bind('tap',function(){
  $('.userme').addClass('active');
  $('.find-circle').addClass('active');
  $(this).hide();
  setTimeout(function(){
    $('.walk-adr').addClass('active');
  },3000);
  setTimeout(function(){
    $('.walk-dialog').removeClass('hide');
  },4000);
});

$('.walk-dialog .close').bind('tap',function(){
  $('.walk-dialog').addClass('hide');
});

$('.tab-item').bind('tap',function(){
  $(this).addClass('active').siblings().removeClass('active');
  var jumpIndex = $(this).attr('data-index');
  $('.page').addClass('hide');
  $('#'+jumpIndex).removeClass('hide');
});

$('.icon-shoot').bind('tap',function(){
  $('#index').animate({'top':"100%"},200,'ease-out',function(){
    $('#index').addClass('hide');
  });
  $('#photo').removeClass('hide').animate({'top':"0"},200,'ease-in',function(){
  });
  $('.bar-tab').addClass('hide');
});

$('.photo-btn').bind('tap',function(){
  $('#photo').removeClass('hide').animate({'top':"100%"},200,'ease-out',function(){
    $('#index').addClass('hide');
  });
  $('#photo-effect').removeClass('hide').animate({'top':"0"},200,'ease-in',function(){
  });
});

$('.icon-photogo').bind('tap',function(){
  $('#photo-effect').removeClass('hide').animate({'top':"100%"},200,'ease-out',function(){
    $('#index').addClass('hide');
  });
  $('#photo-send').removeClass('hide').animate({'top':"0"},200,'ease-in',function(){
  });
});

$('.icon-photoshare').bind('tap',function(){
  $('#index').removeClass('hide');
  $('.bar-tab').removeClass('hide');
  $('#photo-send').removeClass('hide').animate({'top':"-100%"},200,'ease-out',function(){
  });
  $('#index').animate({'top':"0"},200,'ease-in',function(){
  });
});

$('#photo .icon-close').bind('tap',function(){
  $('#index').removeClass('hide');
  $('.bar-tab').removeClass('hide');
  $('#photo').removeClass('hide').animate({'top':"-100%"},200,'ease-out',function(){
  });
  $('#index').animate({'top':"0"},200,'ease-in',function(){
  });
});

$('#photo-effect .icon-photoback').bind('tap',function(){
  $('#photo-effect').removeClass('hide').animate({'top':"-100%"},200,'ease-out',function(){
  });
  $('#photo').removeClass('hide').animate({'top':"0"},200,'ease-in',function(){
  });
});

$('#photo-send .icon-photoback').bind('tap',function(){
  $('#photo-send').removeClass('hide').animate({'top':"-100%"},200,'ease-out',function(){
  });
  $('#photo-effect').removeClass('hide').animate({'top':"0"},200,'ease-in',function(){
  });
});

var bh = $(window).height();
var bw = $(window).width();
var photoOptHeight = bh - bw - 44;
$('.photo-opt').css('height',photoOptHeight);
$(function() {

  if(window.matchMedia('(min-width: 769px)').matches){
    
    $(window).scroll(function () {
      const windowHeight = $(window).height();
      const scroll = $(window).scrollTop();
  
      $('.js-fadein').each(function () {
        const targetPosition = $(this).offset().top;
        if (scroll > targetPosition - windowHeight + 100) {
          $(this).addClass("is-fadein");
        }
      });
      $('.js-delay-a').each(function(){
        const targetPosition = $(this).offset().top;
        if (scroll > targetPosition - windowHeight + 100) {
          $(function(){
            $('.js-delay-a').each(function(i){
                $(this).delay(i * 200).queue(function(){
                    $(this).addClass('is-fadein');
                });
            });
          });
        }
      });
      $('.js-delay-b').each(function () {
        const targetPosition = $(this).offset().top;
        if (scroll > targetPosition - windowHeight + 100) {
          $(function(){
            $('.js-delay-b').each(function(i){
                $(this).delay(i * 200).queue(function(){
                    $(this).addClass('is-fadein');
                });
            });
          });
        }
      });
      $('.js-delay-c').each(function () {
        const targetPosition = $(this).offset().top;
        if (scroll > targetPosition - windowHeight + 100) {
          $(function(){
            $('.js-delay-c').each(function(i){
                $(this).delay(i * 200).queue(function(){
                    $(this).addClass('is-fadein');
                });
            });
          });
        }
      });
      $('.js-delay-d').each(function () {
        const targetPosition = $(this).offset().top;
        if (scroll > targetPosition - windowHeight + 100) {
          $(function(){
            $('.js-delay-d').each(function(i){
                $(this).delay(i * 200).queue(function(){
                    $(this).addClass('is-fadein');
                });
            });
          });
        }
      });
      
      $('.js-fadein-left, .js-fadein-right').each(function () {
        const targetPosition = $(this).offset().top;
        if (scroll > targetPosition - windowHeight + 100) {
          $(this).addClass("side-fadein");
        }
      });
      $('.js-fadein-deg').each(function () {
        const targetPosition = $(this).offset().top;
        if (scroll > targetPosition - windowHeight + 100) {
          $(this).addClass("deg-fadein");
        }
      });

    });

    var position = $(".pc-free").offset().top;
    $(".btn-soudan").click(
      function () {
        $('html, body').animate({scrollTop: position}, 500);
      }
    );    

    $('.fukidashi').each(function(i){
      $(this).delay(i * 1500);
      });

setInterval(function(){
  $('.fukidashi').animate(
    {opacity: 1},500
    ).animate(
      {top:'-=220px',opacity: 0},10000
      ).animate(
          {top:'+=220px'},50);
},1000
);

setInterval(function(){
  $('.js-cloud').animate({left:'-=20px'},2000);
  $('.js-cloud').animate({left:'+=20px'},2000);  
},1000
);

setInterval(function(){
  $('.js-cloud-b').animate({right:'-=20px'},2000);
  $('.js-cloud-b').animate({right:'+=20px'},2000);  
},1000
);

setInterval(function(){
  $('.js-cloud-d').animate({top:'-=20px'},2000);
  $('.js-cloud-d').animate({top:'+=20px'},2000);  
},1000
);

setInterval(function(){
  $('.js-container-a').animate({top:'+=20px'},2000);
  $('.js-container-a').animate({top:'-=20px'},2000);  
},1000
);

setInterval(function(){
  $('.js-container-b').animate({top:'-=30px'},2000);
  $('.js-container-b').animate({top:'+=30px'},2000);  
},1000
);

setInterval(function(){
  $('.pc-free').animate({width:'+=50px'},2000);
  $('.pc-free').animate({width:'-=50px'},2000);  
},1000
);

setInterval(function(){
  $('.pc-wow').animate({width:'+=30px'},200);
  $('.pc-wow').animate({width:'-=30px'},500);  
},800
);




if($('form').length) {
  $('form').validate({
    rules: {
      name: {
        required: true
      },
      furigana: {
        required: true
      },
      tel: {
        required: true
      },
      email: {
        required: true
      },
      content: {
        required: true
      },
      'privacy': {
        required: true
      }
    },
    messages: {
      name: {
        required: '<p class="error">お名前を入力してください。</p>'
      },
      furigana: {
        required: '<p class="error">ふりがなを入力してください。</p>'
      },
      tel: {
        required: '<p class="error">電話番号を入力してください。</p>'
      },
      email: {
        required: '<p class="error">メールアドレスを入力してください。</p>'
      },
      content: {
        required: '<p class="error">お問い合わせ内容を入力してください。</p>'
      },
      'privacy': {
        required: '<p class="error">プライバシーポリシーに同意してください。</p>',
      }
    },
    errorPlacement: function(error, element) {
      if(element.attr("name") == ("privacy")) {
        error.insertAfter(".checkbox-item");
      } else {
        error.insertAfter(element);
      }
    }
  });
}












} else {

  $(window).scroll(function () {
    const windowHeight = $(window).height();
    const scroll = $(window).scrollTop();

    $('.js-fadein').each(function () {
      const targetPosition = $(this).offset().top;
      if (scroll > targetPosition - windowHeight + 100) {
        $(this).addClass("is-fadein");
      }
    });
    $('.js-delay-a').each(function(){
      const targetPosition = $(this).offset().top;
      if (scroll > targetPosition - windowHeight + 100) {
        $(function(){
          $('.js-delay-a').each(function(i){
              $(this).delay(i * 200).queue(function(){
                  $(this).addClass('is-fadein');
              });
          });
        });
      }
    });
    $('.js-delay-b').each(function () {
      const targetPosition = $(this).offset().top;
      if (scroll > targetPosition - windowHeight + 100) {
        $(function(){
          $('.js-delay-b').each(function(i){
              $(this).delay(i * 200).queue(function(){
                  $(this).addClass('is-fadein');
              });
          });
        });
      }
    });
    $('.js-delay-c').each(function () {
      const targetPosition = $(this).offset().top;
      if (scroll > targetPosition - windowHeight + 100) {
        $(function(){
          $('.js-delay-c').each(function(i){
              $(this).delay(i * 200).queue(function(){
                  $(this).addClass('is-fadein');
              });
          });
        });
      }
    });
    $('.js-delay-d').each(function () {
      const targetPosition = $(this).offset().top;
      if (scroll > targetPosition - windowHeight + 100) {
        $(function(){
          $('.js-delay-d').each(function(i){
              $(this).delay(i * 200).queue(function(){
                  $(this).addClass('is-fadein');
              });
          });
        });
      }
    });
    
    $('.js-fadein-left, .js-fadein-right').each(function () {
      const targetPosition = $(this).offset().top;
      if (scroll > targetPosition - windowHeight + 100) {
        $(this).addClass("side-fadein");
      }
    });
    $('.js-fadein-deg').each(function () {
      const targetPosition = $(this).offset().top;
      if (scroll > targetPosition - windowHeight + 100) {
        $(this).addClass("deg-fadein");
      }
    });

  });

  var position = $(".sp-free").offset().top;
  $(".btn-soudan").click(
    function () {
      $('html, body').animate({scrollTop: position}, 500);
    }
  );    

  $('.fukidashi').each(function(i){
    $(this).delay(i * 1500);
    });

setInterval(function(){
$('.fukidashi').animate(
  {opacity: 1},500
  ).animate(
    {top:'0px',opacity: 0},10000
    ).animate(
        {top:'+=218px'},50);
},1000
);

setInterval(function(){
$('.js-cloud').animate({left:'-=20px'},2000);
$('.js-cloud').animate({left:'+=20px'},2000);  
},1000
);

setInterval(function(){
  $('.js-cloud-b').animate({right:'-=20px'},2000);
  $('.js-cloud-b').animate({right:'+=20px'},2000);  
},1000
);

setInterval(function(){
$('.js-cloud-d').animate({top:'-=20px'},2000);
$('.js-cloud-d').animate({top:'+=20px'},2000);  
},1000
);

setInterval(function(){
$('.js-container-a').animate({top:'+=20px'},2000);
$('.js-container-a').animate({top:'-=20px'},2000);  
},1000
);

setInterval(function(){
$('.js-container-b').animate({top:'-=30px'},2000);
$('.js-container-b').animate({top:'+=30px'},2000);  
},1000
);

setInterval(function(){
$('.sp-free').animate({width:'+=50px'},2000);
$('.sp-free').animate({width:'-=50px'},2000);  
},1000
);

setInterval(function(){
$('.sp-wow').animate({width:'+=30px'},200);
$('.sp-wow').animate({width:'-=30px'},500);  
},800
);



  if($('form').length) {
		$('form').validate({
			rules: {
				name: {
					required: true
				},
				furigana: {
					required: true
				},
				tel: {
					required: true
				},
				email: {
					required: true
				},
				content: {
					required: true
				},
				'privacy': {
					required: true
				}
			},
			messages: {
				name: {
					required: 'お名前を入力してください。'
				},
				furigana: {
					required: 'ふりがなを入力してください。'
				},
				tel: {
					required: '電話番号を入力してください。'
				},
				email: {
					required: 'メールアドレスを入力してください。'
				},
				content: {
					required: 'お問い合わせ内容を入力してください。'
				},
				'privacy': {
					required: 'プライバシーポリシーに同意してください。'
				}
			},
			errorPlacement: function(error, element) {
				if(element.attr("name") == ("privacy")) {
					error.insertAfter(".checkbox-item");
				} else {
					error.insertAfter(element);
				}
			}
		});
	}




}});

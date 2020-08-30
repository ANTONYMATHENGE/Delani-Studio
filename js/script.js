  //Show paragraph content
  $('.des').on('click', function() {
      $('.des').slideUp('slow');
      $(desp).show(500);
      $(destext).animate({ fontWeight: 'bolder', fontSize: '30px' })

  });
  $('.dev').on('click', function() {
      $('.dev').slideUp('slow');
      $(devp).show(500);
      $(devtext).animate({ fontWeight: 'bolder', fontSize: '30px' })
  });
  $('.pro').on('click', function() {
      $('.pro').slideUp('slow');
      $(prop).show(500);
      $(protext).animate({ fontWeight: 'bolder', fontSize: '30px' })
  });

  //Hide paragraph content
  $(desp, destext).on('click', function() {
      $('.des').slideDown();
      $(desp).hide(500);
      $(destext).animate({ fontWeight: 'normal', fontSize: '16px' })
  });
  $(devp, devtext).on('click', function() {
      $('.dev').slideDown();
      $(devp).hide(500);
      $(devtext).animate({ fontWeight: 'normal', fontSize: '16px' })
  });
  $(prop, protext).on('click', function() {
      $('.pro').slideDown();
      $(prop).hide(500);
      $(protext).animate({ fontWeight: 'normal', fontSize: '16px' })
  })
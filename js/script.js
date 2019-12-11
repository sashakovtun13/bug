
  $(function(){
    $('a[href*="#"]').on('click', function (e) {
      e.preventDefault();
     
      $('html, body').animate({
        scrollTop: $($(this).attr('href')).offset().top-60
      }, 500, 'linear');
    });
    function garland() {
      nums = document.getElementById('nums_1').innerHTML
      if (nums == 1) {
        document.getElementById('garland').className = 'garland_1';
        document.getElementById('nums_1').innerHTML = '2'
      }
      if (nums == 2) {
        document.getElementById('garland').className = 'garland_2';
        document.getElementById('nums_1').innerHTML = '3'
      }
      if (nums == 3) {
        document.getElementById('garland').className = 'garland_3';
        document.getElementById('nums_1').innerHTML = '4'
      }
      if (nums == 4) {
        document.getElementById('garland').className = 'garland_4';
        document.getElementById('nums_1').innerHTML = '1'
      }
    }
    
    setInterval(function() {
      garland()
    }, 600)

    function updater(d, h, m, s) {
      // День сброса - 27 сентября 2015 года (и далее каждые три дня)
      var baseTime = new Date(2015, 8, 27);
      // Период сброса — 3 дня
      var period = 3*24*60*60*1000;
    
      function update() {
        var cur = new Date();
        // сколько осталось миллисекунд
        var diff = period - (cur - baseTime) % period;
        // сколько миллисекунд до конца секунды
        var millis = diff % 1000;
        diff = Math.floor(diff/1000);
        // сколько секунд до конца минуты
        var sec = diff % 60;
        if(sec < 10) sec = "0"+sec;
        diff = Math.floor(diff/60);
        // сколько минут до конца часа
        var min = diff % 60;
        if(min < 10) min = "0"+min;
        diff = Math.floor(diff/60);
        // сколько часов до конца дня
        var hours = diff % 24;
        if(hours < 10) hours = "0"+hours;
        var days = Math.floor(diff / 24);
        d.innerHTML = days;
        h.innerHTML = hours;
        m.innerHTML = min;
        s.innerHTML = sec;
      
        // следующий раз вызываем себя, когда закончится текущая секунда
        setTimeout(update, millis);
      }
      setTimeout(update, 0);
    }
    
    updater(document.getElementById("days"),
     document.getElementById("hours"), document.getElementById("minutes"),
     document.getElementById("seconds"));
    
  });


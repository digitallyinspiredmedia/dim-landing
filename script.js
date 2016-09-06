
/* Home Section Logo Animation  */

var tmax_optionsGlobal = {
  delay: 0.25,
  repeat: 0,
  repeatDelay: 0.25,
  yoyo: false
};


CSSPlugin.useSVGTransformAttr = true;

var stagger_opts_from = {
  opacity: 0,
  scale: 0,
  force3D: true
};

var stagger_opts_to = {
  opacity: 1,
  scale: 1,
  ease: Elastic.easeInOut,
  force3D: true
};

var tl          = new TimelineMax(tmax_optionsGlobal),
    path        = $('svg.polylion > g polygon'),
    stagger_val = 0.0125,
    duration    = 2.25;

tl.staggerFromTo(path, duration, stagger_opts_from, stagger_opts_to, stagger_val, 0);


/* Type Speed */
var txt=$("#texthere").attr("data-text");
var txt1='';
for(var i=0;i<txt.length;i++){
  txt1+="<span class='slide-text-effect'>"+txt[i]+"</span>";
}

document.getElementById("texthere").innerHTML=txt1;
$(document).ready(function(){
  function printText(){
    $("span.slide-text-effect").each(function(n){
      $(this).delay(30*n).animate({opacity:1, top:"0px"},
      {duration: 'fast',
      easing: 'easeOutSine'});
    });
  }
  setTimeout(printText, 0);
});


/* Timer */
function DaysInMonth(Y, M) {
    with(new Date(Y, M, 1, 12)) {
        setDate(0);
        return getDate();
    }
}
function getTimeRemaining(endtime) {
    var t = Date.parse(new Date()) - Date.parse(endtime);
    var seconds = Math.floor((t / 1000) % 60);
    var minutes = Math.floor((t / 1000 / 60) % 60);
    var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
    var days = Math.floor(t / (1000 * 60 * 60 * 24) % 365.25 - 2);
    var d = new Date();
    var od = new Date(endtime);
    var ndate = d.getDate();
    var odate = od.getDate();
    var nmonth = d.getMonth();
    var omonth = od.getMonth();
    var months = d.getMonth() - od.getMonth();
    var years = d.getFullYear() - od.getFullYear();
    if (ndate < odate) {
        months -= 1;
        ndate += DaysInMonth(od.getFullYear(), omonth);
    }
    var days = ndate - odate;
    if (nmonth < omonth) years -= 1;
    return {
        'total': t,
        'years': years,
        'months': months,
        'days': days,
        'hours': hours,
        'minutes': minutes,
        'seconds': seconds
    };
}
function initializeClock(id, endtime) {
    var clock = document.getElementById(id);
    var yearsSpan = clock.querySelector('.years');
    var monthsSpan = clock.querySelector('.months');
    var daysSpan = clock.querySelector('.days');
    var hoursSpan = clock.querySelector('.hours');
    var minutesSpan = clock.querySelector('.minutes');
    var secondsSpan = clock.querySelector('.seconds');
    function updateClock() {
        var t = getTimeRemaining(endtime);
        yearsSpan.innerHTML = t.years;
        monthsSpan.innerHTML = ('0' + t.months).slice(-2);
        daysSpan.innerHTML = ('0' + t.days).slice(-2);
        hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
        minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
        secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);
        if (t.total <= 0) {
            clearInterval(timeinterval);
        }
    }
    updateClock();
    var timeinterval = setInterval(updateClock, 1000);
}
var deadline = 'May 8 2012';
initializeClock('clockdiv', deadline)

/* read more */
$('.read-more-content').addClass('hidden');
  // Set up the toggle.
  $('.read-more-toggle').on('click', function() {
    $(this).next('.read-more-content').toggleClass('hidden');
    $('.read-more-toggle').toggleClass('hidden');
  });

/* brand we work with or client section */


/* carrers */
$(document).ready(function() {
    $("#steps-menu a").click(function(event) {
        // Replaces main content
        event.preventDefault();
        $(this).parent().addClass("is-active");
        $(this).parent().siblings().removeClass("is-active");
        var step = $(this).attr("href");
        $(".step-content").not(step).css("display", "none");
        $(step).fadeToggle();
        // Rotates the wheel
        $("#steps-menu").removeClass();
        var stepClass = step.charAt(6);
        $("#steps-menu").addClass("step-" + stepClass);
      
    });
});

/* contact us tab */
$('[data-tab]').on('click', function (e) {
    $(this).addClass('active').siblings('[data-tab]').removeClass('active')
    $(this).siblings('[data-content=' + $(this).data('tab') + ']').addClass('active').siblings('[data-content]').removeClass('active')
    e.preventDefault()
  })

/* form  */


$(".mat-input").focus(function(){
  $(this).parent().addClass("is-active is-completed");
});

$(".mat-input").focusout(function(){
  if($(this).val() === "")
    $(this).parent().removeClass("is-completed");
  $(this).parent().removeClass("is-active");
})

/* validation */
$.validator.methods.email = function( value, element ) {
  return this.optional( element ) || /[a-z]+@[a-z]+\.[a-z]+/.test( value );
}
function evaluate(){
    var item = $(this);
    var relatedItem = $("#" + item.attr("data-related-item")).parent();
   
    if(item.is(":checked")){
        relatedItem.fadeIn();
    }else{
        relatedItem.fadeOut();   
    }
}
$('input[type="checkbox"]').click(evaluate).each(evaluate);

/* form */
 $("#ajax-contact").validate({
  //rules
  rules: {
        name: "required",
        email: {
          required: true,
          email: true
        },
        mobile: {
                minlength: 10,
                maxlength: 10,
                required: true,
                digits: true
            },
        organization: "required",
        servicetype: {
                required: true
            },
         
        message: "required"
      },
       messages: {
            name: "Please enter your name",
            email: {
                required: "We need your email address to contact you",
                email: "Your email address must be in the format of name@domain.com"
            },
            mobile: {
                required: "Please enter your mobile",
                minlength: "Please enter 10 digit phone number",
                maxlength: "Please enter 10 digit phone number"
            },
            organization: {
                required: "Please enter your organization"
            },
            servicetype: "Please enter your services",
            message: "Please accept our message"
        },
        errorLabelContainer: "#messageBox",
        wrapper: "li",

      // specifying a submitHandler prevents the default submit, good for the demo
      submitHandler: function(form) {
        $.ajax({
            url: form.action,
            type: form.method,
            data: $(form).serialize(),
            success: function(response) {
                $('#answers').html(response);
                $("#ajax-contact").remove();
            }            
        });
      },
      // set this class to error-labels to indicate valid fields
      success: function(label) {
        // set &nbsp; as text for IE
        $('#messageBox li label').addClass("checked");
      },
      highlight: function(element, errorClass) {
        $(element).parent().next().find("." + errorClass).removeClass("checked");
      }
 });

/* mobile section enable */
if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
  // tasks to do if it is a Mobile Device
  $( ".trig-mobile" ).html(function() {
  return '<div class="mmobile"><a href="tel:919840811180"><span class="callme">Call Now </span></a></div><div class="memail"><a href="#contact"><span class="mailme">Enquire</span></a></div>';
});
 
}

/* page lift click / scroll to top */
 

/* click animation flow */
/*
jQuery(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});
*/
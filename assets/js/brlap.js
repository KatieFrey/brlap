$(function(){

    $(".type-it").typed({
      strings: ["We can help you look forward to mornings.",
        "or escape the office..",
        "or leave the office behind..",
        "Come experience adventure in every cup."],
        // Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
        stringsElement: null,
        // typing speed
        typeSpeed: 50,
        // time before typing starts
        startDelay: 5000,
        // backspacing speed
        backSpeed: 10,
        // shuffle the strings
        shuffle: false,
        // time before backspacing
        backDelay: 1000,
        // loop
        loop: false,
        // false = infinite
        loopCount: false,
        // show cursor
        showCursor: true,
        // character for cursor
        cursorChar: "|",
        // attribute to type (null == text)
        attr: null,
        // either html or text
        contentType: 'html',
        // call when done callback function
        callback: function() {
          setTimeout(function(){
            $("#call-to-action").
            addClass('animated bounce');
          },6000);
        },
        // starting callback function before each string
        preStringTyped: function() {},
        //callback for every typed string
        onStringTyped: function() {},
        // callback for reset
        resetCallback: function() {}
    });


});
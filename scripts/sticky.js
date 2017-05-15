runOnLoad(function(){
  var nav =  document.querySelector('nav');

    var headerBlock = (document.getElementById("topRow").offsetHeight) + (document.getElementById("headerRow").offsetHeight);

    window.addEventListener('scroll', function(){
      nav.classList[
        (window.pageYOffset > headerBlock? 'add' : 'remove')]('scrolled');
  });
});

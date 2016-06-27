// TEXT THAT IS GREYED OUT INDICATED A COMMENT IN THE CODE. PLEASE READ THE COMMENTS AS, IN THIS TEMPLATE, THEY ARE NOTES TO YOU ABOUT HOW TO ALTER THIS /PEOPLE CARD IN A WAY THAT WILL REMAIN COMPATIBLE WITH THE COURSE WEBSITE! 

// Add your Javascript effects here.


// Below this line, you must change the id below ('#kanyewest') to reflect the id you created in the html panel for your partner ('#yourpartner')
window.addEventListener('load', function() {
  var myCard = document.querySelector('#cpassehl');
  var flipButtons = Array.prototype.slice.call(myCard.querySelectorAll('i.flip'));
  flipButtons.forEach(function(button) {
    button.addEventListener('click', function() {
      myCard.classList.toggle('flipped');
    });
  });
});
document.addEventListener('DOMContentLoaded', function() {
    const photo = document.getElementById('profilePhoto');
    
    photo.addEventListener('click', function() {
        photo.classList.toggle('square');
    });
});


document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('showPhoto1').addEventListener('click', function() {
      var img = document.getElementById('projectPhoto1');
      if (img.style.display === 'none') {
          img.style.display = 'block';
      } else {
          img.style.display = 'none';
      }
  });

  document.getElementById('showPhoto2').addEventListener('click', function() {
      var img = document.getElementById('projectPhoto2');
      if (img.style.display === 'none') {
          img.style.display = 'block';
      } else {
          img.style.display = 'none';
      }
  });
});


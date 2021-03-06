$(document).ready(function() {
  photoAlbum.init();
})

var photoAlbum = {
  init: function() {
    photoAlbum.styling();
    photoAlbum.events();
  },
  //making the cover photos appear on the homepage
  styling: function() {
    var albumsStr = '';
    albums.forEach(function (item, idx, arr) {
      albumsStr += photoAlbum.htmlGenerator(photoTemplate.coverphotos,item);
    })
    $('.albums').html(albumsStr); // add album

  },
  events: function () {
    //clicking on the individual item photos
    $('.albums').on('click', '.album', function (event) {
        console.log($(this).data('id'));
        var albumId = $(this).data('id');
        var selectedAlbum = albums.filter(function (item, idx, arr) {
          return item.id === albumId;
        })
      var photosStr = '';
      selectedAlbum[0].pictures.forEach(function (item, idx, arr) {
        photosStr += photoAlbum.htmlGenerator(photoTemplate.albumphotos,item);
      })

      $('.albums').addClass('hidden').removeClass('active');
      $('.albumDetail').html(photosStr).removeClass('hidden').addClass('active');
    })
    //sidebar list items click events
    $('li').on('click', function(event) {
      event.preventDefault();
      var clickedThing = $(this).text();
      $('.albums').addClass('hidden');

      var correctAlbum = albums.filter(function(element) {
        return clickedThing.toLowerCase() === element.id
      })

      var albumsStr = '';
      correctAlbum[0].pictures.forEach(function (item, idx, arr) {
        albumsStr += photoAlbum.htmlGenerator(photoTemplate.albumphotos,item);

    })
    $('.albumDetail').html(albumsStr);
  })
  //when you click on the title of the page it takes you back to the main albums list aka homepage
  $('h2').on('click', function(event) {
      event.preventDefault();
      console.log(this);
      $('.albums').removeClass('hidden');
      $('.sidebar').addClass('hidden');
      $('.albumDetail').addClass('hidden')
  })
////showing the sidebar when you click on the homepage images///
  $('.albums').on('click', function(event){
    event.preventDefault();
    console.log(this);
    $('.sidebar').removeClass('hidden');
      })
//When you click a cover photo (homepage photo) the homepage photos hide and the album specific photos show
  $('.cover').on('click', function(event){
    event.preventDefault();
    console.log(this);
    $('.cover').addClass('hidden');
    $('.albumDetail').removeClass('hidden')
  })
  //enlarging the photos
  //lines below remove sidebar, header, h2, captions as of sunday 6/5
  $('.albumDetail').val('.img').on('click', function(event){
  event.preventDefault();
  var clickedThing = $(this).text();
    $('.sidebar').addClass('hidden');
    $('h2').addClass('hidden');
    $('h3').addClass('hidden');
    $('.button').removeClass('hidden');
    $('header').addClass('hidden');
    $('.images').css("padding-top",'15px');
    $('.images').css("margin-left",'0px');
  });
/// using location icon to direct back to homepage
  $('.button').on('click', function(event) {
    event.preventDefault();
    console.log(this);
    $('.albums').removeClass('hidden');
    $('.sidebar').addClass('hidden');
    $('.albumDetail').addClass('hidden');
    $('header').addClass('active').removeClass('hidden');
    $('.homebutton').removeClass('hidden');
    $('.images').css("padding-top", '80px');
    // $('.title').removeClass('hidden').addClass('active');
  })
  },
////nathans code
  templification: function(template) {
  return _.template(template);
},
///nathans code
  htmlGenerator: function(template,data) {
  var tmpl = photoAlbum.templification(template);
  return tmpl(data);
}
}


//////trying to select one photo and enlarge it. right now it hides the cover photos, but does not hide the 6 album photos

// $('.albumDetail').on('click', '.photo', function(event){
//   event.preventDefault();
//   var photoId = $(this).data('id');
//   var clickedPhoto = albums.filter(function (item, idx, arr) {
//     return item.photo === photoId;
//   })
//
//   var chosenBigPic = '';
//   clickedPhoto[0].pictures.forEach(function(item, idx, arr){
//     chosenBigPic += photoAlbum.htmlGenerator(photoTemplate.albumphotos,item)
//   });
//   $('.photoDetail').html(chosenBigPic);
//   $('.albumDetail, img').addClass('hidden');
//   $('.albums').addClass('hidden');
//    $('.albums, img').not(this).removeClass('active');
//   // $(this).removeClass('hidden');
// })

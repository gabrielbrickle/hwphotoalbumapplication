//making the HOMEPAGE photos appear
$(document).ready(function () {
  var albumsStr = '';
  albums.forEach(function (item, idx, arr) {
    albumsStr += `<div class="album" data-id="${item.id}">
                  <img src="${item.cover}" alt="">
                  <h3>${item.title}</h3>
                </div>`;
  })

  $('.albums').html(albumsStr); // add albums

  $('.albums').on('click', '.album', function (event) {
      console.log($(this).data('id'));
      var albumId = $(this).data('id');
      var selectedAlbum = albums.filter(function (item, idx, arr) {
        return item.id === albumId;
      })
      console.log("SELECTED ALBUM", selectedAlbum);
      var photosStr = '';
      selectedAlbum[0].pictures.forEach(function (item, idx, arr) {
        photosStr += `<div class="photo">
                        <h3>${item.caption}</h3>
                        <img src="${item.photo}" alt="">
                      </div>`
      });
      console.log("STRINGPHOTO", photosStr)
      // $('.albumDetail').addClass('active');
      $('.albums').addClass('hidden').removeClass('active');
      $('.albumDetail').html(photosStr).removeClass('hidden').addClass('active');

  })

  //LIST ITEMS

  $('li').on('click', function(event) {
    event.preventDefault();
    var clickedThing = $(this).text();
    $('.albums').addClass('hidden');

    var correctAlbum = albums.filter(function(element) {
      return clickedThing.toLowerCase() === element.id
    })

    var albumsStr = '';
    correctAlbum[0].pictures.forEach(function (item, idx, arr) {
      albumsStr += `<div class="album" ">
                    <img src="${item.photo}" alt="">
                    <h3>${item.caption}</h3>
                  </div>`;
    })
    $('.albumDetail').html(albumsStr);

})

  //when you click on the title of the page it takes you back to the main albums list

  $('h2').on('click', function(event) {
    event.preventDefault();
    console.log(this);
    $('.albums').removeClass('hidden');
    $('.sidebar').addClass('hidden');
    $('.albumDetail').addClass('hidden')
  })


  $('.albums').on('click', function(event){
    event.preventDefault();
    console.log(this);
    $('.sidebar').removeClass('hidden');

  })

  //need cover and li to function the same. on click hide main photos and active other 6 photos

$('.cover').on('click', function(event){
  event.preventDefault();
  console.log(this);
  $('.cover').addClass('hidden');
  $('.albumDetail').removeClass('hidden')
})

  //enlarging the photos

$('.albumDetail').val('.img').on('click', function(event){
event.preventDefault();
var clickedThing = $(this).text();
  $('.sidebar').addClass('hidden');
    // $('.header').removeClass('active');
    // $('.albumDetail').removeClass('active');
})

var correctPhoto = albums.filter(function(element) {
  return correctPhoto === element.pictures
})

var albumsStr = '';
correctPhoto[0].pictures.forEach(function (item, idx, arr) {
  albumsStr += `<div class="album" ">
                <img src="${item.photo}" alt="">

              </div>`;
})

$('.albumDetail').html(albumsStr);




}) //Closing Tag

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

////Clicking on homepage buttons results in 6 data photos for specific city

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
    // $('h3').addClass('hidden');
    // $('.albumDetail').css('display', 'flex');
    // $('.albumDetail').css("margin-left", "0px"); //need images to be same css as other pages
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
})

///Attempt to only show one large image
///Attemp #1
// var albumsStr = '';
// albums.forEach(function (item, idx, arr) {
//   albumsStr += `<div class=".photoDetail" >
//                 <img src="${item.photo}" alt="">
//                 <h3>${item.caption}</h3>
//               </div>`;
// })
// console.log(this);
// $('.photoDetail').html(albumsStr);
// $('.albums').on('click', '.album', function (event) {
//     console.log($(this).data('id'));
//Attempt #2
// $('img').on('click', function (event) {
//     console.log($(this).data('id'));
//     var albumIds = $(this).data('id');
//     var selectedAlbumPic = albums.filter(function (item, idx, arr) {
//       return item.id === albumIds;
//     })
//     console.log("SELECTED PHOTO", selectedAlbumPic);
//     var photosString = '';
//     selectedAlbumPic[0].pictures.forEach(function (item, idx, arr) {
//       photosString += `<div class="photo">
//                       <img src="${item.photo}" alt="">
//                     </div>`
//     });
//     // $('.albumDetail').addClass('active');
//     $('.albums').addClass('hidden').removeClass('active');
//     $('.albumDetail').html(photosString).removeClass('hidden').addClass('active');
//
//   })

}) //Closing Tag

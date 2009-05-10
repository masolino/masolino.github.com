jQuery(function(){
  jQuery(".flickr").flickr({
    api_key: "bbf6a46e7e65a5022da9cae9355ed1a3",
    type: 'search',
    user_id: '69119358@N00',
    thumb_size: 's',
    size: 'b',
    per_page: 12
  });
  jQuery(".people").flickr({
    api_key: "bbf6a46e7e65a5022da9cae9355ed1a3",
    type: 'photoset',
    photoset_id: '72157613427796892',
    thumb_size: 's',
    size: 'b'
  });
  jQuery(".places").flickr({
    api_key: "bbf6a46e7e65a5022da9cae9355ed1a3",
    type: 'photoset',
    photoset_id: '72157617650746490',
    thumb_size: 's',
    size: 'b'
  });
  jQuery(".things").flickr({
    api_key: "bbf6a46e7e65a5022da9cae9355ed1a3",
    type: 'photoset',
    photoset_id: '72157616886156036',
    thumb_size: 's',
    size: 'b'
  });
});
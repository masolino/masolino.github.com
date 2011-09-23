jQuery(function(){
  jQuery(".flickr").flickr({
    api_key: "bbf6a46e7e65a5022da9cae9355ed1a3",
    type: 'search',
    user_id: '69119358@N00',
    thumb_size: 's',
    size: 'b',
    per_page: 12,
    sort: "date-posted-desc"
  });
  jQuery(".people").flickr({
    api_key: "bbf6a46e7e65a5022da9cae9355ed1a3",
    type: 'photoset',
    photoset_id: '72157627733696092',
    thumb_size: 's',
    per_page: 12
    // sort: "date-posted-desc"
  });
  jQuery(".places").flickr({
    api_key: "bbf6a46e7e65a5022da9cae9355ed1a3",
    type: 'photoset',
    photoset_id: '72157627609829199',
    thumb_size: 's',
    per_page: 12
    // sort: "date-posted-desc"
  });
  jQuery(".things").flickr({
    api_key: "bbf6a46e7e65a5022da9cae9355ed1a3",
    type: 'photoset',
    photoset_id: '72157627609857411',
    thumb_size: 's',
    per_page: 12
    // sort: "date-posted-desc"
  });
});

const INITIAL_STATE = {

    sections: [{
                
        title: 'New-Drops',
        imageUrl: 'images/directory-img/cash.jpg',
        id: 1,
        linkUrl: 'shop/hats'

        
      },
      {
        title: 'Curated',
        imageUrl: 'images/directory-img/pink-island.jpg',
        id: 2,
        linkUrl: 'shop/jackets'
      },
      {
        title: 'Verified',
        imageUrl: 'images/directory-img/flash-head.jpg',
        id: 3,
        linkUrl: 'shop/sneakers'
      },
      {
        title: 'paintings by Michael Kegon',
        imageUrl: 'images/directory-img/red-Astro.jpg',
        size: 'large',
        id: 4,
        linkUrl: 'shop/womens'
      },
      {
        title: 'New Collection from Leonard Kardi',
        imageUrl: 'images/directory-img/2-Ladys.jpg',
        size: 'large',
        id: 5,
        linkUrl: 'shop/mens'
      }]

}

const directoryReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        default:
            return state;
    }
};

export default directoryReducer;
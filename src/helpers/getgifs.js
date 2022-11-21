export const getgifs =async(category) =>{

    const url=`https://api.giphy.com/v1/gifs/search?api_key=JAYAZ8OrWI8zI7x54YQ8oLu9b0hTpq28&q=${category}&limit=10`;

    const resp= await fetch(url);
     
    const {data}= await resp.json();

    const gifs= data.map(img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url

    }))
    
    return gifs;
}
export  const getGifs = async (category,cant)=>{
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=${cant}&api_key=ajAn7erWAKaCLBNJ4ik7Z80eNJl2gvuw`;
    const resp = await fetch(url);
    const {data} = await resp.json();

    const gifs = data.map((img)=>{
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    })
    return gifs;
}
 

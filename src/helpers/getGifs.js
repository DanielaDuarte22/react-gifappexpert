export const getGifs =async (category)=>{
         
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&api_key=a6FIV4okfseJnL4K3cGE6tNqiYt8N6wg`;
    const resp = await fetch (url);
    const {data}  = await resp.json();

    const gifs = data.map(img =>{
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    })

    return gifs;

}

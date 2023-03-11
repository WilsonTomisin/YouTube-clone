import axios from "axios";

const dataUrl = 'https://youtube-v31.p.rapidapi.com/captions'
const options = {
  params: {part: 'snippet', videoId: 'M7FIvfx5J10'},
  headers: {
    'X-RapidAPI-Key': process.env.REACT_RAPID_API_KEY,
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});

export const FetchData = async(url)=>{
    await axios.get(`${dataUrl}/${url}`)
}
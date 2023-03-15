import axios from "axios";

const dataUrl = 'https://youtube-v31.p.rapidapi.com'


const options = {
  params: {
    
    part: 'snippet,id',
    maxResults: '50',
    
  },
  headers: {
    'X-RapidAPI-Key': '175522c218msh23f453fa53cebaep104b68jsn5acb452ab8ba',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};



export const FetchData = async(url)=>{
    // destructring the data instead of response.data 
    try {
      const {data} = await axios.get(`${dataUrl}/${url}`,options)
      return data
    } catch (error) {
      return error
    }
}
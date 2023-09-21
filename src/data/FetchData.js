
export const options = {
	method: 'POST',
	headers: {
		'content-type': 'application/x-www-form-urlencoded',
		'X-RapidAPI-Key': '583286d39emshe1fa0840f04dd4ep1522d4jsnda2a47dab9d6',
		'X-RapidAPI-Host': 'fashion4.p.rapidapi.com'
	},
	body: new URLSearchParams({
		url: 'https://storage.googleapis.com/api4ai-static/samples/fashion-1.jpg'
	})
};
export const FetchDate =async(url,options)=>{
    const response=await fetch(url,options);
    const data =await response.json();
    return data;
}

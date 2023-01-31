i
// const Box = (item) => {
//     const [displayMovie, setDisplaymovie] = useState([])
//     setDisplaymovie(item)
//     console.log(item)
// }    

// const nowplayingMovie
// const topratedMovie
// const upcomingMovie




export const getPopularMovie = () => {

    
    axios.get(`${BASE_POPULAR_URL}${API_KEY}`)
        .then((response) => {
            const ListMovie = response.data
            console.log('popular',ListMovie)
            return ListMovie
        })
        .catch(error => console.log('HAHA',error))
}
export const getNowplayingMovie = () => {
    axios.get(`${BASE_NOWPLAYING_URL}${API_KEY}`)
        .then((response) => {
            const nowplayingMovie = response.data
            console.log('now',nowplayingMovie)
        })
        .catch(error => console.log('mama',error))
}
export const getTopratedMovie = () => {
    axios.get(`${BASE_TOPRATED_URL}${API_KEY}`)
        .then((response) => {
            const topratedMovie = response.data
            console.log('top',topratedMovie)
        })
        .catch(error => console.log('tata',error))
}
export const getUpcomingMovie = () => {
    axios.get(`${BASE_UPCOMING_URL}${API_KEY}`)
        .then((response) => {
            const upcomingMovie = response.data
            console.log('upcoming',upcomingMovie)
        })
        .catch(error => console.log('tot',error))
}






// export const getMovie = async movie => {
//     const url = BASE_URL
 
//     try{
//         const params = {
//             q: movie,
//             app_key: APP_KEY,
//             // field: ['uri', 'image', 'label', 'source']
//         }

//         const movieAxios = axios.create({
//             paramsSerializer: params => qs.stringify(params, {arrayFormat: 'repeat'})
//         })

//         const response = await movieAxios.get(url, { params })

//         console.log('RESPONSE', response.data.hits)

//         const movies = response.data.hits

//         return movies
//     } catch (error) {
//         throw error    
//     }
// }


// axios({
//     method:'get',
//     url: `${API_URL}`,
// }).then((response) => {
//     console.log(response.data);
// })

// const RequestTest = () => {
//     const request = fetch(`${API_URL}`, {
//         method:'POST'
//     })
// }
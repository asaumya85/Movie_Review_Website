import axios from 'axios';

// export const getMovieListAPI = async () => {
//     try {
//         let result = await axios.get('http://localhost:8094/api/v1/movies');
//         return result.data;
//     } catch (error) {
//         console.log(error);
//     }
// }
export default axios.create({
    baseURL:'http://localhost:8094/',
    headers: {"ngrok-skip-browser-warning": "true"}
});




// import axios from 'axios';

// export const getMovieListAPI = async () => {
//     try {
//         let result = await axios.get('http://localhost:8094/api/v1/movies');
//         return result.data;
//     } catch (error) {
//         console.log(error);
//     }
// }
// export const getSingleMovie = async()=>{
//     try {
//         let result = await axios.get('http://localhost:8094/api/v1/movies');
//         return result.data;
//     } catch (error) {
//         console.log(error);
//     }
// }
//  export default  axios;
// //     baseURL: 'http://localhost:8094/api/v1/movies',
// //     headers: { "ngrok-skip-browser-warning": "true" }
// // });




// // // we can configure and export the axios object that we will use to make https reqeust to the relevant remote API through this code
// // // base url provide base address of endpoints that are client react app will be calling.By axios we don't need to add base add again with each https req just add specific path for each api
// // // header are very imp because during development phase , the technolgy that remote machine is using to expose the relevant api endpoints called ngrok
// // //  we include it because http req will not be blocked  it is know as CROSS ORIGIN RESOURCE SHARING.. the server code hold to overcome the restriction by cores
// // // this incuded into https request header so overcome to restrict imposed by IE
import axios from 'axios';

// URL FILMES EM CARTAZ

// https://api.themoviedb.org/3/

// movie/now_playing?api_key=7f41b502783585a964223a61da8786cb&language=pt-BR&page=1

export const key = '7f41b502783585a964223a61da8786cb'

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3'
})

export default api;
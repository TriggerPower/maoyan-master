import axios from 'axios'

const baseUrl = 'https://www.easy-mock.com/mock/5c7a7ecea5251c27622e0f27'

function getMovieList () {
  return axios.get(baseUrl + '/contentdata', {}).then((res) => {
    return Promise.resolve(res.data)
  })
}

function getCinema () {
  return axios.get(baseUrl + '/cinemadata', {}).then((res) => {
    return Promise.resolve(res.data)
  })
}

function getCity () {
  return axios.get(baseUrl + '/citydata', {}).then((res)=>{
    return Promise.resolve(res.data);
  })
}

export {getMovieList, getCinema, getCity}
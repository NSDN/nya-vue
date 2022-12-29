import axios from 'axios'

export const http = axios.create({
  baseURL: 'http://localhost:10124',

  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
})

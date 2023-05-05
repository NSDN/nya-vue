import axios from 'axios'

export const http = axios.create({
  baseURL: 'http://localhost:10127',

  headers: {
    'Content-Type': 'application/json',
  },
})

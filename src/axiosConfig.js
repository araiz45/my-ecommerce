import axios from 'axios'
export const instance = axios.create({
  baseURL: 'http://localhost:1337',
  headers: {
    "Content-Type": "application/json",
    "Authorization": "Bearer 56384a11051648ed6fb8615a2100395cf1140b5c72cd24f5f9cd48a30b22090e69eacde21684ba0c0c4486e4e61b9a358ea372e27ae2ea4b7a90eec4bef5b6cca0b841afb8b7abf3ffdee8fbbdc1494543226ee0daf9534b6a69b1a1071c1478d7c1230b431b1ed807b406a6bf5e88e6142e7bfad972328744a47e5eb4c4e765"
  }
})

export const BASEURL = 'http://localhost:1337'
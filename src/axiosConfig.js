import axios from 'axios'
export const instance = axios.create({
  baseURL: 'https://injir-2dda26730101.herokuapp.com',
  headers: {
    "Content-Type": "application/json",
    "Authorization": "Bearer c314766950963203b6187da7e4db7a571b2e8155005e4f01b10d3c05a32306538ebcb480f2935066199481fc6abcfbc716080e9bff41fa6c9fdfcc6afd5ce922714cb1150748c8a5db8f6030c5fed9f8e5d9e79b5c921cfbbc5b101cac676f78483fb335f1b1052c52a544e270712ee9dd9cffd13aeb979c78f195576e840328"
  }
})

export const BASEURL = 'https://injir-2dda26730101.herokuapp.com'
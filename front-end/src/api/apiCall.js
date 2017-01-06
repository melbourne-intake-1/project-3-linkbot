import axios from 'axios';

export default function apiGet(path, options) {
  //alert('sup')
  return axios.get("http://localhost:3000/api/posts")
    .then(res => res.json())
}
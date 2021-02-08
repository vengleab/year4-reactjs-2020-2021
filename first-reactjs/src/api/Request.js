import axios from 'axios';


export class Request {
  constructor(endpoint) {
    this.endpoint = endpoint;
  }

  async get(url){
    const res = await axios.get(url);
    return res.data
  }

  async post(url, payload, config) {
    let data = [url, payload]
    if(config !=={}){
      data = [...data, config];
    }
    const response = await axios.post(...data);
    return response.data;
  }

  patch(url, payload, config) {
    if(config ==={})
      return axios.patch(url, payload)
    else
      return axios.patch(url, payload, config)
  }

  // resource
  getAll(){
    return this.get(this.endpoint);
  }

  findById(id){
    return this.get(`${this.endpoint}/${id}`)
  }

  create(data) {
    return this.post(this.endpoint, data);
  }

  update(id, data) {}

  delete(id){}

}

export default new Request();
import axios from "axios"

export default{
  list(){
    return axios.get('http://localhost:3306/api/sensors');
  },
  oneSensor(){
    return axios.get('http://localhost:3306/api/sensors/JHGFe-dsjfhg-ze-fdhg')
  }
}
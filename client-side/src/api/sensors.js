import axios from "axios"

export default{
  list(){
    return axios.get('http://localhost:3306/api/sensors');
  },
  oneSensor(macAddress){
    return axios.get('http://localhost:3306/api/sensors/'+macAddress)
  }
}
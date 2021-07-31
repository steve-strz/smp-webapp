import axios from "axios"

export default{
  powerOn(){
    return axios.get('http://localhost:3306/api/bluetooth/on');
  },
  powerOff(){
    return axios.get('http://localhost:3306/api/bluetooth/off');
  },
  getState(){
    return axios.get('http://localhost:3306/api/bluetooth/state');
  },
  removeAll(){
    return axios.get('http://localhost:3306/api/bluetooth/removeall');
  },
  scanDevices(){
    return axios.get('http://localhost:3306/api/bluetooth/scan');
  },
  pairDevice(mac_address){
    return axios.get('http://localhost:3306/api/bluetooth/pair/' + mac_address);
  },
}
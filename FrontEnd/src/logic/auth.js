import axios from "axios";
import Cookies from "js-cookie";

const ENDPOINT_PATH = "http://localhost:3001";

export default {
  setUserLogged(userLogged) {
    Cookies.set("userLogged", userLogged);
  },
  getUserLogged() {
    return Cookies.get("userLogged");
  },
  register(username,name,email,password,Address,AddressNumber,Movil,acceso) {
    const user = {username,name,email,password,Address,AddressNumber,Movil,acceso};
    return axios.post(ENDPOINT_PATH + "/auth/local/register", user);
  },
  login(identifier, password) {
    const user = {identifier, password };
    return axios.post(ENDPOINT_PATH + "/auth/local", user);
  },
  deleteUserLogged() {
    Cookies.remove('userLogged');
  },
  add(precio,nombre,ProductoID){
    const products = {precio,nombre,ProductoID};
    return axios.post(ENDPOINT_PATH + "/products", products);
  },
  orders(cartDetail,cartTotal){
    const orders = {cartDetail,cartTotal};
    return axios.post(ENDPOINT_PATH + "/orders", orders);
  }
  
};
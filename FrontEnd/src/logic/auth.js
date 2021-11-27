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
  register(username,name,email,password,Address,AddressNumber,Movil) {
    const user = {username,name,email,password,Address,AddressNumber,Movil};
    return axios.post(ENDPOINT_PATH + "/auth/local/register", user);
  },
  login(email, password) {
    const user = { email, password };
    return axios.post(ENDPOINT_PATH + "/auth/local", user);
  },
  deleteUserLogged() {
    Cookies.remove('userLogged');
  }
};
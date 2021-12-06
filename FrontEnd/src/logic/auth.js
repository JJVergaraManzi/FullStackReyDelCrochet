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
  login(identifier, password) {
    const user = {identifier, password };
    return axios.post(ENDPOINT_PATH + "/auth/local", user);
  },
  deleteUserLogged() {
    Cookies.remove('userLogged');
  },

  add(precio,nombre,description,stock,ProductoID,categories,img){
    const products = {precio,nombre,description,stock,ProductoID,categories,img};
    return axios.post(ENDPOINT_PATH + "/products", products);
  },
  addCategoria(categories){
    const category ={categories};
    return axios.post(ENDPOINT_PATH + "/categories/find",category)

  },
  borrar(ProductoID){
    const products = {ProductoID};
    return axios.delete(ENDPOINT_PATH + "/products/" + products.ProductoID );
  },
  editar(precio,nombre,description,stock,ProductoID,categories,img){
    const products = {precio,nombre,description,stock,ProductoID,categories,img};
    return axios.put(ENDPOINT_PATH + "/products/" + products.ProductoID + "/", products);
  },
 

  
};
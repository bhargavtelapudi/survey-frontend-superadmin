import http from "../http-common";
const accessToken = sessionStorage.getItem("token");

class UserDataService {
  createUser(formData) {
    return http.post("/user/signup", formData);
  }
  getAllUsers() {
    return http.get("/user/alladmins",{
      headers: {
        'x-access-token': accessToken
      }
    });
  }
}
export default new UserDataService();
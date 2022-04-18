import http from "../http-common";

class DataService {
    getAll() {
        return http.get("/bands");
    }
    create(band) {
        return http.post("/bands", band);
    }
}
export default new DataService();
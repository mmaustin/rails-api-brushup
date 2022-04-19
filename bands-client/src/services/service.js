import http from "../http-common";

class DataService {
    getAll() {
        return http.get("/bands");
    }
    create(band) {
        return http.post("/bands", band);
    }
    get(id) {
        return http.get(`/bands/${id}`);
    }
}
export default new DataService();
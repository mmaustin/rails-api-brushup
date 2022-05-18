import http from "../http-common";

class DataService {
    getAll() {
        return http.get("/admins");
    }
    create(admin) {
        return http.post("/admins", admin);
    }
    get(id) {
        return http.get(`/admins/${id}`);
    }
    delete(id) {
        return http.delete(`/admins/${id}`);
    }
    update(id, data) {
        return http.put(`/admins/${id}`, data);
    }
}
export default new DataService();
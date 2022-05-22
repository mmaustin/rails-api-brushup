import http from "../http-common";

class DataService {
    getAll() {
        return http.get("/admins");
    }
    create(admin) {
        return http.post("/admins", admin);
    }
    get() {
        return http.get(`/me`);
    }
    delete(id) {
        return http.delete(`/admins/${id}`);
    }
    update(id, data) {
        return http.put(`/admins/${id}`, data);
    }
}
export default new DataService();
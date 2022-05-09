import http from "../http-common";

class DataServiceP {
    getAll() {
        return http.get("/players");
    }
    create(player) {
        return http.post("/players", player);
    }
}
export default new DataServiceP();
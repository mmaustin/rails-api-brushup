import http from "../http-common";

class DataServiceP {
    create(player) {
        return http.post("/players", player);
    }
}
export default new DataServiceP();
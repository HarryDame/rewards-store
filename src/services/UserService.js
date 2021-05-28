class UserService {
    static async getUserInfo() {
        const headers = {
            "Content-Type": "application/json",
            "Accept": "application/json",
            Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGFkOWI2NDliNzc4MTAwMjA5YzVhYTQiLCJpYXQiOjE2MjE5OTAyNDR9.5YW-aBwRpJZS88xYCvlvTv1Ri5x_LphIw7a5NvcC9GA"
        }

        // const headers = { headers: this.headers }
        const url = "https://coding-challenge-api.aerolab.co/user/me";

        try {
            let resp = await fetch(url, { headers })

            if (resp.status !== 200) {
                throw new Error(resp);
            }

            resp = await resp.json();
            return resp;

        } catch (e) {
            return false;
        }
    }
    static async addCoins(amount) {

        const params = {
            body: JSON.stringify({ amount: amount, }),
            method: "post",
            mode: "cors",
            headers: this.headers
        }

        try {
            const resp = await fetch(`https://coding-challenge-api.aerolab.co/user/points`, params);

            if (resp.status !== 200) {
                throw new Error(resp);
            }

            const data = await resp.json();
            return data;

        } catch (e) {
            return false;
        }
    }
    static async getHistory() {

        const headers = { headers: this.headers }

        try {
            const resp = await fetch(`https://coding-challenge-api.aerolab.co/user/history`, headers);

            if (resp.status !== 200) {
                throw new Error("Error");
            }
            const data = await resp.json();
            return data;
        } catch (e) {
            return false;
        }
    }
}
export default UserService;
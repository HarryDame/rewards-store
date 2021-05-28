class ProductService {


    static headers = {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGFkOWI2NDliNzc4MTAwMjA5YzVhYTQiLCJpYXQiOjE2MjE5OTAyNDR9.5YW-aBwRpJZS88xYCvlvTv1Ri5x_LphIw7a5NvcC9GA"
    }
    static async getProducts() {

        const headers = {
            headers: this.headers
        }

        try {
            const resp = await fetch("https://coding-challenge-api.aerolab.co/products", headers);
            if (resp.status !== 200) {
                throw new Error(resp);
            }
            return await resp.json();
        } catch (e) {
            return false;
        }
    }

    static async redeemProduct(productId) {

        const params = {
            body: JSON.stringify({ productId }),
            method: "post",
            mode: "cors",
            headers: this.headers
        }

        try {
            const resp = await fetch(`https://coding-challenge-api.aerolab.co/redeem`, params);

            if (resp.status !== 200) {
                throw new Error(resp);
            }
            return await resp.json();

        } catch (e) {
            return false;
        }
    }
}
export default ProductService;
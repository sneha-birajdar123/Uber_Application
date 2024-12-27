import jwt from "jsonwebtoken";

function encryptData() {
    try {
        console.log("Hello");
        let userData = {
            name: "sneha",
            age: 22,
            pwd: "sneha123"
        }
        let secretKey = "SNEHA";
        let token = jwt.sign(userData, secretKey, { expiresIn: "1h" })
        console.log(token);

    } catch (error) {
        console.log(error);
    }
}
encryptData()



import jwt from "jsonwebtoken";

function decryptData(){
    try {
        let userToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoic25laGEiLCJhZ2UiOjIyLCJwd2QiOiJzbmVoYTEyMyIsImlhdCI6MTczNTE5NTMyNSwiZXhwIjoxNzM1MTk4OTI1fQ.ZsMdEDB7OfA163DirXgxLNvQk4XFRhYLunP7gghcW2Q"
        let secretKey = "SNEHA";
        let verify = jwt.verify(userToken, secretKey)
        if(!verify){
            return console.log("user not verified! please login");
        }
        console.log("User verified");
        
    } catch (error) {
        console.log(error);
    }
}
decryptData()
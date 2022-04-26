
const loginData=[
    {
        id:1,
        "username":"john",
        "name":"John Doe",
        "email": "john@gmail.com",
        "password":"test"
    }
]

export default function handler(req,res){
    
    if(req.method === 'POST'){
            if(req.body.username === 'john' && req.body.password === 'test'){
              res.status(200).json(loginData);
            }else{
                res.status(203).json(null)
            }
    }
    
   if(req.method === 'GET'){
       res.status(200).json(loginData);
   }

};
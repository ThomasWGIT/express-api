export default class User{

    get (req, res){
        console.log("user::get")
        res.json({
            "name": "dude",
            "age": 12,
            "active": true
        })
    }
    
    getList(req, res){
        console.log("user::getList");
        res.json([
            {
                "name": "dude",
                "age": 12,
                "active": true
            },
            {
                "name": "miche",
                "age": 23,
                "active": false
            },
            {
                "name": "jacquie",
                "age": 34,
                "active": true
            }
        ])
    }
}
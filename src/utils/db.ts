import serverlessMysql from "serverless-mysql"

const db = serverlessMysql({
    
   config: {
        host: "127.0.0.1",
        user: "root",
        password: "password",
        database: "names",
        port: 3306
    }
})

export {db}
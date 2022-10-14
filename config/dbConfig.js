const username= encodeURIComponent("bhoomik_flutter_test")
const pass = encodeURIComponent("JMkvFpb@x5eH5@Q")

module.exports = {
    secret : "mySecret",
    database : "mongodb+srv://"+username + ":" + pass + "@cluster0.81neskj.mongodb.net/?retryWrites=true&w=majority"
}
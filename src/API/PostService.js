import axios from "axios";

export default class PostService{
    static async getAll(){
        try{
            const response = await axios.get('https://jsonplaceholder.typicode.com/comments')
            const mas = response.data.slice(0, 100)
            return mas
        }
        catch(e){
            console.log(e)
        }
    }
}

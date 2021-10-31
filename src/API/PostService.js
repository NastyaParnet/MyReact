import axios from "axios";

export default class PostService{
    static async getAll(limit=50, page=1){
        const response = await axios.get('https://jsonplaceholder.typicode.com/comments', {
            params: {
                _limit: limit,
                _page: page
            }
        })
        return response
    }

    static async getSimComm(id){
        const post = Math.floor((id-1)/5)+1
        const response = await axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${post}`)
        return response
    }
}

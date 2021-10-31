import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import PostService from "../API/PostService"
import Loader from "../components/UI/Loader/Loader";
import { useFetching } from "../hooks/UseFetching";

const SimComments = () => {
    const params = useParams()
    const [simComm, setSimComm] = useState([])
    const [fetchSimComm, isSimCommLoading, simCommError] = useFetching (async (id)=>{
        console.log(simComm)
        const response = await PostService.getSimComm(id)
        console.log(response)
        setSimComm(response.data)
        console.log(simComm)
    })
    useEffect(()=>{
        fetchSimComm(params.id)
    }, [])

    return  (
        <div>
            <h1>Ви потрапили на сторінку з комментарем {params.id}</h1>
            {isSimCommLoading
                ? <Loader/>
                : <div>
                    {simComm.map(comm =>
                        <div key={comm.id}>
                            <h5>{comm.email}</h5>
                            <div>{comm.body}</div>
                        </div>  
                    )}
                </div>
            }
        </div>
    )
}

export default SimComments
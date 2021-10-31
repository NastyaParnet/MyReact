import { useEffect, useRef } from "react"

export const useObserver = (lastElement, canLoad, isLoading, func) => {
    const observer = useRef()

    useEffect(()=>{
        if(isLoading) return
        if(observer.current) observer.current.disconnect()
        function callback(entries, observer) {
            if(entries[0].isIntersecting && canLoad){
                func()
            }
        };
        observer.current = new IntersectionObserver(callback);
        observer.current.observe(lastElement.current)
    }, [isLoading])

}
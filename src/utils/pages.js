export const getPageCount = (totalCount, limit) => {
    return Math.ceil(totalCount/limit)
}

export const getPageArray = (pages) => {
    let result = []
    for (let i=1; i<=pages; i++){
        result.push(i)
    }
    return result
}
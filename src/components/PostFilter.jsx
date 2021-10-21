import React from "react";
import MyInput from './UI/input/MyInput'
import MySelect from './UI/select/MySelect'

const PostFilter = ({filter, setFilter}) => {
    return (
        <div>
            <MyInput 
                value={filter.query}
                onChange={e => setFilter({...filter, query: e.target.value})}
                placeholder='Пошук'
            />
            <MySelect 
                value={filter.sort}
                onChange={e => setFilter({...filter, sort: e})}
                defaultValue='Сортування'
                options = {[
                {value:"name", name: 'По назві'},
                {value:"comments", name: 'По комментарям'}
                ]}
            />
        </div>
    )
}

export default PostFilter
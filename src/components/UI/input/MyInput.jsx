import React from "react";

const MyInput = ({value, onChange}) => {
    return(
        <input
            value={value}
            onChange={e => onChange(e.target.value)}
            placeholder="Пошук"
        />
    )
}

export default MyInput
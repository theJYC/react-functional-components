import React from "react"

const Link = props => {
    return (
        <>
            <h2><a href={props.url}>{props.title}</a></h2>
        </>
    )
}

export default Link

const Random = ({ min, max}) => {
    return (
        
        <div>
            <p>Random value between {min} and {max}</p>
            {String(Math.round(Math.random()* max))}</div>
    )
}

export default Random
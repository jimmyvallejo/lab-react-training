const IdCard = (props) => {
   const date = props.birth.toDateString()
    return (
        <div id="card">
            <img src={props.picture} alt="profile"/>
            <div>
                <p><span className="card-span">First name:</span> {props.firstName}</p>
                <p><span>Last name:</span> {props.lastName}</p>
                <p><span>Gender:</span> {props.gender}</p>
                <p><span>Height:</span> {props.height}</p>
                <p><span> Birth:</span>{date}</p>
            </div>
        </div>
    )
}

export default IdCard
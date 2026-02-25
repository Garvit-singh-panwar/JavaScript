
function Card({id , title , description , image}){
    return(
        <div>
            <img src={image.url} alt={image.alt}></img>
            <h2>{title}</h2>
            <p>{description}</p>

        </div>
    )
}

export default Card;
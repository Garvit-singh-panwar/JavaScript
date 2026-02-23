import Card from "./Card";

function Tours(Props){
    return(
        <div className="container">
            <div>
                <h2 className="title">
                Plan With Me
                </h2>
            </div>
            
            <div className="cards">
                {
                    Props.tours.map((tour)=>{
                        return <Card key={tour.id} {...tour } remove = { Props.remove }  ></Card>
                    } )
                }
            </div>
        </div>
    )
}

export default Tours;
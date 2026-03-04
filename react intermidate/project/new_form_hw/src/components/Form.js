import countryList from "../countryName";


function Form(props){
const formData = props.formData;
const setFormData = props.setFormData;



function changeHandler(event){

    const {name , value , type , checked} = event.target; 

    setFormData(prevData => {
        return(
            {
                ...prevData ,
                [name] : type === "checkbox" ? checked : value 
            }
        )
    })
}

    return(
        <form>
            <label htmlFor="firstname">First Name</label>
            <br/>
            <input 
            type="text"
            placeholder="Enter first name"
            name="firstname"
            id="firstname"
            onChange={changeHandler}
            value={formData.firstname}
            /> 

            <br/>
            <br/>
            <label htmlFor="lastname">Last Name</label>
            <br/>
            <input 
            type="text"
            placeholder="Enter last name "
            name="lastname"
            id="lastname"
            onChange={changeHandler}
            value={formData.lastname}
            />

            <br/>
            <br/>
            <label htmlFor="email">Email address</label>
            <br/> 
            <input
            type="email"
            placeholder="Enter your email"
            name="email"
            id="email"
            value={formData.email}
            /> 


            <br/>
            <br/>
            <label htmlFor="country">Country</label>
            <br/>
            <select id="country" name="country" onChange={changeHandler}>
                {countryList.map(country =>{
                    return(
                        <option key={country.code} value={country.name}>{country.name}</option> 
                    )
                })}
            </select>

            <br/>
            <br/>
            <label htmlFor="streetAddress">Street address</label>
            <br/>
            <input 
            type="text"
            placeholder="Enter street Address"
            name="streetAddress"
            id="streetAddress"
            onChange={changeHandler}
            value={formData.streetAddress}
            />

            <br/>
            <br/>
            <label htmlFor="city">City</label>
            <br/>
            <input 
            type="text"
            placeholder="Enter City name "
            name="city"
            id="city"
            onChange={changeHandler}
            value={formData.city}
            />

            <br/>
            <br/>
            <label htmlFor="state">State / Province</label>
            <br/>
            <input 
            type="text"
            placeholder="Enter state "
            name="state"
            id="state"
            onChange={changeHandler}
            value={formData.state}
            />

            <br/>
            <br/>
            <label htmlFor="zipCode">Zip / Postal code</label>
            <br/>
            <input 
            type="text"
            placeholder="Enter your zip code "
            name="zipCode"
            id="zipCode"
            onChange={changeHandler}
            value={formData.zipCode}
            />

            <br/>
            <br/>

            <fieldset className="">
                <legend>By Email</legend>

                <div className="box">
                    
                    <input
                    type="checkbox"
                    name="comments"
                    id="comments"
                    onChange={changeHandler}
                    checked={formData.comments}
                    />
                    <div className="label">
                            
                        <label htmlFor="comments">Comments</label>  
                        <br/>
                        <span>
                        Get notified when someones posts a comment on a post
                        </span>

                    </div>

                    
                </div>

                <div className="box">
                    
                    <input
                    type="checkbox"
                    name="candidates"
                    id="candidates"
                    onChange={changeHandler}
                    checked={formData.candidates}
                    />
                    <div className="label">
                            
                        <label htmlFor="candidates">Candidates</label>  
                        <br/>
                        <span>
                        Get notified when a candidite apply for a job
                        </span>

                    </div>

                    
                </div>


                <div className="box">
                    
                    <input
                    type="checkbox"
                    name="offer"
                    id="offer"
                    onChange={changeHandler}
                    checked={formData.offer}
                    />
                    <div className="label">
                            
                        <label htmlFor="offer">offers</label>  
                        <br/>
                        <span>
                        Get notified when a candidite accepts or rejects an order
                        </span>

                    </div>

                    
                </div>
               
                

            </fieldset>
        </form>
    )
}


export default Form;
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


    function submitHandler(event){

        event.preventDefault();

        console.log(formData);
    }


    return(
        <form onSubmit={submitHandler}>
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
            onChange={changeHandler}
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

            <fieldset className="checkbox-container">
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
                        <p>
                        Get notified when someones posts a comment on a post
                        </p>

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
                        <p>
                        Get notified when a candidite apply for a job
                        </p>

                    </div>

                    
                </div>


                <div className="box">
                    
                    <input
                    type="checkbox"
                    name="offers"
                    id="offers"
                    onChange={changeHandler}
                    checked={formData.offers}
                    />
                    <div className="label">
                            
                        <label htmlFor="offer">offers</label>  
                        <br/>
                        <p>
                        Get notified when a candidite accepts or rejects an order
                        </p>

                    </div>

                    
                </div>
               
                

            </fieldset>



            <fieldset className="radio-container">
                <legend>Push Notification</legend>
                <p>this is delivered by message to your mobile phone</p>

                <br/>
                <input type="radio" onChange={changeHandler} value={"everything"} checked={formData.notification === "everything"} name="notification" id="everything" />
                <label htmlFor="everything"> Everything</label>

                <br/>
                <input type="radio" onChange={changeHandler} value={"same as email"} checked={formData.notification === "same as email"} name="notification" id="same as email" />
                <label htmlFor="same as email"> Same as Email</label>
                
                <br/>
                <input type="radio" onChange={changeHandler} value={"no push notification"} checked={formData.notification === "no push notification"} name="notification" id="no push notification" />
                <label htmlFor="no push notification"> No push notification</label>

            </fieldset>

            <br/>
            <button type="submit" >Save </button>

        </form>
    )
}


export default Form;
import logo from './logo.svg';
import './App.css';
import Form from './components/Form';
import { useState } from 'react';

function App() {

  const [formData, setFormData] = useState({
    firstname : "",
    lastname : "" ,
    email: "" ,
    country : "" ,
    streetAddress: "",
    city: "",
    state: "",
    zipCode: "",
    comments: false,
    candidates: false,
    offers:false,
    notification: "",


  })

  console.log(formData);

  return (
    <div className="App">
      <Form formData={formData} setFormData = {setFormData}/>
    </div>
  );
}

export default App;

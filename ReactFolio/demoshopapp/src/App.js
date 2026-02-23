import logo from './logo.svg';
import Items from './components/Items';
import ItemDate from './components/ItemDate';
import './App.css';

let response = [
    {
      name : "Garvit",
      day: 24,
      month : "jan" ,
      year : 2004,

    } ,

    {
      name : "Farhan",
      day: 18 ,
      month: "jan",
      year: 2005
    } 



]


function App() {
  return (
  <>
   {/* let say we do some api call we can dynamically change it using props we just have to pass them inside components like this  */}
    <Items name = {response[0].name} >
      To make this visible we have to use {" { props.children }"} inside this component 
      <pre>
        
        {  ` conponent(){
        
          return( <> 
                    <div >any thing you want   </div>
                    {props.children}
                  </>
          )
        
  }   `}

          like this
          so when you use this component inside other component you can add childrens like

        {`
        
  otherComponent(){
        
          return(
              <div>
                <p> add some things you want in this component </p>
                <component> by using props.children you made this visible </conponent>
              </div>
          )

  }
        `}
      </pre>
    </Items>
    
    <ItemDate day = {response[0].day} month = {response[0].month} year = {response[0].year}  />

    <Items name = {response[1].name} />
    <ItemDate day = {response[1].day} month = {response[1].month} year = {response[1].year}  />
    <div className="App">
     hello ji
    </div>
  </>
  );
}

export default App;

import { lista } from './model/adatok';
import './App.css';
import Kartya from './component/Kartya';

function App() {
  function katt(id){
    console.log("szülőkomponensben", id)
  }

  return (
    //<> fragement használata, ha még egy divet akarok beszúrni
    //a react csak páros tageket használnis
    //jsx a neve ennek ami itt van 
    //html komponenseket és js kódokat lehet ide beírni
    //egyetlen egy root elem lehet benne 
    //az index.js kapcsolódik hozzá
    //foreach helyett map használata, mert  a mapnek van visszatérési értéke
    <div className="App">
      <header className="App-header">

       <h1>Első react projekt</h1>
      </header>
      <article className="row">
          {
        lista.map((elem, index) => {
              return(
                <Kartya obj={elem} key={index} katt={katt}/>
              ) 
            }

            )

          }


    
      

      </article>
      
    </div>
    //</>
  );
}

export default App;

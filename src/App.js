import React, {useState} from 'react';
import data from './data';

const App=()=>{
    const [clicker, setClicker]=useState([])
    const [change, setChange]=useState(0);

    const loremer=(e)=>{
        e.preventDefault()
        let count=parseInt(change);
      if (count <= 0) {
        count=0;
      } if (count >=8) {
        count=8;
      }
      setClicker(data.slice(0, count))
    }

    return (
        <section className={"section-center"}>
            <h3>tired of boring lorem ipsum?</h3>
            <form className={"lorem-form"}>
                <label htmlFor={"amount"}> Paragraphs:</label>
                <input
                    id={"amount"}
                    name={"amount"}
                    value={change}
                    type={"number"}
                    onChange={(e)=>setChange(e.target.value)}
                />
                <button type={"submit"} className={"btn"}
                        onClick={(change)=>loremer(change)}
                >Generate
                </button>
            </form>
            <article className={"lorem-text"}>
                {clicker.map((item, index)=>{
                    return (<p key={index}> {item}</p>)
                })}

            </article>
        </section>
    )
}

export default App;

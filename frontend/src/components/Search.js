import React, { useEffect, useState } from 'react'
import "../css/cardback.css"
export default function Search(props) {
    let [finalData, setFinatData] = useState([]);
    let [strcheck] = useState(props.str ? props.str : "mumbai" ? props.str : "delhi")
   
    useEffect(async () => {
        async function fetchData() {
            try {
                let url = `https://api.jsonbin.io/v3/b/6416a862c0e7653a058a80af`;
                let data = await fetch(url);
                let parsedData = await data.json()
                console.log("data", parsedData.record);
                setFinatData(parsedData.record);
            } catch (e) {
                console.error(e);
            }
        };
        fetchData();
    }, []);
    return (
        <div id="search1" className='row'>
            {finalData.map((element, index) => {
                if (element.city.toLowerCase().search(strcheck.toLowerCase()) !== -1)
                    return <div key={index} className=" col-sm-12 col-md-6 col-lg-4">

                        <div className="card card bgnew " style={{ width: "18rem" }}>
                            <div className="card-body">
                                <h5 className="card-title">    
                                City: {element.city}</h5>
                                <p className="card-text">
                                    population:{element["population 2"]}<br />
                                    state: {element.admin}
                                </p>
                               
                            </div>
                        </div>

                        <br />
                    </div>
            })}
        </div>
    )
}
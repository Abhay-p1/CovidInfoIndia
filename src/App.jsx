import React,{useEffect,useState} from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import Card from './Card'
const App = ()=>{
    const [data,setData] = useState([]);
    // const [data2,setData2] = useState("");
    // const [data3,setData3] = useState("");
    // const [data4,setData4] = useState("");
    // const [data5,setData5] = useState("");
    // const [data6,setData6] = useState("");
    // const [data7,setData7] = useState("");
    // const [data8,setData8] = useState("");
    // const [data9,setData9] = useState("");
    // const [data10,setData10] = useState("");
    // const [data11,setData11] = useState("");
    // const [data12,setData12] = useState("");
    // const [data13,setData13] = useState("");
    // const [data14,setData14] = useState("");
    // const [data15,setData15] = useState("");
    // const [data16,setData16] = useState("");
    // const [data17,setData17] = useState("");
    // const [data18,setData18] = useState("");
    // const [data19,setData19] = useState("");
    // const [data20,setData20] = useState("");
    // const [data21,setData21] = useState("");
    // const [data22,setData22] = useState("");
    // const [data23,setData23] = useState("");
    // const [data24,setData24] = useState("");
    // const [data25,setData25] = useState("");
    // const [data26,setData26] = useState("");
    // const [data27,setData27] = useState("");
    // const [data28,setData28] = useState("");
    // const [data29,setData29] = useState("");
    // const [data30,setData30] = useState("");
    // const [data31,setData31] = useState("");
    // const [data32,setData32] = useState("");
    // const [data33,setData33] = useState("");
    // const [data34,setData34] = useState("");
    // const [data35,setData35] = useState("");
    useEffect(()=>{
      const fetchapi = async ()=>{
          try{
            const resp = await fetch('https://api.apify.com/v2/key-value-stores/toDWvRj1JpTXiM8FF/records/LATEST?disableRedirect=true');
            const actualdata = await resp.json();
            setData(actualdata);
          //   setData2(actualdata.regionData[8].activeCases);
          //   setData3(actualdata.regionData[20].activeCases);
          //   setData4(actualdata.regionData[16].activeCases);
          //   setData5(actualdata.regionData[15].activeCases);
          //   setData6(actualdata.regionData[27].activeCases);
          //   setData7(actualdata.regionData[25].activeCases);
          //   setData8(actualdata.regionData[11].activeCases);
          //   setData9(actualdata.regionData[35].activeCases);
          //   setData10(actualdata.regionData[1].activeCases);
          //   setData11(actualdata.regionData[2].activeCases);
          //   setData12(actualdata.regionData[3].activeCases);
          //   setData13(actualdata.regionData[4].activeCases);
          //   setData14(actualdata.regionData[5].activeCases);
          //   setData15(actualdata.regionData[6].activeCases);
          //   setData16(actualdata.regionData[9].activeCases);
          //   setData17(actualdata.regionData[10].activeCases);
          //   setData18(actualdata.regionData[12].activeCases);
          //   setData19(actualdata.regionData[13].activeCases);
          //   setData20(actualdata.regionData[14].activeCases);
          //   setData21(actualdata.regionData[17].activeCases);
          //   setData22(actualdata.regionData[18].activeCases);
          //   setData23(actualdata.regionData[19].activeCases);
          //   setData24(actualdata.regionData[21].activeCases);
          //   setData25(actualdata.regionData[22].activeCases);
          //   setData26(actualdata.regionData[23].activeCases);
          //   setData27(actualdata.regionData[24].activeCases);
          //   setData28(actualdata.regionData[26].activeCases);
          //   setData29(actualdata.regionData[28].activeCases);
          //   setData30(actualdata.regionData[29].activeCases);
          //   setData31(actualdata.regionData[30].activeCases);
          //   setData32(actualdata.regionData[31].activeCases);
          //   setData33(actualdata.regionData[32].activeCases);
          //   setData34(actualdata.regionData[33].activeCases);
          //   setData35(actualdata.regionData[34].activeCases);
          }
          catch(Error){
              console.log('Error')
          }
      }
      fetchapi();
    },[])

    /*  
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' };
    
         const updated = new Date(props.continent[props.index].updated);
         updated.toLocaleDateString("en-us", options)
    */
    // weekday: 'long', year: 'numeric', second: 'numeric' 
    const options = {month: 'short', day: 'numeric',year: 'numeric', hour: 'numeric', minute: 'numeric'};
    const updated = new Date(data.lastUpdatedAtApify);
    return (
     <>
               <div className="main container mb-4 mt-2">
                   <div className="row">
                       <div className="col-sm-11 col-9 bgclass px-4 mx-auto">
                   <div className="row">
                  <div className=" d-flex justify-content-around text-center mt-4 mb-3">
                  <div class="loader"></div>
                     <div className="">
                          <h3 className="large">🔴 LIVE</h3>
                          <h2>COVID-19 TRACKER</h2>
                     </div>
                  <div class="loader"></div>
                  </div>
                    <div className="col-md-4 col-sm-6 cardstart col-10 offset-1 offset-sm-0  mb-4  text-center">
                          <Card
                           val="a"
                           our="OUR"
                           title="COUNTRY"
                           number="INDIA"
                          />
                    </div>
                    <div className="col-md-4 col-sm-6 cardstart col-10 offset-1 offset-sm-0   text-center mb-4">
                          <Card
                          val="b"
                           our="TOTAL"
                           title="CASES"
                           number={data.totalCases}
                          />
                    </div>
                        <div className="col-md-4  col-sm-6 offset-1 offset-sm-0 cardstart col-10 mb-4  text-center">
                            <Card
                            val="c"
                           our="TOTAL"
                           title="RECOVERED"
                           number={data.recovered}
                          />
                        </div>
                         <div className="col-md-4  col-sm-6  offset-1 offset-sm-0 cardstart col-10 mb-4  text-center">
                             <Card
                             val="d"
                           our="TOTAL"
                           title="ACTIVE"
                           number={data.activeCases}
                          />
                        </div>
                        <div className="col-md-4  col-sm-6  offset-1 offset-sm-0 cardstart col-10 mb-4 text-center">
                            <Card
                            val="e"
                           our="TOTAL"
                           title="DEATHS"
                           number={data.deaths}
                          />
                        </div>
                        <div className="col-md-4  col-sm-6 offset-1 offset-sm-0 cardstart col-10 mb-4  text-center">
                            <Card
                            val="j"
                           our=""
                           title="Recovered New"
                           number={data.recoveredNew}
                          />
                        </div>
                        <div className="col-md-4  col-sm-6 offset-1 offset-sm-0 cardstart col-10 mb-4  text-center">
                            <Card
                            val="n"
                           our=""
                           title="New Deaths"
                           number={data.deathsNew}
                          />
                        </div>
                         <div className="col-md-4  col-sm-6  offset-1 offset-sm-0 cardstart col-10 mb-4  text-center">
                             <Card
                             val="f"
                           our="TOTAL"
                           title="PREVIOUS DAY TESTS"
                           number={data.previousDayTests}
                          />
                        </div>
                        <div className="col-md-4  col-sm-12 mx-auto  offset-1 offset-sm-0 cardstart col-10 mb-4  text-center">
                        <Card
                         val="i"
                         our=""
                         title="LAST UPDATED"
                         number={updated.toLocaleDateString("en-us", options)} 
                         />
                        </div> 
{ /*                       <div className="col-md-12 mx-auto  col-sm-12  offset-1 offset-sm-0 cardstart col-10 mb-3  text-center">
                           <div class="card" id="statedata">
                             <div class="card-body">
                               <p className="cardname"><span className="title"><span className="emoji">🔷🔶</span><span className="emoji2">🔹🔸</span> STATEWISE DATA <span className="emoji2">🔹🔸</span><span className="emoji">🔷🔶</span> </span></p>
                              </div>
                            </div>
                         </div> */}
  
{ /*                       <div className="col-md-4  col-sm-6  offset-1 offset-sm-0 cardstart col-10 mb-4  text-center">
                             <Card
                             val="h"
                           our="ACTIVE CASES"
                           title="DELHI"
                           number={data2} 
                          />
                          </div>
                          <div className="col-md-4  col-sm-6  offset-1 offset-sm-0 cardstart col-10 mb-4  text-center">
                             <Card
                             val="a"
                           our="ACTIVE CASES"
                           title="KERELA"
                           number={data4} 
                          />
                          </div>
                          
                          <div className="col-md-4  col-sm-6  offset-1 offset-sm-0 cardstart col-10 mb-4  text-center">
                             <Card
                             val="l"
                           our="ACTIVE CASES"
                           title="ODISHA"
                           number={data7} 
                          />
                          </div>
                          
                           <div className="col-md-4  col-sm-6  offset-1 offset-sm-0 cardstart col-10 mb-4  text-center">
                             <Card
                             val="j"
                           our="ACTIVE CASES"
                           title="MAHARASHTRA"
                           number={data3} 
                          />
                          </div>
                        
                          <div className="col-md-4  col-sm-6  offset-1 offset-sm-0 cardstart col-10 mb-4  text-center">
                             <Card
                             val="b"
                           our="ACTIVE CASES"
                           title="KARNATAKA"
                           number={data5} 
                          />
                          </div>
                          <div className="col-md-4  col-sm-6  offset-1 offset-sm-0 cardstart col-10 mb-4  text-center">
                             <Card
                             val="n"
                           our="ACTIVE CASES"
                           title="MEGHALAYA"
                           number={data25} 
                          />
                          </div>
                         
                          
                          <div className="col-md-4  col-sm-6  offset-1 offset-sm-0 cardstart col-10 mb-4  text-center">
                             <Card
                             val="x"
                           our="ACTIVE CASES"
                           title="AASAM"
                           number={data12} 
                          />
                          </div>
                          <div className="col-md-4  col-sm-6  offset-1 offset-sm-0 cardstart col-10 mb-4  text-center">
                             <Card
                             val="e"
                           our="ACTIVE CASES"
                           title="BIHAR"
                           number={data13} 
                          />
                          </div>
                          <div className="col-md-4  col-sm-6  offset-1 offset-sm-0 cardstart col-10 mb-4  text-center">
                             <Card
                             val="d"
                           our="ACTIVE CASES"
                           title="PUNJAB"
                           number={data6} 
                          />
                          </div>
                          <div className="col-md-4  col-sm-6  offset-1 offset-sm-0 cardstart col-10 mb-4  text-center">
                             <Card
                             val="o"
                           our="ACTIVE CASES"
                           title="CHANDIGARH"
                           number={data14} 
                          />
                          </div>
                          <div className="col-md-4  col-sm-6  offset-1 offset-sm-0 cardstart col-10 mb-4  text-center">
                             <Card
                             val="p"
                           our="ACTIVE CASES"
                           title="CHHATTISGARH"
                           number={data15} 
                          />
                          </div>
                             
                          <div className="col-md-4  col-sm-6  offset-1 offset-sm-0 cardstart col-10 mb-4  text-center">
                             <Card
                             val="q"
                           our="ACTIVE CASES"
                           title="JHARKHAND"
                           number={data20} 
                          />
                          </div>
                          <div className="col-md-4  col-sm-6  offset-1 offset-sm-0 cardstart col-10 mb-4  text-center">
                             <Card
                             val="r"
                           our="ACTIVE CASES"
                           title="GOA"
                           number={data16} 
                          />
                          </div>
                          <div className="col-md-4  col-sm-6  offset-1 offset-sm-0 cardstart col-10 mb-4  text-center">
                             <Card
                             val="s"
                           our="ACTIVE CASES"
                           title="GUJRAT"
                           number={data17} 
                          />
                          </div>
                    
                          <div className="col-md-4  col-sm-6  offset-1 offset-sm-0 cardstart col-10 mb-4  text-center">
                             <Card
                             val="t"
                           our="ACTIVE CASES"
                           title="LADAKH"
                           number={data21} 
                          />
                          </div>
                       
                          <div className="col-md-4  col-sm-6  offset-1 offset-sm-0 cardstart col-10 mb-4  text-center">
                             <Card
                             val="u"
                           our="ACTIVE CASES"
                           title="MANIPUR"
                           number={data24} 
                          />
                          </div>
                          <div className="col-md-4  col-sm-6  offset-1 offset-sm-0 cardstart col-10 mb-4  text-center">
                             <Card
                             val="v"
                           our="ACTIVE CASES"
                           title="HARYANA"
                           number={data8} 
                          />
                          </div>
                          <div className="col-md-4  col-sm-6  offset-1 offset-sm-0 cardstart col-10 mb-4  text-center">
                             <Card
                             val="w"
                           our="ACTIVE CASES"
                           title="MIZORAM"
                           number={data26} 
                          />
                          </div>
                          <div className="col-md-4  col-sm-6  offset-1 offset-sm-0 cardstart col-10 mb-4  text-center">
                             <Card
                             val="x"
                           our="ACTIVE CASES"
                           title="NAGALAND"
                           number={data27} 
                          />
                          </div>
                          <div className="col-md-4  col-sm-6  offset-1 offset-sm-0 cardstart col-10 mb-4  text-center">
                             <Card
                             val="y"
                           our="ACTIVE CASES"
                           title="RAJASTHAN"
                           number={data29} 
                          />
                          </div>
                          <div className="col-md-4  col-sm-6  offset-1 offset-sm-0 cardstart col-10 mb-4  text-center">
                             <Card
                             val="z"
                           our="ACTIVE CASES"
                           title="SIKKIM"
                           number={data30} 
                          />
                          </div>
                          <div className="col-md-4  col-sm-6  offset-1 offset-sm-0 cardstart col-10 mb-4  text-center">
                             <Card
                             val="a"
                           our="ACTIVE CASES"
                           title="PUDUCHERRY"
                           number={data28} 
                          />
                          </div>
                          <div className="col-md-4  col-sm-6  offset-1 offset-sm-0 cardstart col-10 mb-4  text-center">
                             <Card
                             val="g"
                           our="ACTIVE CASES"
                           title="TELANGANA"
                           number={data32} 
                          />
                          </div>
                      
                          <div className="col-md-4  col-sm-6  offset-1 offset-sm-0 cardstart col-10 mb-4  text-center">
                             <Card
                             val="b"
                           our="ACTIVE CASES"
                           title="UTTARAKHAND"
                           number={data34} 
                          />
                          </div>
                          <div className="col-md-4  col-sm-6  offset-1 offset-sm-0 cardstart col-10 mb-4  text-center">
                             <Card
                             val="k"
                           our="ACTIVE CASES"
                           title="TAMIL NADU"
                           number={data31} 
                          />
                          </div>
                          <div className="col-md-4  col-sm-6  offset-1 offset-sm-0 cardstart col-10 mb-4  text-center">
                             <Card
                             val="d"
                           our="ACTIVE CASES"
                           title="WEST BENGAL"
                           number={data9} 
                          />
                          </div>
                          <div className="col-md-4  col-sm-6  offset-1 offset-sm-0 cardstart col-10 mb-4  text-center">
                             <Card
                             val="q"
                           our="ACTIVE CASES"
                           title="UTTAR PRADESH"
                           number={data35} 
                          />
                          </div>
                          <div className="col-md-4  col-sm-6  offset-1 offset-sm-0 cardstart col-10 mb-4  text-center">
                             <Card
                             val="f"
                           our="ACTIVE CASES"
                           title="ANDRA PRADESH"
                           number={data10} 
                          />
                          </div>
                          <div className="col-md-4  col-sm-6  offset-1 offset-sm-0 cardstart col-10 mb-4  text-center">
                             <Card
                             val="t"
                           our="ACTIVE CASES"
                           title="HIMACHAL PRADESH"
                           number={data18} 
                          />
                          </div>
                          <div className="col-md-4  col-sm-6  offset-1 offset-sm-0 cardstart col-10 mb-4  text-center">
                             <Card
                             val="l"
                           our="ACTIVE CASES"
                           title="JAMMU AND KASHMIR"
                           number={data19} 
                          />
                          </div>
                          <div className="col-md-12  col-sm-12 mx-auto  offset-1 offset-sm-0 cardstart col-10 mb-4  text-center">
                             <Card
                             val="i"
                           our=""
                           title="LAST UPDATED"
                           number={data.lastUpdatedAtApify} 
                          />
                        </div>  */}
                          </div>
                      </div>
                    </div>
                    </div>
    
     </>
    );
}

export default App;

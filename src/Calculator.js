import React, { useState } from "react";
import "./calculator.css";
const Calculator = () => {
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");
  const [deducttime, setDeductTime] = useState("");
  const [totaltime, setTotalTime] = useState("");
  // const [message,setMessage] = useState("")
  // const [am,setam] = useState("")
  // const [pm,setpm] = useState("")
  
  // const Starttimecalculation = (e) => {
    
  //   var StartTime = e.target.value;
  //   if (StartTime <= 12 ? "am" : "pm" )
        
    // var startInins = StartTime.split(":")
    // var time = start.split(":")[0]*60 + start.split(":")[1]?start.split(":")[1]:0
    
    // setStart(StartTime)
  // };
  // const Endtimecalculation = (e) => {
  //   var endTime = e.target.value;
  //   var time = endTime+12
  //   if (time >=12 ? "pm " : "am" )////////////
  //   setEnd(endTime);
  // };
  // const DeductTimeCalculation = (e) => {
  //   var DeductTime = e.target.value ;
  //   setDeductTime(DeductTime);
  // };
  const CalculateTime = () => {
    const startTimeInMins = Number(start.split(":")[0]*60) + Number(start.split(":")[1]?start.split(":")[1]:0)
    const endTimeInMins = Number(end.split(":")[0]*60) + Number(end.split(":")[1]?end.split(":")[1]:0)
    var totalTimeInMins = endTimeInMins - startTimeInMins - deducttime;
    const totalHours = parseInt(totalTimeInMins/60)
    const totalMinutes = parseInt(((totalTimeInMins/60) - totalHours)*60)
    setTotalTime(`${totalHours}:${totalMinutes}`);


  }
  const resetButton =() =>{
    setEnd ("")
    setStart (" ")
    setDeductTime ("")
    setTotalTime(" ")

  }

  const dropdownOptions = ['AM', 'PM']

  
  


  return (
    <div className="calculator">
      <div className="card">
        <h1>Hours calculator</h1>
        <div>
          <input 
            className="time"
            type="radio"
            value="12 hour clock"
            name="12 hour clock"
          />{" "}
          12 hour clock
          <input
            classname="daily"
            type="radio"
            value="24 hour clocl"
            name="24 hour clock"
          />{" "}
          24 hour clock
        </div>
        <div>
          <form>
            <label>
              Start Time :
              <input
                className="time-start"
                type="text"
                name="start"
                

                value={`${start}`}
                
                onChange={(e)=>{setStart(e.target.value)}}
                
              /> 
              
            </label>
            <select onChange={(value) => ({value})}>
              
              {dropdownOptions.map(option => <option>{option}</option>)}
            </select>
          </form>

          <form>
            <label>
              End Time : 
              <input
                className="time-end"
                type="text"
                name="End"
                value={end}
                onChange={(e)=>{setEnd(e.target.value)}}
              />
            </label>
            <select onChange={(value) => ({value})}>
              {dropdownOptions.map(option => <option>{option}</option>)}
              
            </select>
          </form>
          <form>
            <label>
              Deduct Time :
              <input
                className="time-dedution"
                type="Number"
                name="start"
                value={deducttime} 
                onChange={(e)=>{setDeductTime(e.target.value)}}
              />{" "}
              minutes
            </label>
          </form>
        </div>
        <button  onClick={resetButton} className="clear-button" >Clear</button>
        <button onClick={CalculateTime} className="calculate-button">
          calculate
        </button>
        <div>
          
          <textarea  
            className="Text"
            name="Time Calculator"
            value={totaltime}
            
            

            

            
            
          />
        </div>
      </div>
    </div>
  );
};

export default Calculator;

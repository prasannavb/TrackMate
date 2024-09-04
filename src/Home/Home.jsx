import axios from "axios";
import { useEffect, useState } from "react";
import './Home.css'
import Navbar from "../Navbar/Navbar";

const Home = () => {
  const [date, setDate] = useState();
  const [year,setYear]=useState()
  const [attendanceData, setAttendanceData] = useState([[]]);
  const monthArray = [
    "January", "February", "March", "April", "May", "June", 
    "July", "August", "September", "October", "November", "December"
  ];

  const markAttendance = async () => {
    if (date) {
      const {data} = await axios.post('http://localhost:8000/', { date });
      alert(`${data.message}`)
      fetchAttendance(year) 
    } else {
      alert("Choose a date");
    }
  };

  const handleDateChange = (e) => {
    const { value } = e.target;
    setDate(value);
  };

  const fetchAttendance = async (inputYear) => {
    const { data } = await axios.post('http://localhost:8000/fetchAttendance',{inputYear});
    const newData = [];

    for (let i = 0; i < 12; i++) {
      newData.push(
        data.AttendanceData.filter((entry) => entry.month === monthArray[i])
      );
    }

    setAttendanceData(newData); 
  };

  const CalculateTodayDate=()=>
  {
     const today = new Date().toISOString().split('T')[0]; // Format: YYYY-MM-DD
     const todayyr=new Date().getFullYear();
     setYear(todayyr)
     setDate(today)
  }

  useEffect(()=>{
    fetchAttendance(new Date().getFullYear());
    CalculateTodayDate();
  },[])

  return (
    <>
      <Navbar/>
    <div className="Home">
      <div className="Home-div-1">
        <div className="Home-date-div">
          <h1><span onClick={()=>{fetchAttendance(year-1),setYear(year-1)}}>⬅️</span> {year} <span onClick={()=>{fetchAttendance(year+1),setYear(year+1)}}>➡️</span></h1>
          <input type="date" name="date" onChange={handleDateChange} value={date} />
          <button  onClick={markAttendance}>Present</button>
        </div>
      </div>

      <div className="Home-div-2">
      <table border={1} className="Home-table">
  <thead>
    <tr>
      <th>MONTHS</th>
      <th>DATES</th>
      <th>COUNT</th>
    </tr>
  </thead>
  <tbody>
    {attendanceData.map((monthData, index) => (
      <tr key={index}>
        <td>{monthArray[index]}</td>
        <td className="second-column">
          <div className="date-wrapper">
            {monthData.map((entry, subIndex) => (
              <div key={subIndex}>{entry.date},</div>
            ))}
          </div>
        </td>
        <td>{monthData.length}</td>
      </tr>
    ))}
  </tbody>
</table>


      </div>

      
    </div>
    </>
  );
};

export default Home;

import axios from "axios";
import { useEffect, useState } from "react";

const Home = () => {
  const [date, setDate] = useState();
  const [attendanceData, setAttendanceData] = useState([[]]);
  const [fetched, setFetched] = useState(false);
  const monthArray = [
    "January", "February", "March", "April", "May", "June", 
    "July", "August", "September", "October", "November", "December"
  ];

  const markAttendance = async () => {
    if (date) {
      const {data} = await axios.post('https://attendance-tracker-server.vercel.app/', { date });
      alert(`${data.message}`)
      fetchAttendance() 
    } else {
      alert("Choose a date");
    }
  };

  const handleDateChange = (e) => {
    const { value } = e.target;
    setDate(value);
  };

  const fetchAttendance = async () => {
    const { data } = await axios.get('https://attendance-tracker-server.vercel.app/fetchAttendance');
    const newData = [];

    for (let i = 0; i < 12; i++) {
      newData.push(
        data.AttendanceData.filter((entry) => entry.month === monthArray[i])
      );
    }

    setAttendanceData(newData);
    setFetched(true);
  };

  useEffect(()=>{
    fetchAttendance();
  },[])

  return (
    <>
      <input type="date" name="date" onChange={handleDateChange} />
      <button  onClick={markAttendance}>Present</button>
      {/* <button onClick={fetchAttendance}>Fetch</button> */}

      <table border={1}>
        {fetched ? (
          <tbody>
            {attendanceData.map((monthData, index) => (
              <tbody key={index}>
               <tr>
               <td>{monthArray[index]}</td>
                <tbody>
                {monthData.map((entry, subIndex) => (
                  <td key={subIndex}>{entry.date}</td>
                ))}
                </tbody>
                <td>{monthData.length}</td>
               </tr>
              </tbody>
            ))}
          </tbody>
        ) : (
          <></>
        )}
      </table>
    </>
  );
};

export default Home;

//Dependencies
import axios from "axios";
import { useEffect, useState } from "react";

//CSS
import "./Home.css";
//Components
import Navbar from "../Navbar/Navbar";
import noresult from "../assets/noresult.png";

const Home = () => {
  const [date, setDate] = useState(new Date().toISOString().split("T")[0]);
  const [month, setMonth] = useState();
  const [year, setYear] = useState();
  const [yearlyAttendanceData, setYearlyAttendanceData] = useState([[]]);
  const [monthlyAttendance, setMonthlyAttendance] = useState([]);

  const monthArray = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const markAttendance = async () => {
    const { data } = await axios.post(
      "https://attendance-tracker-server.vercel.app/",
      { date },
    );
    alert(`${data.message}`);
    if (data.status) {
      fetchAttendance(year);
      fetchAttendanceOnMonth(year, month);
    }
  };

  const handleDateChange = (e) => {
    const { value } = e.target;
    setDate(value);
  };

  const fetchAttendance = async (inputYear) => {
    const { data } = await axios.post(
      "https://attendance-tracker-server.vercel.app/fetchAttendance",
      {
        inputYear,
      },
    );
    if (data.status) {
      const newData = [];
      for (let i = 0; i < 12; i++) {
        newData.push(
          data.AttendanceData.filter((entry) => entry.month === monthArray[i]),
        );
      }
      setYearlyAttendanceData(newData);
    } else {
      setYearlyAttendanceData([[], [], [], [], [], [], [], [], [], [], [], []]);
    }
  };

  const calculateTodayDate = () => {
    const currentMonth = new Date().getMonth();
    const currentYear = new Date().getFullYear();
    setMonth(monthArray[currentMonth]);
    setYear(currentYear);
    fetchAttendanceOnMonth(
      new Date().getFullYear(),
      monthArray[new Date().getMonth()],
    );
    fetchAttendance(currentYear);
  };

  const fetchAttendanceOnMonth = async (_year, _month) => {
    const { data } = await axios.post(
      "https://attendance-tracker-server.vercel.app/fetchAttendancePerMonth",
      { _year, _month },
    );
    setMonthlyAttendance(data.AttendanceData);
  };

  useEffect(() => {
    calculateTodayDate();
  }, []);

  return (
    <>
      <Navbar />
      <div className="Home">
        <div className="Home-div-1">
          <div className="Home-date-div">
            <h1>
              <span
                onClick={() => {
                  fetchAttendance(year - 1);
                  setYear(year - 1);
                  fetchAttendanceOnMonth(year - 1, month);
                }}
              >
                ⬅️
              </span>
              {year}
              <span
                onClick={() => {
                  fetchAttendance(year + 1);
                  setYear(year + 1);
                  fetchAttendanceOnMonth(year + 1, month);
                }}
              >
                ➡️
              </span>
            </h1>
            <input
              type="date"
              name="date"
              onChange={handleDateChange}
              value={date}
            />
            <button onClick={markAttendance}>Present</button>
          </div>

          <div className="Home-table-div">
            <table border={1}>
              <thead>
                <tr>
                  <th>MONTHS</th>
                  <th>COUNT</th>
                </tr>
              </thead>
              <tbody>
                {yearlyAttendanceData.map((monthData, index) => (
                  <tr
                    key={index}
                    onClick={() => {
                      fetchAttendanceOnMonth(year, monthArray[index]),
                        setMonth(monthArray[index]);
                    }}
                  >
                    <td>{monthArray[index]}</td>
                    <td>{monthData.length}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="Home-div-2">
          {monthlyAttendance.length > 0 ? (
            <>
              <table border={1}>
                <thead>
                  <th colSpan={7}>{month}</th>
                </thead>
                <tbody>
                  <tr>
                    {monthlyAttendance.map((data) => (
                      <td>{data.date}</td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </>
          ) : (
            <>
              <table>
                <thead>
                  <th>{month}</th>
                </thead>
                <tbody>
                  <tr>
                    <img src={noresult} alt="No Records found " />
                  </tr>
                </tbody>
              </table>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Home;
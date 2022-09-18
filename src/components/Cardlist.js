import { useState, useEffect } from "react";
import Card from "./Card";
import axios from "axios";

function Cardlist() {
  const [data, setData] = useState([]);

  const fetchdata = () => {
    axios.get("https://www.breakingbadapi.com/api/characters").then((res) => {
      setData(res.data);
    });
  };

  useEffect(() => {
    fetchdata();
  }, []);

  return (
    <div className="container">
      <div className="row gy-3">
        {data.map((person) => {
          return (
            <Card
              id={person.char_id}
              img={person.img}
              name={person.name}
              nickname={person.nickname}
              status={person.status}
            />
          );
        })}
      </div>
    </div>
  );
}
export default Cardlist;

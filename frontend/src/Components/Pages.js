import React from "react";
import Feed from "./Feed";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import "../CSS/Show.css";

const Pages = () => {
  const deleteDiary = (id) => {
    axios
      .delete(`http://localhost:9000/api/diary/deleteDiary/${id}`, {
        withCredentials: true,
      })
      .then((res) => {
        alert("Successfully Deleted");
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  };
  const [diary, setDiary] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(
        "http://localhost:9000/api/diary/getDiary"
      );
      setDiary(response.data);
    }
    fetchData();
  }, []);

  return (
    <>
      <Feed />
      {diary.length > 0
        ? diary.map((note, key) => (
            <div className="show" key={key}>
              <div>{note.date}</div>
              <h2>{note.title}</h2>
              <div>{note.description}</div>
              <div className="button">
                <button>
                  <Link to={`/updateDiary/${note._id}`}>Update</Link>
                </button>
                <button onClick={() => deleteDiary(note._id)}>Delete</button>
              </div>
            </div>
          ))
        : (console.log(diary),
          (
            <div className="show">
              <h2>No Notes</h2>
            </div>
          ))}
    </>
  );
};

export default Pages;

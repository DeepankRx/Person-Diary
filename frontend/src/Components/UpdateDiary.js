import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "../CSS/Feed.css";
const Feed = () => {
  const params = useParams();
  const [prevTitle, setPrevTitle] = useState("");
  const [prevDesc, setPrevDesc] = useState("");
  const backendUrlForSingleDiary =
    "http://localhost:9000/api/diary/getDiaryById/" + params.id;

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(backendUrlForSingleDiary, {
          withCredentials: true,
        });
        console.log(response.data);
        setPrevTitle(response.data.title);
        setPrevDesc(response.data.description);
      } catch (err) {
        console.log(err.response.data);
      }
    }
    fetchData();
  }, []);

  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const backendUrlForUpdatingDiary =
    "http://localhost:9000/api/diary/updateDiary/" + params.id;
  const submitHandler = (event) => {
    event.preventDefault();
    if(!title)
    {
        setTitle(prevTitle);
    }
    if(!desc)
    {
        setDesc(prevDesc);
    }
  
      const currentTime = new Date();
      console.log(currentTime);
      console.log(title);
      console.log(desc);
      axios
        .put(
          backendUrlForUpdatingDiary,
          {
            date: currentTime,
            title: title,
            description: desc,
          },
          {
            withCredentials: true,
          }
        )
        .then((res) => {
          alert("Successfully Added");
        })
        .catch((err) => {
          console.log(err.response.data);
        });
    
  };
  return (
    <div className="feed">
      <form className="form" onSubmit={submitHandler}>
        <div className="box">
          <label>Title</label>
          <input
            onChange={(event) => {setTitle(event.target.value)}}
            value={title}
            type="text"
          ></input>
        </div>
        <div className="box">
          <label>Note</label>
          <textarea
            onChange={(event) => {
              setDesc(event.target.value);
            }}
            type={desc}
            value={desc}
          ></textarea>
        </div>
        <button>SUBMIT</button>
      </form>
    </div>
  );
};

export default Feed;

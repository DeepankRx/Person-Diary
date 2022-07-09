import React from "react";
import '../CSS/Show.css'


const Pages = (props) => {
  console.log(props.notes);
  return (
    <>
      {props.notes.map((note, key) => (
        <div className="show" key={key}>
          <div>{note.date}</div>
          <h2>{note.title}</h2>
          <div>{note.description}</div>
        </div>
      ))}
    </>
  );
};

export default Pages;

import React, { useState } from 'react'
import '../CSS/Feed.css'
const Feed = (props) => {
  const [title,setTitle]=useState("");
  const [desc,setDesc]=useState("");

  const submitHandler=(event)=>{
    event.preventDefault();
    if(!title.length && !desc.length)alert("Add Title and Description")
    else if(title.length===0){alert("Enter Title");}
    else if(desc.length==0){alert("Enter Description")}
    else {
    const currentTime =new Date();
    console.log(currentTime)
    console.log(title);
    console.log(desc);

    const note = {
      date: currentTime,
      title: title,
      description: desc,
    };
    setTitle("");
    setDesc("");
    props.addDiaryHandler(note);

    alert("Successfully Added");
    }
  }
  return (
    <div className='feed'>
        <form className='form' onSubmit={submitHandler}>
            <div className='box'>
                <label>Title</label>
                <input onChange={(event)=>setTitle(event.target.value)} value={title} type="text"></input>
            </div>
            <div className='box'> 
                <label>Note</label>
                <textarea  onChange={(event)=>{setDesc(event.target.value)}} type={desc} value={desc}></textarea>
            </div>
        <button>SUBMIT</button>
        </form>
    </div>
  )
}

export default Feed;
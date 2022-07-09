import { useState ,useCallback,useEffect} from "react";
import Feed from "./Components/Feed";
import Header from "./Components/Header";
import Pages from "./Components/Pages";

function App() {

  const [notes, setNotes] = useState([]);

  const fetchNotesHandler=useCallback(async()=> {

    try{
      const response = await fetch("https://react-main-81fce-default-rtdb.asia-southeast1.firebasedatabase.app/pdiary.json");
      //Checking if the response is Okay
      if(!response.ok)
      {
        throw new Error('Something went wrong');
      }
      //Parsing the data 
      const data = await response.json();
      const temp=[];
      for(var key in data){
        temp.push({date: data[key].date,
          title:data[key].title,
          description:data[key].description});
      }
      setNotes(temp)

    }catch(error)
    {
    }
  },[])

  useEffect(() => {
    fetchNotesHandler();
  }, [fetchNotesHandler]);


  console.log(notes)


  async function addDiaryHandler(note) {
    console.log(note)
    const response=await fetch('https://react-main-81fce-default-rtdb.asia-southeast1.firebasedatabase.app/pdiary.json',
    {
      method:'POST',
      body:JSON.stringify(note),
      headers:{
        //It is not required but a lot of reset api might required that describe the content that will be sent
        'Content-Type':'application/json'
      }
    });
    const data=await response.json();
    fetchNotesHandler();
  }

  return (
    <div>
      <Header/>
      <Feed addDiaryHandler={addDiaryHandler}/>
      <Pages notes={notes}/>
    </div>
  );
}

export default App;

import { useState } from "react";

function App () {
    const [resume,setResume] = useState(null);
    const[description,setDescription] = useState("");
    const [name,setName] = useState("");
       // state for validations and checking erro after user input
    const [error,setError] = useState("");
    // for checking correct filr is uploaded or not
    const[fileName,setFileName] =useState("");


    const isReady = resume && description && name && !error;

    const handleAnalyze=() =>{
      const data = {
         name,
         description,
         resume: resume?.name,
         time:new Date().toLocaleTimeString()
      };
      console.log("Sendind data :",data)
      alert("Data ready for backend");
    }


    return (
    
        <div style={{
            maxWidth:"500px",
            margin:"auto",
            padding:"40px",
            textAlign:"center",
            fontFamily:"Arial"
        }}>
      
         <h1>AI Resume Analyzer</h1>

       <div style={{
        border:"1px solid #ddd",
        padding:"15px",
        marginTop:"20px",
        borderRadius:"8px"

       }}>
        <label>Name : </label> <br/>
        <input 
        type="text"
         value={name}
         onChange={(e)=>setName(e.target.value)}
         placeholder="Enter Your Name"
        />
       </div>


         <div style={{
            border:"1px solid #ddd",
            padding:"15px",
            marginTop:"20px",
            borderRadius:"8px"
         }}>

          <label>Upload Resume :</label>
          <input 
            type="file"
            onChange={(e)=>{
               const file = e.target.files[0];

               if(!file) return;

               if(file.type !== "application/pdf"){
                  setError("Upload only in pdf format ");
                  setResume(null);
                  setFileName("");
                  return;
               }
                setError("");
                setResume(file);
                setFileName(file.name);
                setDescription("");
            }}
          />
      
           {error && <p style={{color:"red"}}>{error}</p>}

           {fileName && !error && (
            <p style={{color:"green"}}>Uploaded:{fileName}</p>
           )}
         <p>
            {resume ? resume.name : "No file Uploaded"}
         </p>
         </div>

         <div style={{
            border:"1px solid #ddd",
            padding:"15px",
            marginTop:"20px",
            borderRadius:"8px"
         }}>

         <label>Job Description: </label>
         <textarea
          rows="6"
          style={{width: "100%",marginTop:"10px"}}
          value={description}
          onChange={(e)=>setDescription(e.target.value)}
          placeholder="Enter Required Job Description "
         />
         </div>

         <button
        disabled={!isReady}
        onClick={handleAnalyze}
         style={{
            marginTop:"20px",
            padding:"12px",
            borderRadius:"2px",
            backgroundColor: isReady ?"lightblue" : "navy",
            color:"white",
            cursor:isReady?"pointer":"not-allowed"
         }}>
            Analyze
         </button>


        </div>
    )
}

export default App;
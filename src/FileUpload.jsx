import { useState } from "react";
import "./style.css";

export const FileUpload = () => {
    const [file, setFile] = useState(null);
    if(file){
        console.log(file);
    }
    function fileChange(e){
        setFile(URL.createObjectURL(e.target.files[0]))
    }
    
    return(
        <div className="container">
            <div className="header">
                <h2>You can upload video</h2>
                <p>CLICK ON THE BUTTON OR DRAG&DROP FILES HERE</p>
            </div>
            <div className="file-upload">
                <input type="file" name="" id="file-upload" onChange={fileChange}/>
            </div>
            <div className="play-file">
                {
                    file && 
                    <video style={{width: "20rem", height: "12rem"}} controls autoPlay>
                        <source src={file} type="video/mp4" />
                    </video>
                }
            </div>
        </div>
    )
}
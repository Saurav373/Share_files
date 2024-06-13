import React, { useRef, useState } from "react";
import "../Styles/File_input.css";
import toast from "react-hot-toast";
import SendEmail from "./SendEmail";

const File_input = () => {
    const [isDragging, setIsdragging] = useState(false);
    const [file,setfile] = useState(null)
    const [loading,setloading] = useState(false)
    const InputFile = useRef();
    const handleBrowse = () => {
        InputFile.current.click();
    };
    
    const handleDragEnter = (e) => {
        e.preventDefault();
        setIsdragging(true);
    };
    const handleDragLeave = (e) => {
        e.preventDefault();
        setIsdragging(false);
    };
    const handleDrop = (e) => {
        e.preventDefault();
        setIsdragging(false);
        const Files = e.dataTransfer.files;
        if (Files.length === 1) {
            InputFile.current.files = Files;
        } else if (Files.length > 1) {
            toast.error("Only one file allowted at a time");
        }
        handleSubmitData();
    };
    const handleSubmitData = async() => {
        const form = new FormData();
        form.append("file", InputFile.current.files[0]);
        let res = await fetch("http://localhost:3000/upload", { method: "POST", body: form });
        res = await res.json()
        setfile(res)  
    };
    return (
        <div className="file-container" style={file && {height:'630px'}}>
            <div
                className={`upload-container ${isDragging && "dragging"}`}
                onDragOver={handleDragEnter}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
                >

                <div className={`img-cont ${isDragging && "dragged"}`}>
                    <img
                        src="/file.svg"
                        alt="file-icon"
                        className="image center"
                        draggable="false"
                    />
                    <img
                        src="/file.svg"
                        alt="file-icon"
                        className="image left"
                        draggable="false"
                    />
                    <img
                        src="/file.svg"
                        alt="file-icon"
                        className="image right"
                        draggable="false"
                    />
                </div>
                <div className="text">
                    Drop Your Files here or , <span onClick={handleBrowse}>browse</span>
                </div>
                <input
                    type="file"
                    id="file"
                    ref={InputFile}
                    onInput={handleSubmitData}
                    name="file"
                />
            </div>
            
            {file && <SendEmail downloadlink={file.downloadLink}/>}
        </div>
    );
};

export default File_input;

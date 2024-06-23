import React, { useRef, useState } from "react";
import "../Styles/inputFile.css";
import toast from "react-hot-toast";
import SendEmail from "./SendEmail";

const inputFile = () => {
    const [isDragging, setIsdragging] = useState(false);
    const [file, setfile] = useState(null)
    const InputFile = useRef();
    const [loading, setLoading] = useState(false)
    const handleBrowse = () => {
        InputFile.current.click();
    };

    const handleDragEnter = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setIsdragging(true);
    };

    const handleDragLeave = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setIsdragging(false);
    };
    const handleDrop = (e) => {
        e.preventDefault();
        setIsdragging(false);
        try {
            const Files = e.dataTransfer.files;
            if (Files.length === 1) {
                InputFile.current.files = Files;
                handleSubmitData()
            } else if (Files.length > 1) {
                toast.error("Only one file allowted at a time");
            }
        } catch (err) {
            console.log(err);
            toast.error("Only a single file allowted");
        }
    };
    const handleSubmitData = async () => {
        try {
            const form = new FormData();
            form.append("file", InputFile.current.files[0]);
            setLoading(true)
            let res = await fetch("https://inshare-3nn5.onrender.com/upload", { method: "POST", body: form });
            res = await res.json()
            res.downloadLink = 'https://myinshare.netlify.app/download/' + res.downloadLink
            setfile(res)
        } catch (err) {
            toast.error("Only a single file allowted");
        } finally {
            setLoading(false)
        }
    };

    return (
        <>

            <div className="file-container" >
                <div
                    className={`upload-container ${isDragging && "dragging"}`}
                    onDragOver={handleDragEnter}
                    onDragLeave={handleDragLeave}
                    onDrop={handleDrop}
                >

                    <div className={`img-cont ${(isDragging || loading) ? "dragged" : ""}`} >
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
                        {!loading && <>Drop Your Files here or , <span onClick={handleBrowse}>browse</span></>}

                        {loading && 'Uploading...'}

                    </div>
                    <input
                        type="file"
                        id="file"
                        ref={InputFile}
                        onInput={handleSubmitData}
                        name="file"
                    />
                </div>

                {file && <SendEmail downloadlink={file.downloadLink} />}
            </div>
        </>

    );
};

export default inputFile;

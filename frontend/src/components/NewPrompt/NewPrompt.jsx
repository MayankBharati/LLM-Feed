import React, { useEffect, useRef, useState } from "react";
import "./NewPrompt.css";
import arrow from "../../../Public/images/arrow.png";
import Upload from "../Upload/Upload";
import { IKImage } from "imagekitio-react";
import {model} from "../../../libs/gemini";
import Markdown from "react-markdown";

const NewPrompt = () => {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [image, setImage] = useState({
    isLoading: false,
    error: "",
    dbData: {},
  });
  const endRef = useRef(null);

  useEffect(() => {
    endRef.current.scrollIntoView({ behavior: "smooth" });
  }, [question, answer, image.dbData]);

  const runPrompt = async (text)=>{
    setQuestion(text);
    
    const result = await model.generateContent(text);
    setAnswer(result.response.text());
  };
  const handleSubmit = async (e)=> {
    e.preventDefault();

    const text = e.target.prompt.value;

    if(!text) return;
    runPrompt(text);
  };

  return (
    <>
    {image.isLoading && (<div>Loading...</div>)}
    {image.dbData?.filePath && (
      <IKImage 
      urlEndpoint={import.meta.env.VITE_IMAGE_KIT_ENDPOINT}
      path={image.dbData?.filePath}
      className="attachmentImage"
      />
    )
  }
  {question && <div className="message user">{question}</div>}
  {answer && (
    <div className="message">
      <Markdown>{answer}</Markdown>
    </div>
    )}
      <div ref={endRef} className="endChat"></div>
      <form className="newForm" onSubmit={handleSubmit}>
        <Upload setImage={setImage} />
        <input type="file" id="file" hidden />
        <input
          type="text"
          placeholder="Ask me anything..."
          className="newFormInput"
          name="prompt"
        />
        <button className="newFormButton">
          <img src={arrow} alt="Send" className="newFormButtonImage" />
        </button>
      </form>
    </>
  );
};

export default NewPrompt;
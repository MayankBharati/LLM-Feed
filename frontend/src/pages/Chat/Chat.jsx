import React from "react";
import "./Chat.css";
import NewPrompt from "../../components/NewPrompt/NewPrompt";

const Chat = () => {

  return (
    <div className="chatMain">
        <div className="chatWrapper">
            <div className="chat">
                <div className="message">Test Answer From AI</div>
                <div className="message user">Test prompt form User</div>{" "}
                <div className="message">Test Answer From AI</div>
                <div className="message user">Test prompt form User</div>{" "}
                <div className="message">Test Answer From AI</div>
                <div className="message user">Test prompt form User</div>{" "}
                <div className="message">Test Answer From AI</div>
                <div className="message user">Test prompt form User</div>{" "}
                <div className="message">Test Answer From AI</div>
                <div className="message user">Test prompt form User</div>{" "}
                <div className="message">Test Answer From AI</div>
                <div className="message user">Test prompt form User</div>{" "}
                <div className="message">Test Answer From AI</div>
                <div className="message user">Test prompt form User</div>{" "}
                <div className="message">Test Answer From AI</div>
                <div className="message user">Test prompt form User</div>{" "}
                <div className="message">Test Answer From AI</div>
                <div className="message user">Test prompt form User</div>{" "}
                <div className="message">Test Answer From AI</div>
                <div className="message user">Test prompt form User</div>{" "}
                <NewPrompt />
            </div>
        </div>
    </div>
  );
};

export default Chat;
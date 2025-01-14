import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ContactUs from "../components/ContactUs";
// import { useState } from "react";
// import { MdMessage } from "react-icons/md";
// import { Button, Input } from "antd";

const Main = () => {
  // const [isOpen, setIsOpen] = useState(false);
  // const [messages, setMessages] = useState([
  //   { id: 1, text: "Hi there! How can we help you?", sender: "system" },
  //   { id: 2, text: "Feel free to type your message below.", sender: "system" },
  // ]);
  // const [newMessage, setNewMessage] = useState("");

  // const toggleChat = () => {
  //   setIsOpen(!isOpen);
  // };

  // const sendMessage = () => {
  //   if (newMessage.trim()) {
  //     setMessages([
  //       ...messages,
  //       { id: messages.length + 1, text: newMessage, sender: "user" },
  //     ]);
  //     setNewMessage("");
  //   }
  // };

  return (
    <div>
      <Navbar />
      <Outlet />
      <ContactUs />
      <Footer />
      {/* Message Icon */}
      {/* <div
        className="m-7 flex justify-end fixed bottom-3 right-2 cursor-pointer"
        onClick={toggleChat} // Open modal on click
      >
        <span className="bg-green-500 shadow-lg rounded-full p-4 text-white text-2xl">
          <MdMessage />
        </span>
      </div> */}

      {/* {isOpen && (
        <div className="fixed bottom-[105px] right-5 bg-white w-80 h-96 shadow-lg rounded-lg flex flex-col">
          <div className="bg-green-500 text-white p-3 flex justify-between items-center rounded-t-lg">
            <h3 className="font-bold">We are happy to chat.</h3>
            <span className="cursor-pointer text-xl" onClick={toggleChat}>
              &times;
            </span>
          </div>

          <div className="flex-1 overflow-y-auto p-3 space-y-2">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`${
                  message.sender === "user" ? "text-right" : "text-left"
                }`}
              >
                <div
                  className={`inline-block px-3 py-2 rounded-lg ${
                    message.sender === "user" ? "bg-blue-100" : "bg-gray-200"
                  }`}
                >
                  {message.text}
                </div>
              </div>
            ))}
          </div>

          <div className="p-3 border-t flex items-center space-x-2">
            <Input
              placeholder="Send your message..."
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              onPressEnter={sendMessage}
            />
            <Button className="bg-green-500 text-white" onClick={sendMessage}>
              Send
            </Button>
          </div>
        </div>
      )} */}
    </div>
  );
};

export default Main;

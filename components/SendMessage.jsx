import { useState } from "react";
import { useMoralis } from "react-moralis";

const SendMessage = ({ endOfMessagesRef }) => {
  const { user, Moralis } = useMoralis();
  const [message, setMessage] = useState("");

  const senMessage = (e) => {
    e.preventDefault();

    if (!message) return;

    const Messages = Moralis.Object.extend("Messages");
    const messages = new Messages();

    messages
      .save({
        message: message,
        username: user.getUsername(),
        ethAddress: user.get("ethAddress"),
      })
      .then(
        (message) => {
          // message was saved
        },
        (error) => {
          console.log(error.message);
        }
      );
    endOfMessagesRef.current.scrollIntoView({ behavior: "smooth" });
    setMessage("");
  };
  return (
    <form
      className="flex fixed bottom-12 bg-black opacity-80 w-11/12 
    px-6 py-4 max-w-2xl rounded-full shadow-xl border-4 border-blue-400"
    >
      <input
        className="flex-grow outline-none bg-transparent text-white 
       placeholder-gray-500 pr-5"
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder={`Enter a Message ${user.getUsername()}...`}
      />
      <button onClick={senMessage} className="font-bold text-pink-500">
        Send
      </button>
    </form>
  );
};

export default SendMessage;

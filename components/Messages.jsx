import { useRef } from "react";
import { useMoralis, useMoralisQuery } from "react-moralis";
import SendMessage from "./SendMessage";

const Messages = () => {
  const { user } = useMoralis();
  const endOfMessagesRef = useRef(null);
  return (
    <div className="pb-56">
      <div>{/* Each Messasge */}</div>
      <div className="flex justify-center">
        <SendMessage endOfMessagesRef={endOfMessagesRef} />
      </div>
      <div ref={endOfMessagesRef} className="text-center text-gray-400 mt-5">
        <p>{user.getUsername()} You're up to date! 😼</p>
      </div>
    </div>
  );
};

export default Messages;

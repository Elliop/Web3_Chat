import { useRef } from "react";
import { useMoralis, useMoralisQuery } from "react-moralis";
import Message from "./Message";
import SendMessage from "./SendMessage";

const MINS_DURATION = 15;

const Messages = () => {
  const { user } = useMoralis();
  const { data, loading, error } = useMoralisQuery(
    "Messages",
    (query) =>
      query
        .ascending("createdAt")
        .greaterThan(
          "createdAt",
          new Date(Date.now() - MINS_DURATION * 60 * 1000)
        ),
    [],
    {
      live: true,
    }
  );
  console.log(data);
  const endOfMessagesRef = useRef(null);
  return (
    <div className="pb-56">
      <div className="space-y-10 p-4">
        {data.map((message) => (
          <Message key={message.id} message={message} />
        ))}
      </div>
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

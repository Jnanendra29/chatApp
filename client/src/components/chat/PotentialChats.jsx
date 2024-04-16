import { useContext } from "react";
import { ChatContext } from "../../context/chatContext";
import { AuthContext } from "../../context/AuthContext";

//all other user with whom we can chat with
const PotentialChats = () => {
  const { user } = useContext(AuthContext);
  const { potentialChats, createChat, onlineUsers } = useContext(ChatContext);
  //   console.log("Potential Chats: ", potentialChats);
  return (
    <>
      <div className="all-users">
        {potentialChats &&
          potentialChats.map((u, index) => (
            <div
              className="single-user"
              key={index}
              onClick={() => createChat(user._id, u._id)}
            >
              {u.name}
              <span
                className={
                  onlineUsers?.some((user) => user?.userId === u?._id)
                    ? "user-online"
                    : ""
                }
              ></span>
            </div>
          ))}
      </div>
    </>
  );
};

export default PotentialChats;

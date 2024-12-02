import { useEffect, useRef, useState } from "react";
import { io } from "socket.io-client";
import { baseUrl } from "../../_functions/getData";
import { Alert, message } from "antd";
import { inputStyle } from "../../Pages/GameGroup/GameData";
import ContainerUp from "../ContainerUp";

const socket = io(baseUrl, {
  transports: ["websocket", "polling"],
  withCredentials: true,
});

interface User{
  message: string;
  player: string;
}

const PlayersChat = ({ groupId }: { groupId: string | null }) => {
  const [messageApi, contextHolder] = message.useMessage();
  const [serverResponse, setServerResponse] = useState<User[]>([]);
  const [playerMsg, setplayerMsg] = useState("");
  const [loading, setloading] = useState(false);

  const effectRan = useRef(false);
  useEffect(() => {
    if (effectRan.current) {
    } else {
      socket.emit("join_group", groupId);
      effectRan.current = true; // Mark as executed
    }
      console.log("🚀 ~ useEffect ~ groupId:", groupId)
  }, [groupId]);

  const notify = (
    type: "error" | "success" | "info" | "warning" | "loading" = "success",
    txt: string
  ) => {
    messageApi.open({
      type: type,
      content: `${txt}`,
      className: "custom-class",
      style: {
        marginTop: "20vh",
      },
    });
  };
  useEffect(() => {
    socket.on("get_msg", (allMsgs) => {
    setloading(false)
      setServerResponse((p) => [...p, allMsgs]);
    });


    return () => {
      socket.off("get_msg");
    };
  }, [socket]);

  const sendMessage = async () => {
    if (playerMsg == "") {
      notify("error", "اكتب الرسالة اولا");
      return;
    }

    setloading(true)
    socket.emit("player_msg", {
      message: playerMsg,
      room: groupId,
      plsc: localStorage.getItem("playerToken"),
    });
    setplayerMsg('')
  };

  return (
    <ContainerUp className="mt-3">
      {contextHolder}

      <Alert
      className="w-fit"
        message={`شات مع اصحابك عشان تتفقوا علي حرف وتلعبوا ع طول`}
        type="success"
      />
      <div className="h-60 lg:w-1/2 p-1 rounded-2xl overflow-y-auto bg-blue-300/40 mt-1">
        {serverResponse &&
          serverResponse.map((msg, indx) => (
            <div key={indx} className="shadow-lg rounded-2xl mt-2">
              <h3> {msg.player} </h3>
              <Alert message={msg.message} type="info" />
            </div>
          ))}
      </div>
      <input
      value={playerMsg}
      placeholder="ابعت رسالة لاصحابك اللي في المجموعة"
        className={`${inputStyle} lg:w-1/2 mt-2`}
        type="text"
        name="player-msg"
        onChange={(e) => setplayerMsg(e.target.value)}
        id="player-msg"
        />
      <div className="flex">
        <button
        disabled={loading}
        onClick={sendMessage}
        type="button"
        className={`group mt-2 relative ${loading ? 'w-[150px] ': 'lg:w-1/2 w-full'} flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-gray-800 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition duration-300 ease-in-out`}
        >
          ارسال
        </button>
          {loading && <div className="loader-get" />}
      </div>
    </ContainerUp>
  );
};

export default PlayersChat;

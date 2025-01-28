import { useEffect, useRef, useState } from "react";
import { baseUrl } from "../../_functions/getData";
import { Alert, message } from "antd";
import { inputStyle } from "../../Pages/GameGroup/GameData";
import ContainerUp from "../ContainerUp";
import { useNavigate } from "react-router-dom";

import { io } from "socket.io-client";
const socket = io(baseUrl, {
  transports: ["websocket", "polling"],
  withCredentials: true,
});

type Player = {
  _id: string;
  username: string;
};

interface User {
  message: string;
  player: string;
}

const PlayersChat = ({ groupId }: { groupId: string | null }) => {
  const navigat = useNavigate();

  const [messageApi, contextHolder] = message.useMessage();
  const [serverResponse, setServerResponse] = useState<User[]>([]);
  const [joinedPlayers, setJoinedPlayers] = useState([]);
  const [playerMsg, setplayerMsg] = useState("");
  const [loading, setloading] = useState(false);

  const effectRan = useRef(false);
  useEffect(() => {
    const tok = localStorage.getItem("playerToken");
    if (tok) {
      if (effectRan.current) {
      } else {
        socket.emit("join_group", { groupId: groupId, tk: tok });
        effectRan.current = true;
      }
    }
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
    if (localStorage.getItem("playerToken")) {
      socket.on("get_msg", (allMsgs) => {
        setloading(false);
        setServerResponse((p) => [...p, allMsgs]);
      });

      socket.on("joined", (players) => {
        setJoinedPlayers(players);
      });
    }

    return () => {
      socket.off("get_msg");
      socket.off("joined");
    };
  }, [socket]);
  // useEffect(() => {
  //   if(localStorage.getItem('playerToken')){
  //     socket.on("joined", (allMsgs) => {
  //       setServerResponse((p) => [...p, allMsgs]);
  //     });
  //   }
  // }, [socket]);

  const sendMessage = async () => {
    if (!localStorage.getItem("playerToken")) {
      notify("error", "سجل معانا او ادخل بحسابك لو عندك");
      setTimeout(() => {
        navigat("/auth");
      }, 1900);
      return;
    }

    if (playerMsg == "") {
      notify("error", "اكتب الرسالة اولا");
      return;
    }

    setloading(true);
    socket.emit("player_msg", {
      message: playerMsg,
      room: groupId,
      plsc: localStorage.getItem("playerToken"),
    });
    setplayerMsg("");
  };

  return (
    <ContainerUp className="mt-4">
      {contextHolder}

      {/* {joinedPlayers.length > 0 ? (
        <>
          <h3 className="mt-4"> اللاعبين المتاحين </h3>
          <div
            dir="ltr"
            className="m-1 mb-5 overflow-y-auto lg:w-[50%] h-[180px] "
          >
            {joinedPlayers.map((pl: Player) => (
              <div
                key={pl._id}
                className="bg-blue-300/40 mt-1 rounded-2xl p-1 px-2 w-fit"
              >
                {pl.username}
              </div>
            ))}
          </div>
        </>
      ) : (
        ""
      )} */}

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
              <Alert
                message={msg.message}
                type="info"
                className="border-none"
              />
            </div>
          ))}
      </div>
      <form>
        <label htmlFor="plyer-msg" className="sr-only">
          ارسل رسالة لاصحابك
        </label>
        <input
          value={playerMsg}
          required
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
            type="submit"
            className={`group mt-2 relative ${
              loading ? "w-[150px] " : "lg:w-1/2 w-full"
            } flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-gray-800 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition duration-300 ease-in-out`}
          >
            ارسال
          </button>
          {loading && <div className="loader-get" />}
        </div>
      </form>
    </ContainerUp>
  );
};

export default PlayersChat;

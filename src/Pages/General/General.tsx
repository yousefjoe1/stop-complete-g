import { Button, message } from "antd";

import { useEffect, useState } from "react";
import { io } from "socket.io-client";

import { baseUrl } from "../../_functions/getData";

import GeneralAnswers from "./components/GeneralAnswers";
import PlayersChat from "../../_components/PlayersChat/PlayersChat";
import GeneralForm from "./components/GeneralForm";

const socket = io(baseUrl, {
  transports: ["websocket", "polling"],
  withCredentials: true,
});

const General = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const searchParams = new URLSearchParams(window.location.search);
  const grRef = searchParams.get("g");

  const [serverResponse, setServerResponse] = useState([]); 

  useEffect(() => {
    socket.emit("getanswers", grRef);

    socket.on("getanswers", (allAns) => {
      setServerResponse(allAns);
    });

    socket.on("answerSaved", () => {
      notify("success", `اجابة جديده `);
      socket.emit("getanswers", grRef);
    });

    return () => {
      socket.off("getanswers");
      socket.off("answerSaved");
    };
  }, [socket]);

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

  const handleCopy = async (txtlink: string) => {
    try {
      await navigator.clipboard.writeText(txtlink);
      notify("success", `تم نسخ اللينك`);
    } catch (error) {
      console.error("Error copying text:", error);
    }
  };
  

  return (
    <>
      <>
        {contextHolder}

        <Button
          onClick={() =>
            handleCopy(`https://stop-complete-g.vercel.app/general?g=${grRef}`)
          }
          type="primary"
        >
          اضغط لنسخ اللينك , ويمكنك ان ترسلة لاصدقائك
        </Button>


        <PlayersChat groupId={grRef} />
          <GeneralForm grRef={grRef}/>

      </>
      <div className="overflow-x-auto">
        <GeneralAnswers data={serverResponse} />
      </div>
    </>
  );
};

export default General;

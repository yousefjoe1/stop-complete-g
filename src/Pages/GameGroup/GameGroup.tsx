import { Button, Select, Typography, message } from "antd";
import { SubmitHandler, useForm } from "react-hook-form";
import { Answers } from "../../types/d";
import { arabicAlphabet, inputStyle, questoins } from "./GameData";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { io } from "socket.io-client";
import axios from "axios";
import { baseUrl } from "../../_functions/getData";

const socket = io("http://localhost:4000");

const GameGroup = () => {
  const { Option } = Select;
  const [isSubmit, setIsSubmit] = useState(false);
  const character = useRef<string | undefined>()
  const [serverResponse, setServerResponse] = useState<Answers[]>([]);

  const searchParams = new URLSearchParams(window.location.search);
  const grRef = searchParams.get("g");

  const [messageApi, contextHolder] = message.useMessage();
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
    socket.emit("getanswers", grRef);

    // Listen for the 'getanswers' response from the server
    socket.on("getanswers", (allAns) => {
      console.log(allAns);
      // You can also update the state with the answers if needed
      setServerResponse(allAns);
    });
  
    // Listen for 'answerSaved' event from the server
    socket.on("answerSaved", () => {
      notify("success", `تمت الاجابة من احد اللاعبين `);
      // setServerResponse((p) => msg);
    socket.emit("getanswers", grRef);

    });
  
    // Cleanup event listeners on component unmount
    return () => {
      socket.off("getanswers");
      socket.off("answerSaved");
    };
  }, [socket]);


  const handleCopy = async (txtlink: string) => {
    try {
      await navigator.clipboard.writeText(txtlink);
      // msgFunc("تم نسخ اللينك");
      notify("success", `تم نسخ اللينك`)
    } catch (error) {
      console.error("Error copying text:", error);
    }
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Answers>();

  const onSubmit: SubmitHandler<Answers> = async (data) => {

    if(character.current == undefined){
      notify("error", `اختر حرف اولا`);
      return
    }
    const d = { ...data, group: grRef };
    let h = {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("playerToken")}`,
      },
    };

    let url = `${baseUrl}/api/answers`;
    setIsSubmit(true);
    let resp = await axios.post(url, d, h);
    notify("success", `${resp.data.msg} -- تمت الاجابة `);
    setIsSubmit(false);
  };

  const onGenderChange = (value:string | undefined) => {
    character.current = value
  };

  return (
    <>
      {contextHolder}

      <Button
        onClick={() => handleCopy(`http://localhost:5173/group?g=${grRef}`)}
        type="primary"
      >
        اضغط لنسخ اللينك , ويمكنك ان ترسلة لاصدقائك
      </Button>
      <form className="mt-8 space-y-2" onSubmit={handleSubmit(onSubmit)}>
        <Typography.Title className="mb-0" level={5}>
          الحروف
        </Typography.Title>
        <Select
        className="w-[100px] "
          size="large"
          placeholder="اختر الحرف"
          onChange={onGenderChange}
          allowClear
        >
          {arabicAlphabet.map((alpha) => (
            <Option key={alpha} value={alpha}>
              {alpha}
            </Option>
          ))}
        </Select>
        <div className="grid gap-4 lg:grid-cols-3 grid-cols-2">
          {questoins.map(({ id, label }) => (
            <div key={id}>
              <label htmlFor={id} className="sr-only">
                {label}
              </label>
              <Typography.Title level={5}>{label}</Typography.Title>

              <input
                id={id}
                {...register(id as keyof Answers, { required: true })}
                type="text"
                className={inputStyle}
                placeholder={label}
              />
              {errors[id as keyof Answers] && (
                <p className="text-red-500 text-sm mt-1">
                  اكتب الاجابة او اي حاجة زي لا
                </p>
              )}
            </div>
          ))}
        </div>
        <Typography.Title level={5}>ايه او خمس كلمات من الايه لا تفسد معني الايه</Typography.Title>
        <textarea
        className={`${inputStyle}`}
          {...register(`ayah` as keyof Answers, { required: true })}
          placeholder="الايه"
        />
        {errors[`ayah` as keyof Answers] && (
          <p className="text-red-500 text-sm mt-1">
            اكتب الاجابة او اي حاجة زي لا
          </p>
        )}
        <motion.button
          type="submit"
          disabled={isSubmit}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-gray-800 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition duration-300 ease-in-out"
        >
          {isSubmit ? <div className="loader"></div> : <span>خلصت</span>}
        </motion.button>
      </form>
      <div className="overflow-x-auto">

      <table className="min-w-[99%] mt-10 bg-white border border-gray-300 shadow-md rounded-lg">
        <thead>
          <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
            <th className="py-3 px-6 text-center border-b border-gray-300">
              اسم اللاعب
            </th>
            {questoins.map((item) => (
              <th
                key={item.id}
                className="py-3 px-6 text-center border-b border-gray-300"
              >
                {item.label}
              </th>
            ))}
            <th className="py-3 px-6 text-center border-b border-gray-300">
              ايه
            </th>
          </tr>
        </thead>
        <tbody>
          {serverResponse?.map((item, index) => (
            <tr
              key={index}
              className={`text-gray-700 ${index % 2 === 0 ? "bg-gray-50" : ""}`}
            >
              <td className="py-3 px-6 text-center border-b border-gray-300">
                {item.playerName}
              </td>
              <td className="py-3 px-6 text-center border-b border-gray-300">
                {item.prophet}
              </td>
              <td className="py-3 px-6 text-center border-b border-gray-300">
                {item.companionMale}
              </td>
              <td className="py-3 px-6 text-center border-b border-gray-300">
                {item.companionFemale}
              </td>
              <td className="py-3 px-6 text-center border-b border-gray-300">
                {item.surah}
              </td>
              <td className="py-3 px-6 text-center border-b border-gray-300">
                {item.ghazwa}
              </td>
              <td className="py-3 px-6 text-center border-b border-gray-300">
                {item.ayah}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>

    </>
  );
};

export default GameGroup;

import {  Select, Typography, message } from "antd";
import { SubmitHandler, useForm } from "react-hook-form";
import { Answers } from "../../../types/d";
import { motion } from "framer-motion";
import axios from "axios";
import {
  arabicAlphabet,
  generalQuestions,
  inputStyle,
} from "../../GameGroup/GameData";
import { useRef, useState } from "react";
import { baseUrl } from "../../../_functions/getData";


const GeneralForm = ({grRef}:{grRef:string | null}) => {
    const [messageApi, contextHolder] = message.useMessage();
    const { Option } = Select;
    const [isSubmit, setIsSubmit] = useState(false);
    const character = useRef<string | undefined>();
  
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
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
      } = useForm<Answers>();
    
      const onSubmit: SubmitHandler<Answers> = async (data) => {
        if (character.current == undefined || character.current == "") {
          notify("error", `اختر حرف اولا`);
          return;
        }
        let answers = { ...data, character: character.current, group: grRef, answer_type: 'general'  };
        const d = { answers: answers };
        let h = {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("playerToken")}`,
          },
        };
    
        let url = `${baseUrl}/api/answers`;
        setIsSubmit(true);
         await axios.post(url, d, h);
        // socket.emit("getanswers", grRef);
        character.current = "";
        setIsSubmit(false);
        reset();
      };
    
      const onGenderChange = (value: string | undefined) => {
        character.current = value;
      };
  return (
    <>
        {contextHolder}

    <form className="mt-8 space-y-2" onSubmit={handleSubmit(onSubmit)}>
    <Typography.Title className="mb-0" level={5}>
      الحروف
    </Typography.Title>
    <Select
      className="w-[120px] "
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
      {generalQuestions.map(({ id, label }) => (
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
    </>
  )
}

export default GeneralForm
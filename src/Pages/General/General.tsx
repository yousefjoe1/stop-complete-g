import { Button, Select, Typography, message } from "antd";
import { SubmitHandler, useForm } from "react-hook-form";
import { Answers } from "../../types/d";

import { motion } from "framer-motion";
import { useRef, useState } from "react";

import axios from "axios";
import { baseUrl } from "../../_functions/getData";
import useFetch from "../../_hooks/useFetch";
import { arabicAlphabet, generalQuestions, inputStyle } from "../GameGroup/GameData";
import GeneralAnswers from "./components/GeneralAnswers";

const General = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const { Option } = Select;
  const [isSubmit, setIsSubmit] = useState(false);
  const character = useRef<string | undefined>();

  const searchParams = new URLSearchParams(window.location.search);
  const grRef = searchParams.get("g");

  const { data, refetch, isLoading, isRefetching } = useFetch(
    `answers/${grRef}?type=general`,
    `answers-by-group-${grRef}-general`,
    true,
    "",
    100000
  );

  console.log("🚀 ~ Religin ~ data:", data);

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
    let answers = {...data,character: character.current };
    const d = { general: answers, group: grRef, };
    let h = {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("playerToken")}`,
      },
    };

    let url = `${baseUrl}/api/answers`;
    setIsSubmit(true);
    let resp = await axios.post(url, d, h);
    refetch();
    notify("success", `${resp.data.msg} -- تمت الاجابة `);
    character.current = "";
    setIsSubmit(false);
    reset();
  };

  const onGenderChange = (value: string | undefined) => {
    character.current = value;
  };
  return (
    <div>
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
      {isLoading || isRefetching ? (
        <div className="w-11/12 mx-auto mt-10 ">
          <div className="loader-get" />
        </div>
      ) : (
        <div className="overflow-x-auto">
          <GeneralAnswers data={data} />
        </div>
      )}
    </>
    </div>
  )
}

export default General
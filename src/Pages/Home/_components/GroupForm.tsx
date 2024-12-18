import { message } from "antd";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { baseUrl } from "../../../_functions/getData";
import axios from "axios";
import { useNavigate } from "react-router-dom";

interface GroupInputs {
  name: string;
  groupType: string;
}

const GroupForm = ({ refetch }: { refetch: Function }) => {
      const navigat = useNavigate()
  
  const [isSubmit, setIsSubmit] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();
  const msg = (
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
    formState: { errors },
  } = useForm<GroupInputs>();

  const groupType = useRef<string | undefined>("");

  const onSubmit: SubmitHandler<GroupInputs> = async (data) => {
    let h = {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("playerToken")}`,
      },
    };

    if (!localStorage.getItem("playerToken")) {
      msg("error", `  انت لست مسجل عندنا سجل والعب`);
      setTimeout(() => {
        navigat('/auth')
      }, 1900);
      return;
    }

    if (groupType.current == "") {
      msg("error", `اختر نوع اولا`);
      return;
    }

    let url = `${baseUrl}/api/groups`;
    let userdata = {
      name: data.name,
      groupType: groupType.current,
    };
    setIsSubmit(true);

    try {
      let resp = await axios.post(url, userdata, h);

      if (resp.data.code == 400 || resp.data.code != 201) {
        msg("error", `${resp.data.msg} او هناك خطا اخر -- انت لست مسجل عندنا`);
      }
      if (resp.data.code == 201) {
        msg("success", `${resp.data.msg} -- تم الاضافة `);
        refetch();
      }
      groupType.current = "";
    } catch (error) {
      msg("error", `انت لست مسجل عندنا او هناك خطا اخر`);
    }
    setIsSubmit(false);
  };

  return (
    <>
      {contextHolder}

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-md w-full space-y-8 bg-white p-10 rounded-xl mx-auto shadow-2xl"
      >
        <form className="mt-8 space-y-6" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label htmlFor="group-name" className="sr-only">
              اسم مجموعه اللعب
            </label>
            <input
              id="group-name"
              {...register("name", { required: true,maxLength: 20, minLength: 2 })}
              type="text"
              className="appearance-none rounded-md relative block w-full px-3 py-4 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-gray-500 focus:border-gray-500 focus:z-10 sm:text-sm transition duration-300 ease-in-out"
              placeholder="اسم مجموعه اللعب"
            />
            {errors.name && (
              <p className="text-red-500 text-xs mt-1">هذا الحقل مطلوب - اكتب حرفين على الاقل</p>
            )}
          </div>
          <div className="type-select">
            <h2>اختر النوع</h2>
            <div className="select mt-2">
              <select onChange={(e) => (groupType.current = e.target.value)}>
                <option value=""></option>
                <option value="دينية">دينية</option>
                <option value="عامة">ثقافة عامة</option>
              </select>
            </div>
          </div>
          <div>
            <motion.button
              type="submit"
              disabled={isSubmit}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-gray-800 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition duration-300 ease-in-out"
            >
              {isSubmit ? <div className="loader"></div> : <span>إضافة</span>}
            </motion.button>
          </div>
        </form>
      </motion.div>
    </>
  );
};

export default GroupForm;

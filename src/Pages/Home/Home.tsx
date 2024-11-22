import useFetch from "../../_hooks/useFetch";
import axios from "axios";
import { baseUrl } from "../../_functions/getData";

import { motion } from "framer-motion";

import { SubmitHandler, useForm } from "react-hook-form";
import { useRef, useState } from "react";
import { Collapse, message } from "antd";
import { Group } from "../../types/d";
import MyName from "../../_components/Animations/MyName";
import GroupCard from "../../_components/Cards/GroupCard";
import { Link } from "react-router-dom";

interface GroupInputs {
  name: string;
  groupType: string;
}

const Home = () => {
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

  const { data, refetch, isLoading, isRefetching } = useFetch(
    "groups",
    "all-player-group",
    true,
    "playerToken"
  );
  const [isSubmit, setIsSubmit] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<GroupInputs>();

  const groupType = useRef<string | undefined>("");
  console.log("🚀 ~ Home ~ groupType:", groupType);

  const onSubmit: SubmitHandler<GroupInputs> = async (data) => {
    let h = {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("playerToken")}`,
      },
    };

    if (!localStorage.getItem("playerToken")) {
      msg("error", `  انت لست مسجل عندنا سجل والعب`);
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

    let resp = await axios.post(url, userdata, h);

    if (resp.data.code == 400 || resp.data.code != 201) {
      msg("error", `${resp.data.msg} او هناك خطا اخر -- انت لست مسجل عندنا`);
    }
    if (resp.data.code == 201) {
      msg("success", `${resp.data.msg} -- تم الاضافة `);
      refetch();
    }
    setIsSubmit(false);
    groupType.current = "";
  };

  return (
    <>
      {contextHolder}

      <div
        dir="rtl"
        className="min-h-screen lg:pt-10 pt-2 container mx-auto lg:px-0 px-5 pb-10"
      >
        <h1 className="lg:text-3xl font-bold lg:my-10 my-4 text-center">مرحبا بك 👋</h1>

        <MyName />

        <Link to={`/all-info`} className="buttons">
          <button className="blob-btn">
            الصحابة
            👆 
            <span className="blob-btn__inner">
              <span className="blob-btn__blobs">
                <span className="blob-btn__blob"></span>
                <span className="blob-btn__blob"></span>
                <span className="blob-btn__blob"></span>
                <span className="blob-btn__blob"></span>
              </span>
            </span>
          </button>
          <br />

        </Link>
          <svg className="h-0" xmlns="http://www.w3.org/2000/svg" version="1.1">
            <defs>
              <filter id="goo">
                <feGaussianBlur
                  in="SourceGraphic"
                  result="blur"
                  stdDeviation="10"
                ></feGaussianBlur>
                <feColorMatrix
                  in="blur"
                  mode="matrix"
                  values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 21 -7"
                  result="goo"
                ></feColorMatrix>
                <feBlend in2="goo" in="SourceGraphic" result="mix"></feBlend>
              </filter>
            </defs>
          </svg>

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
                {...register("name", { required: true })}
                type="text"
                className="appearance-none rounded-md relative block w-full px-3 py-4 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-gray-500 focus:border-gray-500 focus:z-10 sm:text-sm transition duration-300 ease-in-out"
                placeholder="اسم مجموعه اللعب"
              />
              {errors.name && (
                <p className="text-red-500 text-xs mt-1">هذا الحقل مطلوب</p>
              )}
            </div>
            <div className="type-select">
              <h4>اختر النوع</h4>
              <div className="select mt-2">
                <select onChange={(e) => (groupType.current = e.target.value)}>
                  <option value=""></option>
                  <option value="دينية">دينية</option>
                  <option value="عامة">ثقافة عامة</option>
                  {/* <option value="3">Green Tea</option> */}
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

        <Collapse
          className="mt-10 w-fit"
          size="small"
          items={[
            {
              key: "1",
              label: <p className="font-bold text-xl"> ازاي نلعب</p>,
              children: (
                <>
                  <ul className="px-3 text-xl">
                    <li>سجل الاول</li>
                    <li>اعمل مجموعة</li>
                    <li>ادخل المجموعة وانسخ العنوان الموجود</li>
                    <li>
                      ابعته لاصحابك عن طريق الواتس او اي حاجه بتتكلموا عليها
                    </li>
                    <li>☝️ أو ممكن</li>
                    <li className="font-bold">
                      بعد ما تسجل اي حد يبعتلك لينك المجموعه اللي هو عاملها
                    </li>
                  </ul>
                </>
              ),
            },
          ]}
        />

        <h3 className="lg:pt-10 pt-4 pb-3 lg:text-lg font-bold">مجموعاتك</h3>
        {isLoading || isRefetching ? (
          <div className="loader-get"></div>
        ) : (
          <div className="grid lg:grid-cols-2 gap-8">
            {data?.data?.map((group: Group) => (
              <GroupCard key={group._id} group={group} />
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Home;

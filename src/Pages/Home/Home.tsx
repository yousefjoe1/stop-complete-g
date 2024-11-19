import useFetch from "../../_hooks/useFetch";
import axios from "axios";
import { baseUrl } from "../../_functions/getData";

import { motion } from "framer-motion";

import { SubmitHandler, useForm } from "react-hook-form";
import { useState } from "react";
import { Collapse, message } from "antd";
import { Group } from "../../types/d";
import { Link } from "react-router-dom";
import MyName from "../../_components/Animations/MyName";

interface GroupInputs {
  name: string;
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

  const { data, refetch, isLoading } = useFetch(
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

  const onSubmit: SubmitHandler<GroupInputs> = async (data) => {
    let h = {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("playerToken")}`,
      },
    };
    console.log("🚀 ~ constonSubmit:SubmitHandler<GroupInputs>= ~ h:",localStorage.getItem("playerToken"))

    if(!localStorage.getItem("playerToken")) {
      msg("error", `  انت لست مسجل عندنا سجل والعب`);
    return
    }


    let url = `${baseUrl}/api/groups`;
    let userdata = {
      name: data.name,
    };
    setIsSubmit(true);

    let resp = await axios.post(url, userdata, h);
    console.log(resp);
    
    if (resp.data.code == 400) {
      msg("error", `${resp.data.msg} -- انت لست مسجل عندنا`);
    }
    if (resp.data.code == 201) {
      msg("success", `${resp.data.msg} -- تم الاضافة `);
      refetch();
    }
    setIsSubmit(false);
  };

  return (
    <>
      {contextHolder}

      <div
        dir="rtl"
        className="min-h-screen lg:pt-10 pt-2 container mx-auto lg:px-0 px-5 pb-10"
      >
        <h1 className="lg:text-3xl font-bold my-10 text-center">مرحبا بك 👋</h1>

        <MyName />

        {/* اضافة جروب للعب */}
        {/* <section className="flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8"> */}
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
        {/* </section> */}

        {/* كيف نلعب */}

        <Collapse
          className="mt-10 w-fit"
          size="small"
          items={[
            {
              key: "1",
              label:<p className="font-bold text-xl"> ازاي نلعب</p>,
              children: (
                <>
                  <ul className="px-3 text-xl">
                    <li>سجل الاول</li>
                    <li>اعمل مجموعة</li>
                    <li>ادخل المجموعة وانسخ العنوان الموجود</li>
                    <li>ابعته لاصحابك عن طريق الواتس او اي حاجه بتتكلموا عليها</li>
                    <li>☝️ أو ممكن</li>
                    <li className="font-bold">بعد ما تسجل اي حد يبعتلك لينك المجموعه اللي هو عاملها</li>
                  </ul>
                </>
              ),
            },
          ]}
        />

        <h3 className="lg:pt-10 pt-4 pb-3 lg:text-lg font-bold">مجموعاتك</h3>
        {isLoading ? (
          <div className="loader-get"></div>
        ) : (
          <div className="grid lg:grid-cols-2 gap-8">
            {data?.data?.map((group: Group) => (
              <div
                key={group._id}
                className="flex bg-white-100 justify-between p-3 rounded-xl items-center shadow-md gap-4 flex-wrap"
              >
                <h3 className="lg:text-2xl"> {group.name} </h3>
                <Link to={`/group?g=${group._id}`}>
                  <button className="button-82-pushable" role="button">
                    <span className="button-82-shadow"></span>
                    <span className="button-82-edge"></span>
                    <span className="button-82-front text">ابدا اللعب</span>
                  </button>
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Home;

import useFetch from "../../_hooks/useFetch";

import { Collapse } from "antd";
import { Group } from "../../types/d";
import MyName from "../../_components/Animations/MyName";
import GroupCard from "../../_components/Cards/GroupCard";
import { Link } from "react-router-dom";
import GroupForm from "./_components/GroupForm";
import { LogIn } from "lucide-react";

const Home = () => {
  const { data, refetch, isLoading, isRefetching } = useFetch(
    "groups",
    "all-player-group",
    true,
    "playerToken"
  );

  return (
    <>
      <div
        dir="rtl"
        className="min-h-screen lg:pt-10 pt-2 container mx-auto lg:px-0 px-5 pb-10"
      >
        <MyName />

        <h1 className="lg:text-3xl font-bold lg:my-10 mb-4 text-center">
          مرحبا بك 👋
        </h1>

      <div className="flex items-center gap-5">
        <Link to={`/all-info`} title="religen details" className="buttons">
          <button className="blob-btn">
            معلومات دينية 👆
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

        {/* <Link to={`/general-info`} className="buttons">
          <button className="blob-btn">
            معلومات عامة 👆
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
        </Link> */}

      </div>
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

        <Collapse
          className="mb-5 mx-auto w-fit"
          size="small"
          items={[
            {
              key: "1",
              label: <p className="font-bold text-xl"> ازاي نلعب 🎮</p>,
              children: (
                <>
                  <ul className="px-3 text-xl">
                    <li className="flex gap-2">سجل الاول <Link className="text-blue-400 font-semibold flex items-center gap-2" to={`/auth?mode=login`}> من هنا <LogIn /> </Link>  </li>
                    <li>اعمل مجموعة</li>
                    <li>ادخل المجموعة وانسخ العنوان الموجود</li>
                    <li>
                      ابعته لاصحابك عن طريق الواتس او اي حاجه بتتكلموا عليها
                    </li>
                    <li>☝️ أو ممكن</li>
                    <li className="font-bold">
                      بعد ما تسجل اي حد يبعتلك لينك المجموعه اللي هو عاملها بعد ما هو يسجل
                    </li>
                  </ul>
                </>
              ),
            },
          ]}
        />

        <GroupForm refetch={refetch} />

        <h3 className="lg:pt-10 pt-4 pb-3 lg:text-lg font-bold">مجموعاتك</h3>
        {isLoading || isRefetching ? (
          <div className="loader-get"></div>
        ) : (
          <div className="grid lg:grid-cols-2 gap-8">
            {data?.data?.map((group: Group) => (
              <GroupCard refetch={refetch} key={group._id} group={group} />
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Home;

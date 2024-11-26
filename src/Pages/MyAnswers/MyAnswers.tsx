import useFetch from "../../_hooks/useFetch";
import AnswersTable from "../GameGroup/AnswersTable";
import GeneralAnswers from "../General/components/GeneralAnswers";

const MyAnswers = () => {
  const { data } = useFetch(
    "answers/player-answers",
    "player-answers-1",
    true,
    "playerToken"
  );
  console.log("🚀 ~ MyAnswers ~ data:", data)
  return (
    <div>
      <div className="overflow-x-scroll">
        <h3>جدول الثقافة العامة</h3>
        {/* <GeneralAnswers data={general} admin={true} /> */}

        <h3 className="-mb-8 mt-8">جدول المعلومات الدينية</h3>
        <AnswersTable data={[]} admin={true} />
      </div>
    </div>
  );
};

export default MyAnswers;

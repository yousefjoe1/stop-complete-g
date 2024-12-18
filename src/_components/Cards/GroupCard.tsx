import { Link } from "react-router-dom";
import { Group } from "../../types/d";
import DeleteGroup from "../../Pages/GameGroup/_components/DeleteGroup";

const GroupCard = ({ group ,refetch}: { group: Group,refetch:Function }) => {
  const linkBasedOnType =
    group.groupType == "دينية"
      ? `religin?g=${group._id}`
      : `general?g=${group._id}`;

  return (
    <div className="flex bg-white-100 justify-between p-3 rounded-xl items-center shadow-md gap-4 flex-wrap">
      <div className="info">
        <h3 className="lg:text-2xl"> الاسم: {group.name} </h3>
        <h3 className="lg:text-2xl"> النوع: {group.groupType} </h3>
      </div>
      <div className="flex items-start gap-3">
        <Link title="group link" to={`/${linkBasedOnType}`}>
          <button className="button-82-pushable" role="button">
            <span className="button-82-shadow"></span>
            <span className="button-82-edge"></span>
            <span className="button-82-front text">ابدا اللعب</span>
          </button>
        </Link>
        <DeleteGroup group={group._id} refetch={refetch} />
      </div>
    </div>
  );
};

export default GroupCard;

import { generalQuestions } from "../../GameGroup/GameData";

interface General {
  // Add general properties here as needed
  character: string;
  boy: string;
  girl: string;
  solid: string;
  animal: string;
  planet: string;
  country: string;
}

interface Item {
  general: General; // Object for general properties
  playerName: string; // Player's name
  character: string;
  boy: string;
  girl: string;
  solid: string;
  animal: string;
  planet: string;
  country: string;
}

const GeneralAnswers = ({ data,admin }: { data:any,admin?:boolean }) => {
  return (
    <table className="min-w-[99%] mt-10 bg-white border border-gray-300 shadow-md rounded-lg">
      <thead>
        <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
        {
            admin &&
          <th className="py-3 px-6 text-center border-b border-gray-300">
            مسح
          </th>
          }
          <th className="py-3 px-6 text-center border-b border-gray-300">
            اسم اللاعب
          </th>
          <th className="py-3 px-6 text-center border-b border-gray-300">
            الحرف
          </th>
          {generalQuestions.map((item) => (
            <th
              key={item.id}
              className="py-3 px-6 text-center border-b border-gray-300"
            >
              {item.label}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data && data?.map((item: Item, index: number) => (
          <tr
            key={index}
            className={`text-gray-700 ${index % 2 === 0 ? "bg-gray-50" : ""}`}
          >
                        {/* {
              admin &&
            <td className="py-3 px-6 text-center border-b border-gray-300">
              <DeleteAnswer /> 
            </td>
            } */}
            <td className="py-3 px-6 text-center border-b border-gray-300">
              {item.playerName}
            </td>
            <td className="py-3 px-6 text-center border-b border-gray-300">
              {item.character}
            </td>
            <td className="py-3 px-6 text-center border-b border-gray-300">
              {item.boy}
            </td>
            <td className="py-3 px-6 text-center border-b border-gray-300">
              {item.girl}
            </td>
            <td className="py-3 px-6 text-center border-b border-gray-300">
              {item.solid}
            </td>
            <td className="py-3 px-6 text-center border-b border-gray-300">
              {item.animal}
            </td>
            <td className="py-3 px-6 text-center border-b border-gray-300">
              {item.planet}
            </td>
            <td className="py-3 px-6 text-center border-b border-gray-300">
              {item.country}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default GeneralAnswers;

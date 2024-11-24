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

}

const GeneralAnswers = ({ data }: { data: any }) => {
  return (
    <table className="min-w-[99%] mt-10 bg-white border border-gray-300 shadow-md rounded-lg">
      <thead>
        <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
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
        {data?.map((item: Item, index: number) => (
          <tr
            key={index}
            className={`text-gray-700 ${index % 2 === 0 ? "bg-gray-50" : ""}`}
          >
            <td className="py-3 px-6 text-center border-b border-gray-300">
              {item.playerName}
            </td>
            <td className="py-3 w-[200px] px-6 text-center border-b border-gray-300">
              {item.general.character}
            </td>
            <td className="py-3 px-6 text-center border-b border-gray-300">
              {item.general.boy}
            </td>
            <td className="py-3 px-6 text-center border-b border-gray-300">
              {item.general.girl}
            </td>
            <td className="py-3 px-6 text-center border-b border-gray-300">
              {item.general.solid}
            </td>
            <td className="py-3 px-6 text-center border-b border-gray-300">
              {item.general.animal}
            </td>
            <td className="py-3 px-6 text-center border-b border-gray-300">
              {item.general.planet}
            </td>
            <td className="py-3 px-6 text-center border-b border-gray-300">
              {item.general.country}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default GeneralAnswers;

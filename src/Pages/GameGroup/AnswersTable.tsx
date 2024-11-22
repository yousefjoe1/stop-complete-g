import { religinQuestoins } from "./GameData";

interface ReligIn {
  playerName: string; // Player's name
  character: string; // Character name
  prophet: string; // Prophet name
  companionMale: string; // Male companion
  companionFemale: string; // Female companion
  surah: string; // Surah name
  ghazwa: string; // Ghazwa name
  ayah: string; // Ayah content
}


interface Item {
  religin: ReligIn; // Object holding religious properties
}
const AnswersTable = ({ data }: { data: any }) => {
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
          {religinQuestoins.map((item) => (
            <th
              key={item.id}
              className="py-3 px-6 text-center border-b border-gray-300"
            >
              {item.label}
            </th>
          ))}
          <th className="py-3 px-6 text-center border-b border-gray-300">
            <div className="w-[200px]">ايه من القرءان</div>
          </th>
        </tr>
      </thead>
      <tbody>
        {data?.data?.map((item: Item, index: number) => (
          <tr
            key={index}
            className={`text-gray-700 ${index % 2 === 0 ? "bg-gray-50" : ""}`}
          >
            <td className="py-3 px-6 text-center border-b border-gray-300">
              {item.religin.playerName}
            </td>
            <td className="py-3 px-6 text-center border-b border-gray-300">
              {item.religin.character}
            </td>
            <td className="py-3 px-6 text-center border-b border-gray-300">
              {item.religin.prophet}
            </td>
            <td className="py-3 px-6 text-center border-b border-gray-300">
              {item.religin.companionMale}
            </td>
            <td className="py-3 px-6 text-center border-b border-gray-300">
              {item.religin.companionFemale}
            </td>
            <td className="py-3 px-6 text-center border-b border-gray-300">
              {item.religin.surah}
            </td>
            <td className="py-3 px-6 text-center border-b border-gray-300">
              {item.religin.ghazwa}
            </td>
            <td className="py-3 w-[200px] px-6 text-center border-b border-gray-300">
              {item.religin.ayah}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default AnswersTable;

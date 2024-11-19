import { questoins } from './GameData'

const AnswersTable = ({data}:{data: any}) => {
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
        {questoins.map((item) => (
          <th
            key={item.id}
            className="py-3 px-6 text-center border-b border-gray-300"
          >
            {item.label}
          </th>
        ))}
        <th className="py-3 px-6 text-center border-b border-gray-300">
          <div className='w-[200px]'>
          ايه من القرءان

          </div>
        </th>
      </tr>
    </thead>
    <tbody>
      {data?.data?.map((item:any, index:number) => (
        <tr
          key={index}
          className={`text-gray-700 ${index % 2 === 0 ? "bg-gray-50" : ""}`}
        >
          <td className="py-3 px-6 text-center border-b border-gray-300">
            {item.playerName}
          </td>
          <td className="py-3 px-6 text-center border-b border-gray-300">
            {item.character}
          </td>
          <td className="py-3 px-6 text-center border-b border-gray-300">
            {item.prophet}
          </td>
          <td className="py-3 px-6 text-center border-b border-gray-300">
            {item.companionMale}
          </td>
          <td className="py-3 px-6 text-center border-b border-gray-300">
            {item.companionFemale}
          </td>
          <td className="py-3 px-6 text-center border-b border-gray-300">
            {item.surah}
          </td>
          <td className="py-3 px-6 text-center border-b border-gray-300">
            {item.ghazwa}
          </td>
          <td className="py-3 w-[200px] px-6 text-center border-b border-gray-300">
            {item.ayah}
          </td>
        </tr>
      ))}
    </tbody>
  </table>
  )
}

export default AnswersTable
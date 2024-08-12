export default function Mytable({ flashcards }) {
    return (
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
          <thead>
            <tr>
              <th className="px-4 py-2 text-left bg-gray-200 font-semibold">Row</th>
              <th className="px-4 py-2 text-left bg-gray-200 font-semibold">ID</th>
              <th className="px-4 py-2 text-left bg-gray-200 font-semibold">Question</th>
              <th className="px-4 py-2 text-left bg-gray-200 font-semibold">Answer</th>
              <th className="px-4 py-2 text-left bg-gray-200 font-semibold">Topic</th>
            </tr>
          </thead>
          <tbody>
            {flashcards.map((card, index) => (
              <tr key={card.id} className="border-b">
                <td className="px-4 py-2">{index + 1}</td>
                <td className="px-4 py-2">{card.id}</td>
                <td className="px-4 py-2">{card.ques}</td>
                <td className="px-4 py-2">{card.ans}</td>
                <td className="px-4 py-2">{card.topic}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
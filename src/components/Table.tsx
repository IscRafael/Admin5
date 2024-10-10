import React from 'react';

interface TableData {
  id: number;
  title: string;
  module: string;
  reporter: string;
  status: string;
  owner: string;
  severity: string;
  created: string;
  updated: string;
  due: string;
}

const Table: React.FC = () => {
  const data: TableData[] = [
    { id: 1, title: "App crashes", module: "Main App", reporter: "Lewis", status: "Open", owner: "Micheal", severity: "High", created: "Aug-10, 2022", updated: "Sep-14, 2022", due: "Oct-20, 2022" },
    { id: 2, title: "Saving file", module: "Form Screen", reporter: "James", status: "In Progress", owner: "Donald", severity: "Low", created: "Aug-10, 2022", updated: "Sep-14, 2022", due: "Oct-20, 2022" },
    { id: 3, title: "Login fail", module: "Main App", reporter: "Powell", status: "Open", owner: "Glory", severity: "High", created: "Aug-10, 2022", updated: "Sep-14, 2022", due: "Oct-20, 2022" },
    { id: 4, title: "Saving file", module: "Form Screen", reporter: "James", status: "In Progress", owner: "Donald", severity: "Low", created: "Aug-10, 2022", updated: "Sep-14, 2022", due: "Oct-20, 2022" },
    { id: 5, title: "Login fail", module: "Main App", reporter: "Powell", status: "In Progress", owner: "Glory", severity: "High", created: "Aug-10, 2022", updated: "Sep-14, 2022", due: "Oct-20, 2022" },
  ];

  return (
    <div className="w-full overflow-hidden rounded-lg shadow-xs">
      <div className="w-full overflow-x-auto">
        <table className="w-full whitespace-no-wrap">
          <thead>
            <tr className="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b bg-gray-50">
              <th className="px-4 py-3">Title</th>
              <th className="px-4 py-3">Module</th>
              <th className="px-4 py-3">Reporter</th>
              <th className="px-4 py-3">Status</th>
              <th className="px-4 py-3">Owner</th>
              <th className="px-4 py-3">Severity</th>
              <th className="px-4 py-3">Created</th>
              <th className="px-4 py-3">Updated</th>
              <th className="px-4 py-3">Due</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y">
            {data.map((row) => (
              <tr key={row.id} className="text-gray-700">
                <td className="px-4 py-3">
                  <div className="flex items-center text-sm">
                    <div>
                      <p className="font-semibold">{row.title}</p>
                    </div>
                  </div>
                </td>
                <td className="px-4 py-3 text-sm">{row.module}</td>
                <td className="px-4 py-3 text-sm">{row.reporter}</td>
                <td className="px-4 py-3 text-xs">
                  <span className={`px-2 py-1 font-semibold leading-tight rounded-full ${
                    row.status === 'Open' ? 'text-green-700 bg-green-100' : 'text-orange-700 bg-orange-100'
                  }`}>
                    {row.status}
                  </span>
                </td>
                <td className="px-4 py-3 text-sm">{row.owner}</td>
                <td className="px-4 py-3 text-xs">
                  <span className={`px-2 py-1 font-semibold leading-tight rounded-full ${
                    row.severity === 'High' ? 'text-red-700 bg-red-100' : 'text-yellow-700 bg-yellow-100'
                  }`}>
                    {row.severity}
                  </span>
                </td>
                <td className="px-4 py-3 text-sm">{row.created}</td>
                <td className="px-4 py-3 text-sm">{row.updated}</td>
                <td className="px-4 py-3 text-sm">{row.due}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
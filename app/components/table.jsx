import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
function List({ action, complains, role }) {
  return (
    <div className="w-4/5 h-auto mx-auto mt-14">
      {/* For Displaying any error messages */}
      {/* Assuming you have an Error component */}
      {/* <Error /> */}
      {role === "USER" && (
        <p className="text-3xl font-[Kaisei] mb-5">{action} your Complaints</p>
      )}
      {/* Table */}
      <div className="w-full rounded-lg">
        <div className="bg-white py-2 md:py-4 px-2 md:px-4 xl:px-5">
          <div className="sm:flex items-center justify-between">
            {/* Got to implement Filter Logics */}
            <div className="flex items-center">
              <Link
                to="/complaints/all"
                className="rounded-full focus:outline-none focus:ring-2 focus:bg-indigo-50 focus:ring-indigo-800"
              >
                <div className="py-2 px-8 bg-indigo-100 text-indigo-700 rounded-full">
                  All
                </div>
              </Link>
              <Link
                to="/complaints/open"
                className="rounded-full focus:outline-none focus:ring-2 focus:bg-indigo-50 focus:ring-indigo-800 ml-4 sm:ml-8"
              >
                <div className="py-2 px-8 text-gray-600 hover:text-indigo-700 hover:bg-indigo-100 rounded-full">
                  Open
                </div>
              </Link>
              <Link
                to="/complaints/closed"
                className="rounded-full focus:outline-none focus:ring-2 focus:bg-indigo-50 focus:ring-indigo-800 ml-4 sm:ml-8"
              >
                <div className="py-2 px-8 text-gray-600 hover:text-indigo-700 hover:bg-indigo-100 rounded-full">
                  Closed
                </div>
              </Link>
            </div>
            {/* Pagination */}
            {/* Assuming you have a pagination component */}
            {/* <Pagination /> */}
          </div>
          <div className="mt-5 table-responsive">
            <table className="border-collapse w-full">
              <thead>
                <tr>
                  <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300">
                    Complaint Title
                  </th>
                  <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300">
                    Description
                  </th>
                  <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300">
                    Status
                  </th>
                  <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300">
                    Actions
                  </th>
                </tr>
              </thead>
              {/* Displaying shared complain Data */}
              <tbody>
                {complains.map((complain) => (
                  <tr
                    className="bg-white lg:hover:bg-gray-50"
                    key={complain.id}
                  >
                    <td className="p-3 text-gray-800 border border-b text-center">
                      {complain.title.length > 50
                        ? `${complain.title.substring(0, 50)}..`
                        : complain.title}
                    </td>
                    <td className="p-3 text-gray-800 border border-b text-center">
                      {complain.body.length > 100
                        ? `${complain.body.substring(0, 100)}..`
                        : complain.body}
                    </td>
                    <td className="p-3 text-gray-800 border border-b text-center">
                      <span
                        className={`rounded ${
                          complain.status === "OPEN"
                            ? "text-green-500"
                            : "text-red-500"
                        } py-1 px-3`}
                      >
                        {complain.status}
                      </span>
                    </td>
                    <td className="p-3 text-gray-800 border border-b text-center">
                      <Link
                        to={`${complain.id}`}
                        className="text-blue-400 hover:text-blue-600 underline"
                      >
                        View
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default List;

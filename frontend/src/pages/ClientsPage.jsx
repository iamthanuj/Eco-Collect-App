import React, { useEffect, useState } from "react";
import EditeModal from "../components/EditeModal";
import { useDispatch, useSelector } from "react-redux";

function ClientsPage() {
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
  });

  const [editModalOpen, setEditModalOpen] = useState(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  const { firstName, lastName, phone, email } = userData;

  return (
    <div className="flex flex-col gap-3 ml-[300px]">
      <div>
        <button className="px-6 py-3 rounded-md bg-secendoryColor hover:bg-mainColor text-white font-bold">
          Add Client
        </button>
      </div>

      {/* display events list */}
      <div>
        <div>
          <div>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
              <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs uppercase bg-mainColor dark:bg-mainColor text-white">
                  <tr>
                    <th scope="col" className="px-6 py-3">
                      Name
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Phone
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Email
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Added date
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {/* {mentors.map((mentor) => {
                      return (
                        <tr
                          key={mentor._id}
                          className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700"
                        >
                          <th
                            scope="row"
                            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                          >
                            {mentor.name}
                          </th>
                          <td className="px-6 py-4">{mentor.email}</td>
                          <td className="px-6 py-4">{mentor.location}</td>
                          <td className="px-6 py-4">
                            {new Date(mentor.createdAt).toLocaleDateString()}
                          </td>
                          <td className="px-6 py-4 flex gap-2">
                            <button
                              onClick={() => handleEditClick(mentor, "edit")}
                              className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                            >
                              Edit
                            </button>
                            <button
                              onClick={() => handleEditClick(mentor, "delete")}
                              className="font-medium text-red-600 hover:underline"
                            >
                              Delete
                            </button>
                          </td>
                        </tr>
                      );
                    })} */}

                  <tr
                    //   key={mentor._id}
                    className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700"
                  >
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      udiya
                    </th>
                    <td className="px-6 py-4">asdasdasd</td>
                    <td className="px-6 py-4">asdasdasdasdasss</td>
                    <td className="px-6 py-4">GG/ss</td>
                    <td className="px-6 py-4 flex gap-2">
                      <button
                        //   onClick={() => handleEditClick(mentor, "edit")}
                        className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                      >
                        Edit
                      </button>
                      <button
                        //   onClick={() => handleEditClick(mentor, "delete")}
                        className="font-medium text-red-600 hover:underline"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ClientsPage;

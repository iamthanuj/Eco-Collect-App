import React, { useEffect, useState } from "react";
import EditeModal from "../components/EditeModal";
import AddClientModal from "../components/AddClientModal";
import { useDispatch, useSelector } from "react-redux";
import { getUsers, updateUser, deleteUser } from "../features/user/userSlice";
import { toast } from "react-toastify";

function ClientsPage() {
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [addModalOpen, setAddModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  const dispatch = useDispatch();

  const { users, isError, isSuccess, isLoading, message } = useSelector(
    (state) => state.user
  );

  useEffect(() => {
    dispatch(getUsers());
  }, [isSuccess]);

  console.log(users);

  //open addUser
  const handleOpenAdd = () => {
    setAddModalOpen(!addModalOpen);
  };

  // Function to open modal and set selected event
  const handleActionClick = (client, type) => {
    if (type === "edit") {
      setEditModalOpen(true);
      setDeleteModalOpen(false);
      setAddModalOpen(false);
    }

    if (type === "delete") {
      setDeleteModalOpen(true);
      setEditModalOpen(false);
      setAddModalOpen(false);
    }

    if (type === "add") {
      setDeleteModalOpen(false);
      setEditModalOpen(false);
      setAddModalOpen(true);
    }

    setSelectedUser(client);
  };

  // Function to close modal
  const handleCloseModal = () => {
    setEditModalOpen(false);
    setDeleteModalOpen(false);
    setAddModalOpen(false);
    setSelectedUser(null);
  };

  //update user
  const handleUpdateUser = async (updatedUser) => {
    console.log(updatedUser);

    const userData = {
      _id: updatedUser._id,
      updatedUserData: updatedUser,
    };
    dispatch(updateUser(userData));
    setEditModalOpen(false);
    if (isSuccess) {
      toast.success("Client Data Updated");
    }

    if (isError) {
      toast.error(message);
    }
  };

  //delete User
  const handleDeleteUser = async () => {
    const userId = selectedUser._id;
    dispatch(deleteUser(userId));
    setDeleteModalOpen(false);
    if (isSuccess) {
      toast.success("User Deleted");
    }

    if (isError) {
      toast.error(message);
    }
  };

  return (
    <div className="flex flex-col gap-3 ml-[300px] font-inter">
      <div>
        <h1 className="text-center font-bold text-4xl text-secendoryColor">
          Manage Clients
        </h1>
      </div>
      <div>
        <button
          onClick={handleOpenAdd}
          className="px-6 py-2 rounded-md bg-secendoryColor hover:bg-mainColor text-white font-bold"
        >
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
                  {users.map((user) => {
                    return (
                      <tr
                        key={user._id}
                        className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700"
                      >
                        <th
                          scope="row"
                          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                          {`${user.firstName} ${user.lastName}`}
                        </th>
                        <td className="px-6 py-4">{user.phone}</td>
                        <td className="px-6 py-4">{user.email}</td>
                        <td className="px-6 py-4">
                          {new Date(user.createdAt).toLocaleDateString()}
                        </td>
                        <td className="px-6 py-4 flex gap-2">
                          <button
                            onClick={() => handleActionClick(user, "edit")}
                            className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                          >
                            Edit
                          </button>
                          <button
                            onClick={() => handleActionClick(user, "delete")}
                            className="font-medium text-red-600 hover:underline"
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* Add popup modal */}
      {addModalOpen && (
        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div
              className="fixed inset-0 transition-opacity"
              aria-hidden="true"
            >
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>
            <span
              className="hidden sm:inline-block sm:align-middle sm:h-screen"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <AddClientModal onClose={handleCloseModal} />
            </div>
          </div>
        </div>
      )}

      {/* Edit popup modal */}
      {editModalOpen && (
        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div
              className="fixed inset-0 transition-opacity"
              aria-hidden="true"
            >
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>
            <span
              className="hidden sm:inline-block sm:align-middle sm:h-screen"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <EditeModal
                selectedUser={selectedUser}
                onUpdate={handleUpdateUser}
                onClose={handleCloseModal}
              />
            </div>
          </div>
        </div>
      )}

      {/* delete popup modal */}
      {deleteModalOpen && (
        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div
              className="fixed inset-0 transition-opacity"
              aria-hidden="true"
            >
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>

            <span
              className="hidden sm:inline-block sm:align-middle sm:h-screen"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <div className="inline-block align-bottom  rounded-lg text-left overflow-hidden  transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <div>
                <div className="relative p-4 w-full max-w-md max-h-full">
                  <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                    <button
                      onClick={handleCloseModal}
                      type="button"
                      className="absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                      data-modal-hide="popup-modal"
                    >
                      <svg
                        className="w-3 h-3"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 14 14"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                        />
                      </svg>
                      <span className="sr-only">Close modal</span>
                    </button>
                    <div className="p-4 md:p-5 text-center">
                      <svg
                        className="mx-auto mb-4 text-gray-400 w-12 h-12 dark:text-gray-200"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 20 20"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                        />
                      </svg>
                      <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                        Are you sure you want to remove this Client?
                      </h3>
                      <button
                        onClick={handleDeleteUser}
                        data-modal-hide="popup-modal"
                        type="button"
                        className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center"
                      >
                        Yes, I'm sure
                      </button>
                      <button
                        onClick={handleCloseModal}
                        data-modal-hide="popup-modal"
                        type="button"
                        className="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                      >
                        No, cancel
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ClientsPage;

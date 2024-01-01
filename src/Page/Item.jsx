import { useDispatch, useSelector } from "react-redux";
import { PencilIcon, TrashIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import Modal from "../Component/Modal";

function Item() {
  const dispatch = useDispatch();
  const { items } = useSelector((state) => state.item);
  const [editModalopen, seteditModalopen] = useState(false);

  const [viewModalopen, setViewModalopen] = useState(false);
  const [deleteModalOpen, setdeleteModalOpen] = useState(false);
  const [item, setItem] = useState({});

  console.log(items, "items");

  const handleEditPost = () => {
    dispatch({
      type: "UPDATE_ITEM",
      payload: {
        id: item?.id,
        body: {
          title: item?.title,
          description: item?.description,
        },
      },
    });
    seteditModalopen(false);
  };

  const handleDeletePost = () => {
    dispatch({
      type: "DELETE_ITEM",
      payload: {
        id: item?.id,
      },
    });
    setItem({});
    setdeleteModalOpen(false);
  };

  return (
    <>
      {editModalopen && (
        <Modal
          isEdit={true}
          onClickClose={() => seteditModalopen(false)}
          onClickSave={handleEditPost}
          titleOnChange={(e) => {
            setItem({
              ...item,
              title: e.target.value,
            });
          }}
          bodyOnChange={(e) => {
            setItem({
              ...item,
              description: e.target.value,
            });
          }}
          titleValue={item?.title}
          bodyValue={item?.description}
        />
      )}
      {
        viewModalopen && (
          <Modal
            isView={true}
            titleValue={item?.title}
            bodyValue={item?.description}
            onClickClose={() => setViewModalopen(false)}
          />
        )
      }
      {deleteModalOpen && (
        <Modal
          isDelete={true}
          onClickClose={() => setdeleteModalOpen(false)}
          onClickDelete={handleDeletePost}
        />
      )}
      <div className="flex flex-col bg-slate-50 h-screen">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <table className="min-w-full text-left text-sm font-light">
                <thead className="border-b font-medium dark:border-neutral-500">
                  <tr className="bg-sky-50">
                    <th scope="col" className=" px-6 py-4">
                      Title
                    </th>
                    <th scope="col" className="hidden sm:block px-6 py-4 ">
                      Description
                    </th>
                    <th scope="col" className="px-6 py-4 text-center">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {items.length > 0 &&
                    items?.map((item) => (
                      <tr
                        key={item?._id}
                        className="border-b dark:border-neutral-500"
                      >
                        <td className="text-ellipsis overflow-hidden w-2  max-w-[200px] lg:max-w-sm whitespace-nowrap px-6 py-4">
                          <div className="truncate ">{item?.title}</div>
                          <span className="sm:hidden flex space-x-2">
                            <span className="font-semibold text-gray-500">
                              Body:
                            </span>
                            <span className="truncate">
                              {item?.description}
                            </span>
                          </span>
                        </td>
                        <td className="hidden sm:block whitespace-nowrap text-ellipsis overflow-hidden sm:max-w-md xl:max-w-6xl px-6 py-4 truncate ">
                          {item?.description}
                        </td>
                        <td>
                          <div className="flex space-x-4 justify-center">
                            <svg
                               onClick={() => {
                                setViewModalopen(true);
                                setItem({
                                  id: item?._id,
                                  title: item?.title,
                                  description: item?.description,
                                });
                              }}
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth="1.5"
                              stroke="currentColor"
                              className="w-6 h-6"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                              />
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                              />
                            </svg>

                            <PencilIcon
                              onClick={() => {
                                seteditModalopen(true);
                                setItem({
                                  id: item?._id,
                                  title: item?.title,
                                  description: item?.description,
                                });
                              }}
                              className="w-5 h-5 cursor-pointer text-green-600 hover:text-green-500 gr"
                            />

                            <TrashIcon
                              onClick={() => {
                                setdeleteModalOpen(true);
                                setItem({
                                  id: item?._id,
                                });
                              }}
                              className="w-5 h-5 cursor-pointer text-red-600 hover:text-red-500"
                            />
                          </div>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Item;

import { useState } from "react";
import Modal from "./Modal";
import { useDispatch } from "react-redux";

function Header() {
  const dispatch = useDispatch();
  const [openModal, setopenModal] = useState(false);
  const [itemBody, setitemBody] = useState({ title: "", description: "" });

  const handleCreatePost = () => {
    dispatch({ type: "CREATE_ITEM", payload: itemBody });
    setopenModal(false);
    setitemBody({ title: "", description: "" });
  };

  return (
    <>
      {openModal && (
        <Modal
          isCreate={true}
          onClickClose={() => setopenModal(false)}
          onClickSave={handleCreatePost}
          titleOnChange={(e) => {
            setitemBody({
              ...itemBody,
              title: e.target.value,
            });
          }}
          bodyOnChange={(e) => {
            setitemBody({
              ...itemBody,
              description: e.target.value,
            });
          }}
        />
      )}

      <div className="bg-[#fff] w-screen h-12 shadow-md ">
        <div className="flex justify-between items-center h-full px-4">
          <div className="flex items-center justify-between w-full">
            <div className="flex items-center">
              <div className="text-2xl font-bold text-teal-700">Todo</div>
              <div className="text-2xl font-bold text-gray-400">App</div>
            </div>
            <div
              onClick={() => {
                setopenModal(true);
              }}
              className="flex bg-teal-700 hover:bg-teal-600 cursor-pointer px-2 py-1 rounded-md w-min text-white m-2"
            >
              Create
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;

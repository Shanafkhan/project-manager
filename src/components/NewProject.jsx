import { useRef } from "react";
import Input from "./Input";
import Modal from "./Modal";
export default function NewProject({ onAdd, onCancel }) {
  //create ref to get the input entered to store
  const title = useRef();
  const description = useRef();
  const dueDate = useRef();
  const modal = useRef();

  function handleSave() {
    //get the input enetered
    const enteredTitle = title.current.value;
    const enteredDescription = description.current.value;
    const enteredDueDate = dueDate.current.value;

    //validation for the empty input
    if (
      enteredTitle.trim() === "" ||
      enteredDescription.trim() === "" ||
      enteredDueDate.trim() === ""
    ) {
      modal.current.open();
      return;
    }

    //passing the input the function defined in the App.jsx through props
    onAdd({
      title: enteredTitle,
      description: enteredDescription,
      duedate: enteredDueDate,
    });
  }
  return (
    <>
      {/**adding a modal component for validation */}
      <Modal ref={modal} buttonCaption={"Okay"}>
        <h2 className="text-xl font-bold text-stone-700 my-4">Invalid Input</h2>
        <p className="text-stone-600 mb-4">
          oops.. looks like you entered a invalid input
        </p>
        <p className="text-stone-600 mb-4">
          please make sure you enter a valuable input
        </p>
      </Modal>
      <div className="w-[35rem] mt-16">
        <menu className="flex items-center justify-end gap-4 my-4">
          <li>
            <button
              className="text-stone-800 hover:text-stone-950 "
              onClick={onCancel}
            >
              Cancel
            </button>
          </li>
          <li>
            <button
              className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
              onClick={handleSave}
            >
              Save
            </button>
          </li>
        </menu>
        <div>
          <Input type="text" ref={title} label="title" />
          <Input ref={description} label="Description" textarea />
          <Input type="date" ref={dueDate} label="Due date" />
        </div>
      </div>
    </>
  );
}

import axios from "axios";
import React from "react";

function TodoList(props) {
  const { id, todoText } = props;
  function handleDel(e) {
    const todoID = id;
    //req del sending
    axios
      .delete(`api/todo/${id}`)
      .then((res) => {
        props.delFunc(res.data);
      })
      .catch((err) => console.log(err));
  }
  return (
    <div className=" row mt-4" id={props.id}>
      <div className="col-3">
        <input type={"checkbox"} className=" form-check-input me-5 mb-4" />
      </div>
      <div className="col-6">
        <span
          className=" input-group text-center border-bottom-0 "
          value={props.todoText}
          id={props.id}
          style={{ fontSize: "20px" }}
          //   onChange={handleChange}
        >
          {props.todoText}
        </span>
      </div>
      <div className="col-3">
        <span className="ms-md-5 ">
          <button onClick={handleDel} className="btn btn-danger btn-floating">
            <i class="fa-solid fa-trash"></i>
          </button>
        </span>
      </div>
      <hr />
    </div>
  );
}

export default TodoList;

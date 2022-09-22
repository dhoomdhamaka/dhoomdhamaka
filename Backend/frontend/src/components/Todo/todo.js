import axios from "axios";
import React, { useEffect, useState } from "react";
import TodoList from "./todoList";

function Todo() {
  const [todoTxt, settodoTxt] = useState();
  const [todoItem, setItemTodo] = useState([]);

  const tfd = [1, 2, 3, 4, 5];

  useEffect(() => {
    axios.get("api/todo").then((res) => {
      setItemTodo(res.data);
    });
  }, [0]);

  function handleText(e) {
    settodoTxt(e.target.value);
  }

  function delFunc(data) {
    const newTodos = todoItem.filter((item) => !(item._id === data._id));
    setItemTodo(newTodos);
  }

  function handleSubTodo(e) {
    e.preventDefault();
    axios.post("api/todo", { todoTxt }).then((res) => {
      console.log(res);
      setItemTodo((pv) => {
        return [...pv, res.data];
      });
      settodoTxt("");
    });
  }

  return (
    <div
      className=" bg-super-light pt-3 mt-5"
      style={{
        backgroundImage:
          "-webkit-linear-gradient(65deg, #A683E3 50%, #E4E9FD 50%)",
      }}
    >
      <div
        className="row justify-content-center "
        style={{ fontFamily: "helvetica neue" }}
      >
        <div className="col-md-10 mb-9 ">
          <div className="row justify-content-center">
            <div className="col-md-4">
              <div className=" card justify-content-center rounded-3 shadow-5-strong bg-secondary text-white">
                <div className=" card-header text-center">
                  <h3 className="fw-bold">TODO</h3>
                </div>
              </div>
              <div className="card shadow-5-strong rounded-5">
                <div className="card-body">
                  {todoItem.map((tds, i) => {
                    return (
                      <TodoList
                        key={i}
                        todoText={tds.todoText}
                        delFunc={delFunc}
                        id={tds._id}
                      />
                    );
                  })}

                  <div className="mt-4">
                    <form onSubmit={handleSubTodo}>
                      <input
                        // {...Todo("InpTodo")}
                        onChange={handleText}
                        value={todoTxt}
                        type={"text"}
                        className=" text-center fw-bolder fs-5"
                        placeholder="Add New Item"
                      />
                      <div class="d-grid gap-2 d-flex justify-content-end">
                        <button
                          type="submit"
                          className="btn btn-secondary btn-floating btn-lg"
                        >
                          <i class="fa-solid fa-plus fs-5 p-2"></i>
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="card shadow-2-strong">
            <hr />
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default Todo;

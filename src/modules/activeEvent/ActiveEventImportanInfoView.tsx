import React from "react";
import { EditableForm } from "../../components/joinder/event/EditableForm";
import { TodoObject } from "../../models/models";
import { AiOutlineMinusCircle, GoPlus } from "react-icons/all";

interface ActiveEventImportantInfoViewParams {
  todos: Array<TodoObject>;
  handleSaveValue: (result: string, id: number) => void;
  edit: boolean;
  handleAddTodo: () => void;
  handleDeleteTodo: () => void;
}

export const ActiveEventImportantInfoView = ({
  todos,
  handleSaveValue,
  edit,
  handleAddTodo,
  handleDeleteTodo,
}: ActiveEventImportantInfoViewParams): JSX.Element => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div
            className="container border"
            style={{ backgroundColor: "#f8f8f8" }}
          >
            <div className="row">
              <div
                className="col-sm-10 col-md-8 order-md-2 col-xs-8 "
                style={{ border: "0px solid gray" }}
              >
                <h3 >Lista de TO-DOS </h3>

                {edit ? (
                  <div>
                    <span className="pr-2">
                      <button
                        aria-label="Add Todo"
                        onClick={handleAddTodo}
                        type="button"
                        className=" btn-primary boton-circle"
                      >
                        <GoPlus />
                      </button>
                    </span>
                    <span>
                      <button
                        aria-label="Delete todo"
                        onClick={handleDeleteTodo}
                        type="button"
                        className="btn-danger boton-circle"
                      >
                        <AiOutlineMinusCircle />
                      </button>
                    </span>
                  </div>
                ) : (
                  <span />
                )}

                <div
                  className="mb-3"
                  style={{ color: "#337ab7", fontSize: "12" }}
                >
                  <div className="pt-2-">
                    {todos.map((todo: TodoObject) => (
                      <EditableForm
                        editable={todo.text}
                        id={todo.id}
                        key={todo.id}
                        edit={edit}
                        handleSaveValue={handleSaveValue}
                      />
                    ))}
                  </div>
                </div>
                <br />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

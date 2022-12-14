import "./styles.css";
import { Todo } from "../../components";

const List = ({ formValue, setFormValue }) => {
  const workingList = formValue.filter((item) => item.isDone === false);
  const doneList = formValue.filter((item) => item.isDone === true);

  return (
    <div className="list-container">
      <div className="list-title-content">
        <h2 className="list-title" area-label="Todo Title in Progress">
          π κ° λ³΄ μ κ³  π
        </h2>
        <dl>
          <dt className="sr-only">In Progress Todos Number</dt>
          <dd>
            {workingList.length
              ? `${workingList.length}κ° ν΄μΌν¨`
              : "ν κ±° μμλ€"}
          </dd>
        </dl>
      </div>
      <div className="list-wrapper">
        {workingList.map((item) => (
          <Todo
            todoItem={item}
            formValue={formValue}
            setFormValue={setFormValue}
          />
        ))}
      </div>
      <div className="list-title-content">
        <h2 className="list-title" area-label="Completed Todo Title">
          π₯ λ΄ κ° ν΄ λ π₯
        </h2>
        <dl>
          <dt className="sr-only">Completed Todos Number</dt>
          <dd>
            {doneList.length ? `${doneList.length}κ° ν΄λ` : "μμ§ μν΄λ"}
          </dd>
        </dl>
      </div>
      <div className="list-wrapper finish">
        {doneList.map((item) => (
          <Todo
            todoItem={item}
            formValue={formValue}
            setFormValue={setFormValue}
          />
        ))}
      </div>
    </div>
  );
};

export default List;

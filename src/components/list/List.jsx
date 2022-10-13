import "./styles.css";
import { Todo } from "../../components";

const List = ({ formValue, setFormValue }) => {
  const workingList = formValue.filter((item) => item.isDone === false);
  const doneList = formValue.filter((item) => item.isDone === true);

  return (
    <div className="list-container">
      <div className="list-title-content">
        <h2 className="list-title" area-label="Todo Title in Progress">
          😎 가 보 자 고 😎
        </h2>
        <dl>
          <dt className="sr-only">In Progress Todos Number</dt>
          <dd>
            {workingList.length
              ? `${workingList.length}개 해야함`
              : "할거 없음다"}
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
          🔥 내 가 해 냄 🔥
        </h2>
        <dl>
          <dt className="sr-only">Completed Todos Number</dt>
          <dd>
            {doneList.length ? `${doneList.length}개 해냄` : "아직 안해냄"}
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

import "./styles.css";

const Todo = ({ title, id, desc, isDone, formValue, setFormValue }) => {
  // 왜 그냥 item 으로 받으면 안되는거지?
  // title이 많이 찍히는 이유
  const handleDoneTodo = () => {
    const doneFormValue = [...formValue];
    doneFormValue.forEach((item, index) => {
      if (item.id === id) {
        doneFormValue[index].isDone = !isDone;
      }
    });
    setFormValue(doneFormValue);
  };

  const handleDeleteTodo = () => {
    let deleteFormValue = [...formValue];
    deleteFormValue = deleteFormValue.filter((item) => item.id !== id);
    setFormValue(deleteFormValue);
  };

  return (
    <div
      className="todo-container"
      style={{
        border: isDone ? "3px solid #6b95f8" : "3px solid #39f9bc",
      }}
    >
      <div className="todo-content">
        <h2 className="todo-title">{title}</h2>
        <div className="todo-desc">{desc}</div>
      </div>
      <div className="button-set">
        <button className="todo-delete-button" onClick={handleDeleteTodo}>
          삭제하기
        </button>
        <button
          className="todo-complete-button"
          onClick={handleDoneTodo}
          style={{
            border: isDone ? "3px solid #f46363" : "3px solid #6b95f8",
          }}
        >
          {isDone ? "취소" : "완료"}
        </button>
      </div>
    </div>
  );
};

export default Todo;

import "./styles.css";
import { List } from "../../components";
import { useState } from "react";

const Form = () => {
  const [formValue, setFormValue] = useState([]);
  const [title, setTitle] = useState("오늘의 할 일");
  const [desc, setDesc] = useState("밥먹기");
  const handelAddTodo = () => {
    /* 내용이 있을 경우 Todo 생성 */
    if (title && desc) {
      setFormValue([
        ...formValue,
        { title, desc, id: formValue.length + 1, isDone: false },
      ]);
      setTitle("");
      setDesc("");
    }
  };

  // useRef가 값을 기억한다...
  // useRef 두 개 만들기
  // 클릭했을때만 값을 기억하기

  return (
    <>
      <form className="add-form">
        <div className="input-group">
          <label className="form-label" htmlFor="title">
            제목
          </label>
          <input
            type="text"
            name="title"
            id="title"
            className="add-input input-body"
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            value={title}
            placeholder="15자 이내의 제목을 작성해주세요!"
            maxlength="15"
          />
          <label className="form-label" htmlFor="desc">
            내용
          </label>
          <input
            type="text"
            name="body"
            id="desc"
            className="add-input"
            onChange={(e) => {
              setDesc(e.target.value);
            }}
            onKeyPress={(e) => {
              if (e.key === "Enter") handelAddTodo();
            }}
            value={desc}
            placeholder="오늘의 할 일은?"
            maxlength="25"
          />
        </div>
        <button type="button" className="add-button" onClick={handelAddTodo}>
          추가
        </button>
      </form>
      <List formValue={formValue} setFormValue={setFormValue} />
    </>
  );
};

export default Form;

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { connect } from "react-redux";

export default function DemoUseDispatch() {
  const comments = useSelector((state) => state.FakebookReducer.comments);
  const dispatch = useDispatch();
  const [userComments, setUserComments] = useState({
    name: "",
    content: "",
    avatar: "",
  });

  const handleOnChangeInput = (e) => {
    let { name, value } = e.target;
    setUserComments({
      ...userComments,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    let usComment = {
      ...userComments,
      avatar: `https://i.pravatar.cc/150?u=${userComments.name}`,
    };
    let action = {
      type: "SUBMIT_COMMENT",
      userComments: usComment,
    };
    dispatch(action);
  };

  return (
    <div className="container">
      <h3>FACE APP</h3>
      <div className="card text-left">
        <div className="card-header">
          {comments.map((item, index) => {
            return (
              <div className="row mb-3" key={index}>
                <div className="col-1">
                  <img
                    className="card-img-top"
                    src={item.avatar}
                    style={{ width: "70px", height: "70px" }}
                    alt=""
                  />
                </div>
                <div className="col-11">
                  <h4 className="text-danger">{item.name}</h4>
                  <p>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
                </div>
              </div>
            );
          })}
        </div>
        <form
          onSubmit={(e) => {
            handleSubmit(e);
          }}
          className="card-body"
        >
          <div className="form-group mt-3">
            <h4 className="card-title">Name</h4>
            <input
              type="text"
              className="form-control"
              name="name"
              onChange={(e) => handleOnChangeInput(e)}
            />
          </div>
          <div className="form-group mt-3">
            <h4 className="card-title">Content</h4>
            <input
              type="text"
              className="form-control"
              name="content"
              onChange={(e) => handleOnChangeInput(e)}
            />
          </div>
          <div className="form-group mt-3">
            <button className="btn btn-success">Send</button>
          </div>
        </form>
      </div>
    </div>
  );
}
// const mapStateToProps = (state) => {
//   return {
//     comments: state.FakebookReducer.comments,
//   };
// };
// export default connect(mapStateToProps, null)(DemoUseDispatch);

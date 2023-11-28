import React, { useState } from "react";
import UserForm from "./UserForm";
import UserProfile from "./UserProfile";
import "./BaiTapValidateForm.css";

export default function BaiTapValidateForm() {
  const [isEditMode, setIsEditMode] = useState(false);
  const changeIsEditMode = () => {
    setIsEditMode(true);
  };
  const changeFalseEditMode = () => {
    setIsEditMode(false);
  };

  return (
    <div>
      <UserForm
        isEditMode={isEditMode}
        changeFalseEditMode={changeFalseEditMode}
      />
      <UserProfile changeIsEditMode={changeIsEditMode} />
    </div>
  );
}

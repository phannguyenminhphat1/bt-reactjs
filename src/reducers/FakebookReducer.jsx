const stateDefault = {
  comments: [
    {
      id: 1,
      name: "Yno comment",
      avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
      content: "",
    },
    {
      id: 2,
      name: "Anonymous",
      avatar: "https://i.pravatar.cc/150?u=mias",
      content: "",
    },
    {
      id: 3,
      name: "Dont know",
      avatar: "https://i.pravatar.cc/150?u=wis",
      content: "",
    },
  ],
};

export const FakebookReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case "SUBMIT_COMMENT":
      let newComments = [...state.comments, action.userComments];
      state.comments = newComments;
      console.log(state.comments);

      return { ...state };

    default:
      return { ...state };
  }
};

export const Change = () => {
  console.log("change");
  return {
    type: "CHANGE",
  };
};
export const Not_change = () => {
  console.log("not change");
  return {
    type: "NOT_CHANGE",
  };
};

export const Click = (payload) => {
  console.log("clicked from redux");
  console.log(payload);
  return {
    type: "CLICKED",
    payload,
  };
};

const FileMapping = (state = 0, action) => {
  console.log("from store");

  switch (action.type) {
    case "CHANGE":
      console.log("from CHANGE");
      return state + "something something something";

    case "NOT_CHANGE":
      console.log("from NOT_CHANGE");
      return state + "askdmaskmdkasmdmaskdmkasmdkasmkdaskdksamdk";
    default:
      return state;
  }
};
export default FileMapping;

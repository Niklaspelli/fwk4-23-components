const HeadLines = ({login, register, toDo, newTask, deleteTask, }) => {

  // test commit
  return (
    <>
      <h1>{login}</h1>
      <h1>{register}</h1>
      <h2>{toDo}</h2>
      <h3>{newTask}</h3>
      <h3>{deleteTask}</h3>
    </>
  );
};
export default HeadLines;

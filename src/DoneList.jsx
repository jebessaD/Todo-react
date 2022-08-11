const DoneFunction = ({ todos }) => {
  return (
    
    <div>
            <h1 className="text-2xl font-bold text-green-500 my-4 shadow-md py-4 text-center">DONE LIST</h1>

      {todos.map((todo) => {
        if (todo.status === "Done") {
          return (
            <div className="p-4 bg-gray-100 m-2 mx-5" key={todo.id}>
              <div className="text-start text-xl text-gray-800 font-semibold uppercase">{todo.title}</div>
              <div className="text-start normal-case first-letter:uppercase">{todo.body}</div>
              <div className="text-start text-gray-600 capitalize">{todo.date}</div>
            </div>
          );
        }
      })}
    </div>
  );
};

export default DoneFunction;

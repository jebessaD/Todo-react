import { Link } from "react-router-dom";

const DoneList = ({ todos, isPending, error }) => {
  return (
    <div>
      <div>
        {error && (
          <div className="text-center text-2xl text-red-400 font-semibold">
            {error}
          </div>
        )}

        {isPending && (
          <div className="text-center text-2xl font-semibold">LOADING....</div>
        )}

        {todos && (
          <div>
            <h1 className="text-2xl font-bold text-green-500 my-4 shadow-md py-4 text-center">
              DONE LIST
            </h1>

            <div className="grid grid-cols-2 mx-10">
              {todos.map((todo) => {
               if(todo.status==="done"){
                 return (
                  <Link key={todo.id} to={`/todos/${todo.id}`}>
                    <div
                      className={`p-4 border-l-4 border-green-600 m-2 bg-neutral-100 rounded-r`}
                    >
                      <div className="text-start break-words text-xl text-gray-800 font-semibold uppercase">
                        {todo.title}
                      </div>
                      <div className="text-start break-words normal-case first-letter:uppercase">
                        {todo.body}
                      </div>
                      <div className="text-start text-gray-600 capitalize">
                        {todo.date}
                      </div>
                    </div>
                  </Link>
                );
               }
               
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DoneList;

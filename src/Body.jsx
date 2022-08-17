import { Link } from "react-router-dom";


const Body = ({ todos }) => {
  
  var status_color ="green"


  return (
    <div className="">
      <h1 className="text-2xl font-bold shadow-sm text-neutral-700 py-4 text-center">
        ON TODO LIST
      </h1>
     
      <hr />
      <div className="grid grid-cols-2 mx-10">
        {todos.map((todo) => {

          if(todo.status==="pending"){
            status_color="border-yellow-500"
            // console.log(status_color);
          }else if(todo.status==="done"){
            status_color="border-green-600"
          }
          else{
            // console.log("cant enter");
            status_color="border-red-600"
          }

          return (
            <Link key={todo.id} to={`/todos/${todo.id}`}>
              <div className={`p-4 border-l-4 ${status_color} m-2 bg-neutral-100 rounded-r`}>
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
        })}
      </div>
    </div>
  );
};

export default Body;

import { Link } from "react-router-dom";

const OnProgress = ({ todos }) => {
  
  var status = "green"


  return (
    <div className="">
      <h1 className="text-2xl font-bold shadow-sm text-neutral-700 py-4 text-center">
        ON TODO LIST
      </h1>
      <div className="mx-5 border-l-4 p-2 text-center my-4 border-neutral-600">
        <p className="text-lg">“Each day I will accomplish one thing on my to do list.”</p>
        <p className="text-gray-600">― Lailah Gifty Akita</p>
      </div>
      <hr />
      <div className="grid grid-cols-2 mx-10">
        {todos.map((todo) => {
          var today = new Date();
          var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
          var date3= today.
          // console.log(date);
          // console.log((todo.date,"aaaaaaa"));
          var d1 = Date.parse(todo.date);
          var d2 = Date.parse(date);
          
          if(date > todo.date){
            status="red"
            console.log("hellllp");
            console.log(status);
          }else{
            console.log("cant enter");
          }
          return (
            <Link key={todo.id} to={`/todos/${todo.id}`}>
              <div className={`p-4 border-l-2 border-${status}-700 bg-gray-100 m-2 rounded-r`}>
                <div className="text-start text-xl text-gray-800 font-semibold uppercase">
                  {todo.title}
                </div>
                <div className="text-start break-words normal-case first-letter:uppercase">
                  {todo.body}
                </div>
                <div className="text-start text-gray-600 capitalize">
                  {todo.date}
                </div>
                <div className="text-start text-gray-600 capitalize">
                  {date3}
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default OnProgress;

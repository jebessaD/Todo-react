import { useParams,history, useHistory } from "react-router-dom";
import useFetch from "./useFetch";

const TodoDetail = () => {
  const { id } = useParams();
  const history = useHistory()
  const {
    data: todo,
    isPending,
    error,
  } = useFetch("http://localhost:8000/todos/" + id);
  const handleDelete=()=>{
    fetch("http://localhost:8000/todos/" + id,{
        method:"DELETE"
    }).then(()=>{
        console.log("deleted");
        history.push("/")
    })
  }

  return (
    <div>
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {todo && (
        <div className="">
          <div className= "p-4 bg-gray-100 m-4 rounded  text-center mt-10 text-3xl my-2 text-gray-800 font-semibold uppercase">
            {todo.title}
          </div>
          <div className="p-4 border-l-8 border-green-500 bg-gray-100 m-4 rounded items-center  flex justify-between text-center">
            <div className="">
            <div className="text-start text-lg normal-case first-letter:uppercase">
              {todo.body}
            </div>
            <div className="text-start text-gray-600 capitalize">
              {todo.date}
            </div>
          </div>
          <div onClick={handleDelete} className="bg-red-500 p-2 cursor-pointer rounded-lg mx-5 text-white">Delete</div>
          </div>
          
        </div>
      )}
    </div>
  );
};

export default TodoDetail;

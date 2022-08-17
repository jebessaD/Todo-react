import { useState } from "react";
import { useHistory,useLocation } from "react-router-dom";
import { format } from "date-fns";


const Update = () => {
  const location = useLocation();
  
  // var title_value=""
  // var body_value=""
 console.log(location.state.id)
//   if(location.state!=undefined){
    const title_value=location.state.title
//   }
//   if(location.state!=undefined){
    const body_value=location.state.title
//   }
  // // console.log(location.state.title);
  // console.log(location.state.body);
  // console.log(location.state.title);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  // const [date, setDate] = useState("");
  const [time, setTime] = useState({ date: "", status: "" });
  const history = useHistory();
  const handleSubmit = (e) => {
    // console.log(date, "date");
    e.preventDefault();

    const todo = { title:title_value, body:body_value, date:time.date, id:"id_value", status:time.status };
    // console.log(todo);
    fetch("http://localhost:8000/todos/", {
      method: "PUT",

      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(todo),
    }).then(() => {
      console.log("successful");
      history.push("/");
    });
  };

  return (
    <div className="p">
      <h1 className="uppercase text-3xl text-center font-semibold py-4">
        Update new Todo
      </h1>
      <form
        className="md:w-2/3 w-4/5 mx-auto p-8 bg-neutral-100"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col mb-4">
          <label className="py-1">Title</label>
          <input
            required
            value={title_value}
            onChange={(e) => setTitle(e.target.value)}
            className="p-2 outline-0 bg-white focus:border-r-2 border-green-500 hover:bg-neutral-50"
            type="text"
          />
        </div>
        

        <div className="flex flex-col mb-4">
          <label className="py-1">Body</label>
          <textarea
          value={body_value}

            required
            onChange={(e) => setBody(e.target.value)}
            className="p-2 outline-0 bg-white focus:border-r-2 border-green-500 hover:bg-neutral-50"
            rows="4"
            type="text"
          ></textarea>
        </div>

        <div className="flex flex-col mb-4">
          <label className="py-1">Date</label>
          <input
            required

            onChangeCapture={(e) => {
              const today = format(Date.now(), "yyyy-MM-dd", {
                awareOfUnicodeTokens: true,
              });
              console.log(e.target.value,"direct selcted");
              console.log(today,"todeay selcted");

              if(e.target.value >= today){
                setTime({ date: e.target.value,  status: "pending" });
                // console.log(time.date,"date");
                // console.log(today,"today")
                console.log(time.status);
              }else{
                setTime({ date: e.target.value, status: "missed" });
                console.log(time.status);


              }



              // if (today > time.date) {
                
              //   // console.log("peeendinggggggggggg");

              //   console.log(time.status, "whyyyyyyyyyyyyyyyyyyyyyyy");

              //   // console.log(status);
              // } 
            }}
            className="p-2 outline-0 bg-white focus:border-r-2 border-green-500 hover:bg-neutral-50"
            type="date"
          />
        </div>
        <div>
          <button className="bg-neutral-800 text-white w-full py-2 rounded-md my-4">
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default Update;
// title":"title here 22222",
//             "body": "todo body here",
//             "date":"july,292022",
//             "status":"Missed",
//             "reminder":"true",
//             "id"

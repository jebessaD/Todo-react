
import Main from "./Main";
import Body from "./Body";

const Home = ({todos,isPending,error}) => {

  return (
      <div>
        {error && (
          <div className="text-center text-2xl text-red-400 font-semibold">
            {error}
          </div>
        )}

        {isPending && (
          <div className="text-center text-2xl font-semibold">LOADING....</div>
        )}



        {todos &&  <Body todos={todos} />}
      </div>
  );
};

export default Home;

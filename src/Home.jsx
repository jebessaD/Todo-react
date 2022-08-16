
import Main from "./Main";
import OnProgress from "./OnProgress";

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



        {todos &&  <OnProgress todos={todos} />}
      </div>
  );
};

export default Home;

import { useFetch } from "../../hooks/useFetch";

// styles
import "./Home.css";

// components
import RecipeList from "../../components/RecipeList/RecipeList";

const Home = () => {
  const { data, isPending, error } = useFetch("http://localhost:3000/recipes");
  console.log(data);
  return (
    <div className="home">
      {error && <p className="error">{error}</p>}
      {isPending && <p className="laoding">Loading...</p>}
      {data && <RecipeList recipes={data} />}
    </div>
  );
};

export default Home;

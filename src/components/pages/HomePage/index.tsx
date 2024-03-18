import { Link } from "react-router-dom"

const Home = () => {
  return(
    <>
      <h1>Home page</h1>
      <Link to={"/outra"}>Other page</Link>
    </>
  )
}

export default Home
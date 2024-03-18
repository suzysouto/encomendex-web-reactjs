import { Link } from "react-router-dom"

const ThirdPage = () => {
  return(
    <>
      <h1>Third page</h1>
      <Link to={"/"}>Home page</Link>
      <Link to={"/outra"}>Another page</Link>
    </>
  )
}

export default ThirdPage
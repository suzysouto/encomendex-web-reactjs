import { Link } from "react-router-dom"

const AnotherPage = () => {
  return(
    <>
      <h1>Another page</h1>
      <Link to={"/"}>Home page</Link>
      <Link to={"/terceira"}>Third page</Link>
    </>
  )
}

export default AnotherPage
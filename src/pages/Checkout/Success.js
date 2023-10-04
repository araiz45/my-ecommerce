import { Link } from "react-router-dom";

const Success = () => {
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="card w-96 bg-primary text-primary-content">
        <div className="card-body">
          <h2 className="card-title">Congrulations!</h2>
          <p>You have successfully completed transaction</p>
          <div className="card-actions justify-end">
            <Link className="btn" to={"/"}>Buy more</Link>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Success;
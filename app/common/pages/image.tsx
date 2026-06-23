import { Link } from "react-router";
import myimg from "../../uploads/file_0.jpg";
import myimg2 from "../../uploads/file_1.jpeg";

export default function Sexy() {
  return (
    <div className="flex">
      <div className="flex justify-center mt-15 size-lvh">
        <img src={myimg} />
        <Link to="/">Back</Link>
      </div>
      <div className="flex justify-center mt-15 size-lvh">
        <img src={myimg2} />
        <Link to="/">Back</Link>
      </div>
    </div>
  );
}

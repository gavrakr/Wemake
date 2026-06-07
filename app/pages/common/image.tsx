import { Link } from "react-router";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "~/common/components/ui/avatar";

export default function Sexy() {
  return (
    <>
      <div className="flex justify-center mt-15 size-lvh">
        <img src="../uploads/file_0.jpg" />
        <Link to="/">Back</Link>
      </div>
    </>
  );
}

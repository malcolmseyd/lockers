import { useLoaderData, useNavigate } from "react-router-dom";
import type { LockerStatus } from "../../types";
import Button from "../Button";
import { Back } from "../Back";

type Props = {
  name: string;
  locker: string;
  status: LockerStatus;
};

export function Locker() {
  const navigate = useNavigate();
  const { name, locker, status } = useLoaderData() as Props;

  var statusContents: JSX.Element;
  switch (status) {
    case "available":
      statusContents = (
        <span className="font-bold text-sm p-1 rounded text-neutral-800 bg-neutral-200">
          Available
        </span>
      );
      break;
    case "claimed":
      statusContents = (
        <span className="font-bold text-sm p-1 rounded text-green-800 bg-green-200">
          Claimed
        </span>
      );
      break;
    case "expired":
      statusContents = (
        <span className="font-bold text-sm p-1 rounded text-red-800 bg-red-200">
          Expired
        </span>
      );
      break;
  }

  return (
    <div className="w-full max-w-sm flex flex-col items-center align-middle gap-2">
      <Back />
      <h1 className="text-2xl font-bold">Locker {locker}</h1>
      <p>
        <b>Registered for</b>: {name}
      </p>
      <p>
        <b>Status</b>: {statusContents}
      </p>
      <hr className="w-full border-0 my-2" />
      {status === "expired" && <Button>Renew registration</Button>}
      <Button onClick={() => navigate("./transfer")}>
        Transfer to a different email
      </Button>
      <Button onClick={() => navigate("./deregister")}>
        Deregister locker
      </Button>
    </div>
  );
}
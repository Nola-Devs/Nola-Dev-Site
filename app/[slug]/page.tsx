"use client";
import { usePathname } from "next/navigation";
import org from "../organizations.json";
import { Organizations } from "../types/Organizations";
export default function Group() {
  const location: any = usePathname().slice(1);
  console.log(org[location]);
  return (
    <>
      <h1>{location}</h1>
      <h2>About</h2>
      <p>{org[location].about}</p>

      <h2>Organizers</h2>
      <p>
        {org[location].organizers.map((e) => (
          <div>
            <img src={e.pfp} width={100} />
            <p>{e.name}</p>
          </div>
        ))}
      </p>
    </>
  );
}

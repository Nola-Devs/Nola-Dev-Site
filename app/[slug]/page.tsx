"use client";
import { usePathname } from "next/navigation";
import org from "../organizations.json";
import { Organizations } from "../types/Organizations";

const organizations: Organizations = org;

export default function Group() {
  const location: string = usePathname().slice(1);
  console.log(organizations[location]);
  return (
    <>
      <h1>{location}</h1>
      <h2>About</h2>
      <p>{organizations[location].about}</p>

      <h2>Organizers</h2>
      <p>
        {organizations[location].organizers.map((e, i) => (
          <div key={i}>
            <img src={e.pfp} width={100} />
            <p>{e.name}</p>
            {Object.keys(e.links).map(e =>
              e
              )}
          </div>
        ))}
      </p>
    </>
  );
}

"use client";
import { usePathname } from "next/navigation";
import org from "../organizations.json";
export default function Group() {
  const location: any = usePathname().slice(1);
  console.log(org[location]);
  return (
    <>
      <h1>{location}</h1>
      <h1>About</h1>
      <p>{org[location].about}</p>

      <h1>Organizers</h1>
      <p>
        {org[location].organizers.map((e) => (
          <div>
            
            <p>{e.name}</p>
          </div>
        ))}
      </p>
    </>
  );
}

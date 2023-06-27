"use client";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { Organizations } from "../types/Organizations";
import org from "../organizations.json";

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
            <Image src={e.pfp} alt="organizer profile picture" width={100} />
            <p>{e.name}</p>
          </div>
        ))}
      </p>
    </>
  );
}

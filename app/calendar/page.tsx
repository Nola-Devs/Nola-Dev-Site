"use client";
import { Card } from "@nextui-org/react";

export default function Calendar() {
  return (
    <Card variant='bordered' css={{ mw: "800px", margin: "50px auto" }}>
      <Card.Body>
        <iframe
          src='https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23666666&00ctz=America%2FChicago&title=Nola%20Dev%20Events&showTabs=1&showPrint=0&showNav=1&src=ZDhhZWY0N2MxODk1YWJiMzE3NmFkMzQ1NzdkZTNjOTdmMWFkZWE5MWRhMjE2OWE2NWUxZTFiMWMyOGM1NmUxY0Bncm91cC5jYWxlbmRhci5nb29nbGUuY29t&src=NGE0MjQ3ZTExYjI1ZmRjZTY3NWEzMmRhNzI1MmZiYTBjZTcyOGY2YWUwZWM0NzYxNmYyZGUwMzM1OTJlODVjOUBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&src=MWMyM2Q3ZmUxNDg0MGUzMjBlYzA3NjIyNDViZjU1Y2MzMmE2OTEwNDE3ZmNmNzZjYThiYTJkMWEzMDgxMTBmM0Bncm91cC5jYWxlbmRhci5nb29nbGUuY29t&src=ZDJjZTEzZDU2MDhhZWJlMGZmN2QzYmNlYzVlYTU4MWZlYThjYTI0ZDY2ZTVmNjVjMTEyZThjYzNkYWJkYmVjMUBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&src=Y184MTdwc3A1ZW1sZ2g4dmdnNDMydWRydHYyMEBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&color=%23666666&color=%23666666008&color=%23EF6C00&color=%234285F4&color=%2366666600'
          width='100%'
          height='600'
        ></iframe>
      </Card.Body>
    </Card>
  );
}

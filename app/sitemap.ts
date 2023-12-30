import { MetadataRoute } from "next";
import { organizationsStore } from "./data/organizations";

export default function sitemap(): MetadataRoute.Sitemap {
  const url = "https://noladevs.org";

  return [
    {
      url: url,
      lastModified: new Date(),
    },
    {
      url: `${url}/calendar`,
      lastModified: new Date(),
    },
    ...Object.keys(organizationsStore).map((e) => {
      return {
        url: `${url}/${e}`,
        lastModified: new Date(),
      };
    }),
  ];
}

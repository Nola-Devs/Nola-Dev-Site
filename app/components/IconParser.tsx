import {
  LinkedinOutlined,
  MailOutlined,
  GithubOutlined,
  GlobalOutlined,
  LinkOutlined,
  TwitterOutlined,
} from "@ant-design/icons";

import { iconProps } from "../types/index";

export default function IconParser({ icon, linkToIcon }: iconProps) {
  switch (icon) {
    case "linkedin":
      return (
        <a
          href={ linkToIcon }
          target="_blank"
          rel="noreferrer"
        >
          <LinkedinOutlined />
        </a>
      );
    case "github":
      return (
        <a
          href={ linkToIcon }
          target="_blank"
          rel="noreferrer"
        >
          <GithubOutlined />
        </a>
      );
    case "twitter":
      return (
        <a
          href={ linkToIcon }
          target="_blank"
          rel="noreferrer"
        >
          <TwitterOutlined />
        </a>
      );
    case "email":
      return (
        <a
          href={ `mailto:${linkToIcon}` }
          target="_blank"
          rel="noreferrer"
        >
          <MailOutlined />
        </a>
      );
    case "portfolio":
      return (
        <a
          href={ linkToIcon }
          target="_blank"
          rel="noreferrer"
        >
          <GlobalOutlined />
        </a>
      );
    default:
      return (
        <a
          href={ linkToIcon }
          target="_blank"
          rel="noreferrer"
        >
          <LinkOutlined />
        </a>
      );
  }
}

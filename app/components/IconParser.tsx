import TwitterOutlined from "@ant-design/icons/TwitterOutlined";
import LinkOutlined from "@ant-design/icons/LinkOutlined";
import GlobalOutlined from "@ant-design/icons/GlobalOutlined";
import GithubOutlined from "@ant-design/icons/GithubOutlined";
import LinkedinOutlined from "@ant-design/icons/LinkedinOutlined";
import MailOutlined from "@ant-design/icons/MailOutlined";
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

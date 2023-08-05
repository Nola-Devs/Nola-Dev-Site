# Nola Dev's Site

## This application hosts individual group sites, events, and contact information for the following New Orleans-based Software Development and Design groups:
- [Agile Nola](https://www.eventbrite.com/o/agile-nola-59051586693)
- [Hack Night](https://www.meetup.com/nolahacknight/)
- [Below C Level](https://www.meetup.com/below-c-level-systems-programming-meetup/)
- [#FrontEndParty](http://www.frontendparty.com/)
- [Nola Game Devs](http://neworleansgamedev.com/)
- A.I. Hacking In Nola
- Work In Tech

## To Start Project

```
npm i
npm run dev
```

## UI

This project uses [NextUI](https://nextui.org/docs/guide/getting-started) for its UI Component Library. For simple UI changes it would be best to follow NextUI conventions and use their components. However, we also want to allow for New Orleans contributors to "sandbox" with this project, so feel free to install dependencies that you want to experiment with. Please document those installations in your PR.

## Contribute

Join our [Discord](https://discord.gg/bvrS72gaKS)

This project is open-source, however, pull and merge requests will be limited to developers limited to the geographic region of Greater New Orleans and surrounding areas. If you reside in or around NOLA please feel free to add whatever supporting information or custom styling you feel would benefit our local community's represenation.

If you reside in or around NOLA consider this community website a deployed sandbox environment. PRs will be scrutinized by one of the four original Contributors: @austinchaet @codingMustache @colinwilliams91 @HeyImKyle

### Contribution Protocol:

_we have transitioned away from [a forking workflow](https://www.atlassian.com/git/tutorials/comparing-workflows/forking-workflow) to a [forkless/trunk feature-branch hybrid git workflow](https://www.atlassian.com/git/tutorials/comparing-workflows/feature-branch-workflow)_

- ~~Star and Fork the repository~~
- Clone down the organization's repo as your `origin` ("the trunk" | "the org repo" | "org remote" | "origin")
- Create or pick up a "ticket" from our [GitHub Issues](https://github.com/Nola-Devs/Nola-Dev-Site/issues)
  - Create a branch directly from that ticket's full view on GitHub
- Fetch from `origin main` in your IDE and checkout your new feature-branch which should share the same name as the issuing ticket
- Use [Semantic Commit-Messages](https://gist.github.com/joshbuchea/6f47e86d2510bce28f8e7f42ae84c716) for feature development
- Push your feature-branch to the trunk remote `git push origin feature/ticket-branch`
- PR to main for Code Review
  - We will review <= 48 hours
- Merge your approved PR branch to main or revise and repeat

_if your code has linting errors please run `npm run lint -- --fix` :)_

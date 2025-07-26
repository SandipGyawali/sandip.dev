import { linkedinUsername, username } from "@/constants/strings";

const linksMetadata = {
  x: "https://x.com/" + username + "3",
  linkedin: "https://linkedin.com/in/" + linkedinUsername,
  github: "https://github.com/" + username,
  upwork: "https://www.upwork.com/freelancers/~01b85901ff427f5579",
  youtube: "https://youtube.com/@" + username,
};

export const sourceCode = linksMetadata.github;

export default linksMetadata;

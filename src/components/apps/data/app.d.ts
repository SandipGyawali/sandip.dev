type AppItemType = {
  title: string;
  description: string;
  company?: string;
  location?: string;
  icon?: string;
  image: string;
  path: string;
  keywords?: string[];
  tags: string[];
  hasBorder?: boolean;
  link?: string;
  appstore?: string;
  playstore?: string;
  github?: string;
  pub?: string;
  imageClassName?: string;
};

export default AppItemType;

type AppEducationItemType = {
  title: string;
  description: string;
  time: string;
  location: string;
  image: string;
  path: string;
};

export { AppEducationItemType };

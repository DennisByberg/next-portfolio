import LINKS_DATA from "../data/linksData";

export type TSectionName = (typeof LINKS_DATA)[number]["name"];

export type TExperienceItem = {
  id: string;
  title: string;
  organization: string;
  dateRange: string;
  isActive: boolean;
  isEducation: boolean;
};

export interface TimelineItemType {
  month: string;
  year: number;
  title: string;
  description: string;
}

export interface NavContactType {
  href: string;
  icon: string;
}

export interface NavLinkType {
  title: string;
  url: string;
  newTab?: boolean;
}
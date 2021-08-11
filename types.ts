export interface TimelineItemType {
  month: string;
  year: number;
  title: string;
  description: string;
}

export interface ContactLinkType {
  href: string;
  icon: string;
  title: string;
}

export interface NavLinkType {
  title: string;
  url: string;
  newTab?: boolean;
}

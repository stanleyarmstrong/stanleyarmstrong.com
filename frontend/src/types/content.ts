export interface SocialLink {
  name: string;
  url: string;
  icon?: string;
  hoverColor?: string;
}

export interface Experience {
  company: string;
  role: string;
  description: string[];
}

export interface Service {
  title: string;
  idealFor?: string;
  cadence?: string;
  reviews: Review[];
  description: string[];
  tools?: string[];
  focusAreas?: string[];
}

export interface Review {
  content: string;
  author: string;
}
export interface ContentData {
  name?: string;
  navItems?: string[];
  intro?: string[];
  proof?: string[];
  services?: Service[];
  experience?: Experience[];
  socials?: SocialLink[];
}

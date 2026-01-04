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
  description: string[];
  tools: string[];
}

export interface ContentData {
  name?: string;
  navItems?: string[];
  services?: Service[];
  experience?: Experience[];
  socials?: SocialLink[];
}

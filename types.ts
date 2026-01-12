
export interface ExperienceItem {
  period: string;
  role: string;
  company: string;
  description?: string;
}

export interface PortfolioData {
  name: string;
  role: string;
  specialties: string[];
  city: string;
  email: string;
  linkedin: string;
  bio: string;
  experience: ExperienceItem[];
}

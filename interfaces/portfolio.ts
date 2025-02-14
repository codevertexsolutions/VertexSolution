export interface Portfolio {
  id: number;
  title: string;
  category: string;
  date: string;
  cover: string;
  link: string;
}

export interface Portfolios {
  title: string;
  portfolios: Portfolio[]; // Changed from porfolios to portfolios
}
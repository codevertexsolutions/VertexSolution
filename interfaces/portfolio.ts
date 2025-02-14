export interface Portfolios {
  title: string;
  porfolios: Portfolio[];
}

export interface Portfolio {
  title: string;
  url: string;
  image: string;
  id: number;
  cover: string;
  link: string;
  date: string;
  category?: string;
  techStack?: string[];
}

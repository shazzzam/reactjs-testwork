export type linkId = 'about' | 'home';

export interface LinkType {
  id: linkId;
  to: string;
  name: string;
}

export interface CourseType {
  ccy: string;
  base_ccy: string;
  buy: string;
  sale: string;
}

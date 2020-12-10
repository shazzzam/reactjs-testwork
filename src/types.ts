export type linkId = 'about' | 'home';

export interface LinkType {
  id: linkId;
  to: string;
  name: string;
}

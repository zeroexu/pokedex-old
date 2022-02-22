import { universalLink } from '@/types/universalLink';

export interface pokemon {
  id: number;
  name: string;
  img: string;
  types: universalLink[];
}
export interface Characters {
  id: number;
  name: string;
  species: string;
  gender: string;
  status: string;
  location: Location;
  episodes: string[];
  image: string;
  created: string;
}

interface Location {
  name: string;
  url: string;
}

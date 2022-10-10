export interface Character {
  id: number;
  name: string;
  species: string;
  gender: string;
  status: string;
  location: Location;
  episode: string[];
  image: string;
  created: string;
}

interface Location {
  name: string;
  url: string;
}

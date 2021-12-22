export interface Restaurant {
  _id: string;
  name: string;
  address: string;
  picture: string;
  openingHours: OpeningHours;
}

export class OpeningHours {
  monday: OpeningHoursMeta;
  tuesday: OpeningHoursMeta;
  wednesday: OpeningHoursMeta;
  thursday: OpeningHoursMeta;
  friday: OpeningHoursMeta;
  saturday: OpeningHoursMeta;
  sunday: OpeningHoursMeta;
}

export class OpeningHoursMeta {
  from: number;
  to: number;
}

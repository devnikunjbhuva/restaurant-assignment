import { Schema } from "mongoose";

const OpeningHoursMeta: Schema = new Schema({
  from: {
    type: Number,
  },
  to: {
    type: Number,
  },
});

const OpeningHoursSchema: Schema = new Schema({
  monday: {
    type: OpeningHoursMeta,
  },
  tuesday: {
    type: OpeningHoursMeta,
  },
  wednesday: {
    type: OpeningHoursMeta,
  },
  thursday: {
    type: OpeningHoursMeta,
  },
  friday: {
    type: OpeningHoursMeta,
  },
  saturday: {
    type: OpeningHoursMeta,
  },
  sunday: {
    type: OpeningHoursMeta,
  },
});

export default OpeningHoursSchema;

import { EventInput } from '@fullcalendar/core';

let eventGuid = 0;
const TODAY_STR = new Date().toISOString().replace(/T.*$/, ''); // YYYY-MM-DD of today

export const INITIAL_EVENTS: EventInput[] = [
  {
    id: createEventId(),
    title: 'All-day event',
    start: TODAY_STR
  },
  {
    id: createEventId(),
    title: 'You cannnot make an appoitment',
    start: TODAY_STR + 'T00:00:00',
    end: TODAY_STR + 'T08:00:00'
  },
  {
    id: createEventId(),
    title: 'You cannnot make an appoitment',
    start: TODAY_STR + 'T17:00:00',
    end: TODAY_STR + 'T24:00:00'
  }
];

export function createEventId() {
  return String(eventGuid++);
}

import literals from '../../content/commons.json';

const eventTypes = [
  { value: 'all', label: 'All Events' },
  { value: 'conference', label: literals['event-type:conference'] },
  { value: 'podcast', label: literals['event-type:podcast'] },
  { value: 'stream', label: literals['event-type:stream'] },
  { value: 'talk', label: literals['event-type:talk'] },
  { value: 'meetup', label: literals['event-type:meetup'] },
  { value: 'fundraising', label: literals['event-type:fundraising'] },
  { value: 'misc', label: literals['event-type:misc'] },
];

export default eventTypes;
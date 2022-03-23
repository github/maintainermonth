import { getLiteral } from '../../common/i18n'

import IconPodcast from '../../public/icons/podcast'
import IconStream from '../../public/icons/stream'
import IconTalk from '../../public/icons/talk'
import IconMeetup from '../../public/icons/meetup'
import IconFundraising from '../../public/icons/fundraising'
import IconConference from '../../public/icons/conference'
import IconMisc from '../../public/icons/misc'

const TYPES = {
  podcast: {
    label: getLiteral('event-type:podcast'),
    icon: <IconPodcast />,
    color: '#FF008A',
  },
  stream: {
    label: getLiteral('event-type:stream'),
    icon: <IconStream />,
    color: '#6F42C1',
  },
  talk: {
    label: getLiteral('event-type:talk'),
    icon: <IconTalk />,
    color: '#31E0AF',
  },
  meetup: {
    label: getLiteral('event-type:meetup'),
    icon: <IconMeetup />,
    color: '#FB5454',
  },
  fundraising: {
    label: getLiteral('event-type:fundraising'),
    icon: <IconFundraising />,
    color: '#F09E00',
  },
  conference: {
    label: getLiteral('event-type:conference'),
    icon: <IconConference />,
    color: '#135AFF',
  },
  misc: {
    label: getLiteral('event-type:misc'),
    icon: <IconMisc />,
    color: '#F000CA',
  },
}

export default TYPES

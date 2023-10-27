import { DetailRow } from '../DetailRow'
import PropTypes from 'prop-types'

export const EpisodeDetails = ({ item }) => (
  <>
    <DetailRow label={'Phone'} value={item.phone} isCard={true} />
    <DetailRow label={'E-mail'} value={item.email} isCard={true} />
    <DetailRow label={'Skype'} value={item.skype} isCard={true} />
    <DetailRow label={'Linkedln'} value={item.linkedin} isCard={true} />
    <DetailRow label={'Git'} value={item.git} isCard={true} />
  </>
)

EpisodeDetails.propTypes = {
  item: PropTypes.object.isRequired,
}

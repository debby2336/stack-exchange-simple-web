import Chip from '@material-ui/core/Chip'
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles'

interface Props {
  active: boolean
  tag: string
  handleChipClick: () => void
}

const TrendingTagItem = (props: Props) => {
  const { active, tag, handleChipClick } = props
  return (
    <Chip
      clickable
      color={active ? 'primary' : 'default'}
      label={tag}
      onClick={handleChipClick}
    />
  )
}

export default TrendingTagItem

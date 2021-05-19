import Box from '@material-ui/core/Box'
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles'
import * as R from 'ramda'
import { useState } from 'react'
import { useSelector } from 'react-redux'

import { getTagList } from '@redux/tags'

import { TagItemType } from 'src/types/tags'

import { TrendingTagItem } from '../components'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      '& > *': {
        margin: theme.spacing(0.5)
      }
    }
  })
)

const TrendingTagList = () => {
  const classes = useStyles()
  const tagList = useSelector(getTagList) as TagItemType[]
  const [selectedTagIndex, setSelectedTagIndex] = useState(0)

  const handleChipClick = (selectedIndex: number) => {
    if (selectedIndex !== selectedTagIndex) {
      // TODO
      setSelectedTagIndex(selectedIndex)
    }
  }

  return (
    <Box className={classes.root}>
      {R.addIndex(R.map)((tag: TagItemType, index) => (
        <TrendingTagItem
          active={index === selectedTagIndex}
          key={index}
          tag={tag.name}
          handleChipClick={() => handleChipClick(index)}
        />
      ))(tagList)}
    </Box>
  )
}

export default TrendingTagList

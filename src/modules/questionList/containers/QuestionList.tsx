import Box from '@material-ui/core/Box'
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles'
import { getQuestionList } from '@redux/questions'
import * as R from 'ramda'
import { useState } from 'react'
import { useSelector } from 'react-redux'

import { QuestionItemType } from 'src/types/questions'

import { QuestionItem } from '../components'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& > *': {
        margin: theme.spacing(0.5)
      }
    }
  })
)

const QuestionList = () => {
  const classes = useStyles()
  const questionList = useSelector(getQuestionList) as QuestionItemType[]
  return (
    <Box className={classes.root}>
      {R.addIndex(R.map)((question: QuestionItemType, index) => (
        <QuestionItem key={index} question={question} />
      ))(questionList)}
    </Box>
  )
}

export default QuestionList

import Box from '@material-ui/core/Box'
import CircularProgress from '@material-ui/core/CircularProgress'
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles'
import * as R from 'ramda'
import InfiniteScroll from 'react-infinite-scroll-component'
import { useDispatch, useSelector } from 'react-redux'

import {
  getHasMoreQuestion,
  getQuestionList,
  getQuestionPageCount,
  questionsActionCreators
} from '@redux/questions'

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
  const dispatch = useDispatch()
  const hasMore = useSelector(getHasMoreQuestion) as boolean
  const pageCount = useSelector(getQuestionPageCount) as number
  const questionList = useSelector(getQuestionList) as QuestionItemType[]
  const loadMore = () => {
    dispatch(questionsActionCreators.fetchQuestionList(pageCount + 1))
  }
  return questionList.length > 0 ? (
    <InfiniteScroll
      className={classes.root}
      dataLength={questionList.length}
      next={loadMore}
      hasMore={hasMore}
      loader={
        <Box display="flex" justifyContent="center">
          <CircularProgress />
        </Box>
      }
    >
      {R.addIndex(R.map)((question: QuestionItemType, index) => (
        <QuestionItem key={index} question={question} />
      ))(questionList)}
    </InfiniteScroll>
  ) : (
    <Box display="flex" justifyContent="center">
      <CircularProgress />
    </Box>
  )
}

export default QuestionList

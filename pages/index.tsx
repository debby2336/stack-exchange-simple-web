import AppBar from '@material-ui/core/AppBar'
import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import useScrollTrigger from '@material-ui/core/useScrollTrigger'
import React from 'react'
import { useDispatch } from 'react-redux'

import { QuestionList } from '@modules/questionList/containers'
import { ScrollToTopFab } from '@modules/scrollToTopFab/components'
import { SearchBarContainer } from '@modules/searchTag/containers'
import { TrendingTagList } from '@modules/trending/containers'
import { tagsActionCreators } from '@redux/tags'

interface Props {
  children: React.ReactElement
}

function ElevationScroll(props: Props) {
  const { children } = props
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0
  })

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0
  })
}

const Home = () => {
  const dispatch = useDispatch()
  dispatch(tagsActionCreators.fetchTagList(1))
  return (
    <>
      <AppBar position="sticky">
        <Toolbar>
          <SearchBarContainer />
        </Toolbar>
      </AppBar>
      <Container>
        <Box my={2}>
          <TrendingTagList />
        </Box>
        <Box my={2}>
          <QuestionList />
        </Box>
      </Container>
      <ScrollToTopFab />
    </>
  )
}

Home.getInitialProps = (context) => {
  const { store } = context
  // TODO: make it a constant
  store.dispatch(tagsActionCreators.fetchTagList(1))
  return {}
}

export default Home

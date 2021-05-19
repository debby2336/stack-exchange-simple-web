import Fab from '@material-ui/core/Fab'
import Slide from '@material-ui/core/Slide'
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles'
import ArrowUpward from '@material-ui/icons/ArrowUpward'
import { useEffect, useState } from 'react'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    fab: {
      position: 'fixed',
      bottom: theme.spacing(2),
      right: theme.spacing(2)
    }
  })
)

const ScrollToTopFab = () => {
  const classes = useStyles()
  const [showFab, setShowFab] = useState(false)

  // const throttleSearch =

  const handleScroll = () => {
    setShowFab(document.documentElement.scrollTop > 0)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const scrollToTop = () => {
    document.documentElement.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <>
      <Slide direction="up" in={showFab} mountOnEnter unmountOnExit>
        <Fab
          className={classes.fab}
          color="primary"
          aria-label="back-to-top"
          onClick={scrollToTop}
        >
          <ArrowUpward />
        </Fab>
      </Slide>
    </>
  )
}

export default ScrollToTopFab

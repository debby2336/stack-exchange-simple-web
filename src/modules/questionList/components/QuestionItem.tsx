import Avatar from '@material-ui/core/Avatar'
import Box from '@material-ui/core/Box'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import { green, red } from '@material-ui/core/colors'
import Link from '@material-ui/core/Link'
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import React from 'react'

import { QuestionItemType } from 'src/types/questions'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    answers: (props: Props) => {
      const withAnswer = props.question.answer_count > 0
      let style = {}
      if (withAnswer) {
        style = {
          borderRadius: theme.spacing(0.5),
          border: `1px solid ${green[500]}`,
          color: green[500]
        }

        if (props.question.is_answered) {
          style = {
            ...style,
            backgroundColor: green[500],
            color: theme.palette.common.white
          }
        }
      }
      return style
    }
  })
)

interface CaptionProps {
  children: React.ReactElement | string
  captionKey: string
  typographyStyle?: any
}

const CaptionItem = (props: CaptionProps) => {
  const { children, captionKey, typographyStyle } = props
  return (
    <Box display="flex" flexDirection="column" flex={1} alignItems="center">
      <Typography variant="caption" color="textSecondary">
        {captionKey}
      </Typography>
      {typeof children === 'string' ? (
        <Typography variant="body1" style={typographyStyle}>
          {children}
        </Typography>
      ) : (
        children
      )}
    </Box>
  )
}

interface Props {
  question: QuestionItemType
}

const QuestionItem = (props: Props) => {
  const classes = useStyles(props)
  const { question } = props

  const htmlDecode = (input) => {
    var e = document.createElement('textarea')
    e.innerHTML = input
    return e.childNodes.length === 0 ? '' : e.childNodes[0].nodeValue
  }

  const negativeScoreStyle = {
    color: red[500],
    fontWeight: 600
  }

  return (
    <Link href={question.link} rel="noopener" target="_blank" underline="none">
      <Card>
        <CardContent>
          <Box display="flex" flexDirection="column">
            <Typography gutterBottom variant="subtitle1">
              {htmlDecode(question.title)}
            </Typography>
            <Box display="flex">
              <CaptionItem
                captionKey="Score"
                {...(question.score < 0 && {
                  typographyStyle: negativeScoreStyle
                })}
              >{`${question.score}`}</CaptionItem>
              <CaptionItem captionKey="Answers">
                <Box
                  display="flex"
                  justifyContent="center"
                  className={classes.answers}
                  width="100%"
                >
                  <Typography variant="body1">
                    {`${question.answer_count}`}
                  </Typography>
                </Box>
              </CaptionItem>
              <CaptionItem captionKey="Viewed">{`${question.view_count}`}</CaptionItem>
              <Box
                display="flex"
                flex={1}
                alignItems="center"
                justifyContent="center"
              >
                <Avatar
                  alt={question.owner.display_name}
                  src={question.owner.profile_image}
                />
              </Box>
            </Box>
          </Box>
        </CardContent>
      </Card>
    </Link>
  )
}

export default QuestionItem

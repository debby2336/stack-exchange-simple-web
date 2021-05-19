import IconButton from '@material-ui/core/IconButton'
import InputAdornment from '@material-ui/core/InputAdornment'
import InputBase from '@material-ui/core/InputBase'
import { Theme, createStyles, fade, makeStyles } from '@material-ui/core/styles'
import Cancel from '@material-ui/icons/Cancel'
import SearchIcon from '@material-ui/icons/Search'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { debounce } from 'throttle-debounce'

import { tagsActionCreators } from '@redux/tags'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    search: {
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.15),
      '&:hover': {
        backgroundColor: fade(theme.palette.common.white, 0.25)
      },
      padding: theme.spacing(0, 1),
      width: '100%'
    },
    inputRoot: {
      color: 'inherit',
      width: '100%'
    },
    inputInput: {
      padding: theme.spacing(1),
      width: '100%'
    }
  })
)

const SearchBarContainer = () => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const [inputValue, setInputValue] = useState('')

  const debounceSearch = debounce(1000, false, (value) => {
    dispatch(tagsActionCreators.fetchTagList(1, value))
    document.documentElement.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  })

  const handleValueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value)
    debounceSearch(event.target.value)
  }

  const clearInput = () => {
    setInputValue('')
  }

  return (
    <div className={classes.search}>
      <InputBase
        placeholder="Search…"
        classes={{
          root: classes.inputRoot,
          input: classes.inputInput
        }}
        inputProps={{ 'aria-label': 'search' }}
        endAdornment={
          <InputAdornment position="end">
            <IconButton aria-label="delete" onClick={clearInput}>
              <Cancel color="secondary" />
            </IconButton>
          </InputAdornment>
        }
        startAdornment={
          <InputAdornment position="start">
            <SearchIcon color="secondary" />
          </InputAdornment>
        }
        value={inputValue}
        onChange={handleValueChange}
      />
    </div>
  )
}

export default SearchBarContainer

import { HYDRATE } from 'next-redux-wrapper'
import { Reducer, combineReducers } from 'redux'

import { QuestionsActions, QuestionsState, questionsReducer } from './questions'
import { TagsActions, TagsState, tagsReducer } from './tags'

export interface ApplicationState {
  questions: QuestionsState
  tags: TagsState
}

export type ApplicationActions = QuestionsActions | TagsActions

const combindedReducers = combineReducers<ApplicationState>({
  questions: questionsReducer,
  tags: tagsReducer
})

export const rootReducer: Reducer<ApplicationState, ApplicationActions> = (
  state: ApplicationState | undefined,
  action: ApplicationActions
) => {
  return combindedReducers(state, action)
}

export const hydrateReducer = (state, action) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state, // use previous state
      ...action.payload // apply delta from hydration
    }

    // connected-next-router
    if (typeof window !== 'undefined' && state?.router) {
      // preserve router value on client side navigation
      nextState.router = state.router
    }

    // if (state.count.count) nextState.count.count = state.count.count; // preserve count value on client side navigation
    return nextState
  } else {
    return rootReducer(state, action)
  }
}

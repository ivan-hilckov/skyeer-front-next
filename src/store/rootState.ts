import createSelector from 'selectorator'
import PROGRESS_TYPES from 'constants/progressTypes'

export interface AppState {
  checkState: PROGRESS_TYPES
  isAuthorized: boolean
}

export interface LayersMeasureWidgetValue {
  id: string
  name: string
}

export interface LayersMeasureWidgetMeasureState {
  id: string
  type: 'HEIGHT' | 'RULER' | 'PROFILE' | 'SLOPE' | 'AREA' | 'VOLUME' | 'VOLUME_DONE' | 'VOLUME_FUTURE'
  value: LayersMeasureWidgetValue
}
export interface LayersMeasureWidgetFileState {
  id: string
  value: LayersMeasureWidgetValue
}
export interface LayersMeasureWidgetChoiceState {
  id: string
  value: LayersMeasureWidgetValue
}
export interface LayersMeasureWidgetTextState {
  id: string
  value: LayersMeasureWidgetValue
}

export interface LayerMeasureTemplateState {
  variants: 'MEASURE' | 'FILE' | 'CHOICE' | 'TEXT'
  widgets: {
    [key: number]:
      | LayersMeasureWidgetMeasureState
      | LayersMeasureWidgetFileState
      | LayersMeasureWidgetChoiceState
      | LayersMeasureWidgetTextState
  }
}

export interface LayerMeasureState {
  name: string
  unit: number
  gemetry: {
    type: 'POINT' | 'LINE' | 'POLYGON'
  }
  material?: number
  style: {}
  template: {
    [key: number]: LayerMeasureTemplateState
  }
}

export interface LayersMeasureState {
  tool: {
    variants: 'HEIGHT' | 'RULER' | 'PROFILE' | 'SLOPE' | 'AREA' | 'VOLUME' | 'VOLUME_DONE' | 'VOLUME_FUTURE'
    last: 'HEIGHT' | 'RULER' | 'PROFILE' | 'SLOPE' | 'AREA' | 'VOLUME' | 'VOLUME_DONE' | 'VOLUME_FUTURE'
  }
  draftlayer?: LayerMeasureState
  draftTemplate?: LayerMeasureTemplateState
  layers: {
    [key: number]: LayerMeasureState
  }
}

export interface State {
  app: AppState
}

export const appInitialState: AppState = {
  checkState: PROGRESS_TYPES.WORK,
  isAuthorized: false,
}

export const initialState: State = {
  app: appInitialState,
}

const getApp = createSelector<State, AppState>(
  ['app'],
  app => app
)

export class Selectors {
  state: State

  constructor(state: State) {
    this.state = state
  }
  getApp() {
    return getApp(this.state)
  }
}

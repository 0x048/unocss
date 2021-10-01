import { borders, borderStyles, rounded } from './border'
import { bgColors, borderColors, opacity, textColors } from './colors'
import { flex } from './flex'
import { fonts, fontSizes } from './font'
import { gaps } from './gap'
import { sizes } from './size'
import { paddings, margins } from './spacing'
import { aligns, appearances, breaks, cursors, displays, pointerEvents, resizes, textDecorations, textOverflows, textTransforms, userSelects, whitespaces } from './static'

export const defaultRules = [
  ...paddings,
  ...margins,
  ...displays,
  ...opacity,
  ...borders,
  ...textColors,
  ...bgColors,
  ...borderColors,
  ...borderStyles,
  ...fonts,
  ...fontSizes,
  ...rounded,
  ...flex,
  ...gaps,
  ...sizes,
  ...cursors,
  ...appearances,
  ...pointerEvents,
  ...resizes,
  ...aligns,
  ...userSelects,
  ...whitespaces,
  ...breaks,
  ...textOverflows,
  ...textDecorations,
  ...textTransforms,
]

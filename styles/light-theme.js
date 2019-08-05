import { transparentize } from 'polished'
import colors from './colors'

const lightTheme = {
  main: {
    foreground: colors.dark,
    background: colors.light,
    success: colors.green,
  },
  selection: {
    foreground: colors.white,
    background: colors.blue,
  },
  sidebar: {
    foreground: colors.dark,
    background: colors.white,
    border: colors.light,
    hoverBackground: colors.light,
  },
  tabs: {
    foreground: colors.dark,
    background: colors.white,
    activeForeground: colors.dark,
    activeBackground: colors.light,
    border: colors.light,
  },
  card: {
    foreground: colors.dark,
    background: colors.white,
    border: colors.light,
    hoverBackground: transparentize(0.5, colors.light),
  },
  input: {
    foreground: colors.dark,
    background: colors.light,
    activeBorder: colors.blue,
  },
  code: {
    accent1: colors.blue,
    accent2: colors.red,
    foreground: colors.dark,
    background: colors.white,
    theme: `code[class*="language-"], pre[class*="language-"] { color: #393A34; direction: ltr; text-align: left; white-space: pre; word-spacing: normal; word-break: normal; -moz-tab-size: 2; -o-tab-size: 2; tab-size: 2; -webkit-hyphens: none; -moz-hyphens: none; -ms-hyphens: none; hyphens: none; } pre[class*="language-"]::-moz-selection, pre[class*="language-"] ::-moz-selection, code[class*="language-"]::-moz-selection, code[class*="language-"] ::-moz-selection { background: #b3d4fc; } pre[class*="language-"]::selection, pre[class*="language-"] ::selection, code[class*="language-"]::selection, code[class*="language-"] ::selection { background: #b3d4fc; } /* Code blocks */ pre[class*="language-"] { overflow: auto; } .token.comment, .token.prolog, .token.doctype, .token.cdata { color: #999988; font-style: italic; } .token.namespace { opacity: .7; } .token.string, .token.attr-value { color: #e3116c; } .token.punctuation, .token.operator { color: #393A34; /* no highlight */ } .token.entity, .token.url, .token.symbol, .token.number, .token.boolean, .token.variable, .token.constant, .token.property, .token.regex, .token.inserted { color: #36acaa; } .token.atrule, .token.keyword, .token.attr-name, .language-autohotkey .token.selector { color: #00a4db; } .token.function, .token.deleted, .language-autohotkey .token.tag { color: #9a050f; } .token.tag, .token.selector, .language-autohotkey .token.keyword { color: #00009f; } .token.important, .token.function, .token.bold { font-weight: bold; } .token.italic { font-style: italic; }`,
  },
  shadows: {
    normal: `0px 3px 6px rgba(26, 32, 44, 0.05), 0px 1px 3px rgba(26, 32, 44, 0.1)`,
    bolder: `0px 4px 8px rgba(26, 32, 44, 0.1), 0px 1px 3px rgba(26, 32, 44, 0.1);`
  }
}

export default lightTheme
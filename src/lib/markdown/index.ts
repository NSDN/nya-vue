import MarkdownIt from 'markdown-it'
import hljs from 'highlight.js'

export const md = MarkdownIt({
  highlight: (str, lang) => {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return hljs.highlight(str, { language: lang, ignoreIllegals: true })
          .value
      } catch (__) {}
    }

    return '' // use external default escaping
  },
})

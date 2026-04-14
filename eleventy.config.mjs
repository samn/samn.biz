export default function (eleventyConfig) {
  // Passthrough copy CSS
  eleventyConfig.addPassthroughCopy('src/css')

  // Current year for footer
  eleventyConfig.addGlobalData('currentYear', new Date().getFullYear())

  // Date formatting filter — matches Gatsby's "DD MMMM, YYYY" format
  eleventyConfig.addFilter('dateFormat', (date) => {
    const d = new Date(date)
    const day = String(d.getUTCDate()).padStart(2, '0')
    const months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ]
    const month = months[d.getUTCMonth()]
    const year = d.getUTCFullYear()
    return `${day} ${month}, ${year}`
  })

  // Excerpt filter — strips HTML and truncates
  eleventyConfig.addFilter('excerpt', (content, length = 200) => {
    const text = (content ?? '').replace(/<[^>]*>/g, '').trim()
    if (text.length <= length) return text
    return text.substring(0, length).replace(/\s+\S*$/, '') + '\u2026'
  })

  return {
    dir: {
      input: 'src',
      output: '_site',
      includes: '_includes',
      data: '_data',
    },
    markdownTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
  }
}

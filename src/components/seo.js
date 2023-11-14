import * as React from "react"

const DOMAIN = "https://simplereactjs.com"
const DEFAULT_IMAGE = "/react-course.png"

function Seo({ children }) {
  const imageCard = ``

  const title = "Simplified JavaScript Course"

  return (
    <>
      <title>{title}</title>
      {/* <meta name="description" content={metaDescription} /> */}

      <meta property="og:title" content={title} />
      {/* <meta property="og:description" content={metaDescription} /> */}
      <meta property="og:type" content="website" />
      <meta property="og:image" content={imageCard} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content="iamdillion" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:site" content="@iamdillion" />
      <meta name="twitter:image" content={imageCard} />
      {/* <meta name="twitter:description" content={metaDescription} /> */}
      {children}
    </>
  )
}

export default Seo

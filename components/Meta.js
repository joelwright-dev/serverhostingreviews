import Head from 'next/head'
import Script from 'next/script'

const Meta = ({title, keywords, description}) => {
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1"/>
      <meta name="keywords" content={keywords}/>
      <meta name="description" content={description}/>
      <meta charSet="utf-8"/>
      <link rel='icon' href='/favicon.ico'/>
      <title>{title}</title>
    </Head>
  )
}

Meta.defaultProps = {
    title: "Server Hosting Reviews",
    keywords: "",
    description: ""
}

export default Meta
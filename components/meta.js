import Head from "next/head";
const Meta = ({ title, keywords, description }) => {
  return (
    <div>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content={keywords} />
        <meta name="keywords" content={description} />
        <link rel="icon" href="/favicon.ico" />
        <title>{title}</title>
      </Head>
    </div>
  );
};

Meta.defaultProps = {
  title: "WebDev News",
  keywords: "web development, programming",
  description: "Get the latest news in the web dev",
};

export default Meta;

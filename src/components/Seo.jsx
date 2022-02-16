import React from 'react';
import { Helmet } from 'react-helmet';

export default function Seo({
  title,
  description,
  image
}) {
  return (
    <Helmet>
      <title>{title || "Gatsby Blog"}</title>
      <meta name="description" content={description || "An blog that give information about technology and code"} />
      <meta name="image" content={image || ""} />

      <meta property="og:title" content={title || ""} />
      <meta property="og:type" content={"article"} />
      <meta property="og:description" content={description || ""} />
      <meta property="og:image" content={image} />

      <meta property="twitter:title" content={title || ""} />
      <meta property="twitter:description" content={description || ""} />
      <meta property="twitter:image" content={image} />
      <meta name="twitter:card" content="summary_large_image" />

      <meta name="robots" content="index,follow" />
    </Helmet>
  );
}

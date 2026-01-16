import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  type?: 'website' | 'article' | 'profile';
  image?: string;
  noindex?: boolean;
}

const defaultMeta = {
  title: 'Rayven J. Moore, CPA',
  description: 'CPA, entrepreneur, and financial educator helping individuals and businesses build lasting wealth through clarity and education.',
  image: '/og-image.jpg',
  siteUrl: 'https://rayvenjmoore.com'
};

export default function SEO({
  title,
  description = defaultMeta.description,
  canonical,
  type = 'website',
  image = defaultMeta.image,
  noindex = false
}: SEOProps) {
  const fullTitle = title
    ? `${title} | Rayven J. Moore, CPA`
    : 'Rayven J. Moore, CPA | Converting Complexity Into Clarity';

  const canonicalUrl = canonical
    ? `${defaultMeta.siteUrl}${canonical}`
    : defaultMeta.siteUrl;

  const fullImageUrl = image.startsWith('http') ? image : `${defaultMeta.siteUrl}${image}`;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {canonical && <link rel="canonical" href={canonicalUrl} />}
      {noindex && <meta name="robots" content="noindex,nofollow" />}

      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={fullImageUrl} />

      {/* Twitter */}
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImageUrl} />
    </Helmet>
  );
}

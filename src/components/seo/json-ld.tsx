import { SITE_DESCRIPTION, SITE_NAME, SITE_URL } from "@/constants/site";
import { siteConfig } from "@/data/site";

export function WebsiteJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: SITE_URL,
        name: SITE_NAME,
        description: SITE_DESCRIPTION,
      },
      {
        "@type": "Person",
        "@id": `${SITE_URL}/#person`,
        name: siteConfig.name,
        jobTitle: siteConfig.role,
        url: SITE_URL,
        email: siteConfig.email,
        sameAs: Object.values(siteConfig.social),
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

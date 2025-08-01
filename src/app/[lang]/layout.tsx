import type { ReactNode } from "react";
import { i18nConfig, source } from "@/lib/source";
import { RootProvider } from "fumadocs-ui/provider";
import SearchDialog from "@/components/search";
import { DocsLayout } from "fumadocs-ui/layouts/docs";

const locales = Object.entries(i18nConfig.languages).map(([locale, name]) => {
  return {
    name,
    locale,
  };
});

export default async function Layout({
  params,
  children,
}: {
  params: Promise<{
    lang: string;
  }>;
  children: ReactNode;
}) {
  const { lang } = await params;
  return (
    <html lang={lang}>
      <body>
        <RootProvider
          theme={{
            enabled: false,
          }}
          search={{
            SearchDialog,
          }}
          i18n={{
            locale: lang,
            locales,
          }}
        >
          <DocsLayout tree={source.pageTree[lang]}>{children}</DocsLayout>
        </RootProvider>
      </body>
    </html>
  );
}

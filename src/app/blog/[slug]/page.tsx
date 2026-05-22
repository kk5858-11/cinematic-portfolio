import { notFound } from "next/navigation";
import { BlurFade } from "@/animations";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { TransitionLink } from "@/components/navigation/transition-link";
import { ROUTES } from "@/constants/navigation";
import { getAllSlugs, getCompiledPost } from "@/data/blog";
import { pageMetadata } from "@/lib/seo/metadata";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const post = await getCompiledPost(slug);
  if (!post) return { title: "Not Found" };

  return pageMetadata({
    title: post.meta.title,
    description: post.meta.description,
    path: `/blog/${slug}`,
  });
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = await getCompiledPost(slug);
  if (!post) notFound();

  const { meta, content } = post;

  return (
    <Section size="lg" className="pt-8">
      <Container>
        <BlurFade>
          <TransitionLink
            href={ROUTES.blog}
            className="text-caption text-muted transition-colors duration-normal ease-smooth hover:text-foreground"
          >
            ← Writing
          </TransitionLink>

          <header className="content-blog mt-12 max-w-3xl">
            <time className="text-caption text-subtle">{meta.date}</time>
            {meta.readingTime ? (
              <span className="text-caption text-subtle"> · {meta.readingTime}</span>
            ) : null}
            <h1 className="mt-6 text-display text-foreground">{meta.title}</h1>
            <p className="mt-6 text-lg text-muted">{meta.description}</p>
          </header>
        </BlurFade>

        <article className="content-blog prose-blog mt-16 max-w-3xl space-y-8">
          {content}
        </article>
      </Container>
    </Section>
  );
}

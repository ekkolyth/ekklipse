import { createFileRoute } from '@tanstack/react-router';
import { useQuery } from 'convex/react';
import { useEffect } from 'react';
import { api } from '../../convex/_generated/api';
import { SnippetClient } from '@/components/snippet-client';
import { LogoHeader } from '@/components/logo-header';

export const Route = createFileRoute('/$slug')({
  component: SnippetPage,
});

function SnippetPage() {
  const { slug } = Route.useParams();
  const snippet = useQuery(api.snippets.get, { slug });

  useEffect(() => {
    if (snippet) {
      document.title = snippet.name;
      
      // Update OG title
      const ogTitle = document.querySelector('meta[property="og:title"]');
      if (ogTitle) {
        ogTitle.setAttribute('content', snippet.name);
      }
      
      // Update Twitter title
      const twitterTitle = document.querySelector('meta[name="twitter:title"]');
      if (twitterTitle) {
        twitterTitle.setAttribute('content', snippet.name);
      }
    }
  }, [snippet]);
  
  if (snippet === undefined) {
    return <div className='p-4'>Loading...</div>;
  }
  if (snippet === null) {
    return <div className='p-4'>Snippet not found.</div>;
  }
  return (
    <>
      <LogoHeader />
      <SnippetClient snippet={snippet} />
    </>
  );
}
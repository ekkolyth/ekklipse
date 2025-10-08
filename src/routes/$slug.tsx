import { createFileRoute } from '@tanstack/react-router';
import { useQuery } from 'convex/react';
import { api } from '../../convex/_generated/api';
import { SnippetClient } from '@/components/snippet-client';

export const Route = createFileRoute('/$slug')({
  component: SnippetPage,
});

function SnippetPage() {
  const { slug } = Route.useParams();
  const snippet = useQuery(api.snippets.get, { slug });
  
  if (snippet === undefined) {
    return <div className='p-4'>Loading...</div>;
  }
  if (snippet === null) {
    return <div className='p-4'>Snippet not found.</div>;
  }
  return <SnippetClient snippet={snippet} />;
}
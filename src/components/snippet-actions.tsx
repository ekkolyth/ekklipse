import { Button } from '@/components/ui/button';
import { Copy, Download, ShareIcon, Trash } from 'lucide-react';
import type { Id } from '../../convex/_generated/dataModel';

interface Snippet {
  _id: Id<'snippets'>;
  slug: string;
  name: string;
  language: string;
  content: string;
}

interface SnippetActionsProps {
  snippet: Snippet;
  languageExtension: string;
  onCopy: (content: string) => void;
  onDownload: (snippet: Snippet) => void;
  onShare: (snippet: Snippet) => void;
  onDelete: (id: Id<'snippets'>) => void;
}

export function SnippetActions({
  snippet,
  languageExtension,
  onCopy,
  onDownload,
  onShare,
  onDelete,
}: SnippetActionsProps) {
  return (
    <div className='flex items-center gap-1'>
      <span className='text-sm text-foreground/60 mr-2'>{languageExtension}</span>
      <Button
        className='icon-hover'
        variant='ghost'
        size='icon'
        onClick={(e) => {
          e.stopPropagation();
          onCopy(snippet.content);
        }}
      >
        <Copy className='size-4' />
      </Button>
      <Button
        className='icon-hover'
        variant='ghost'
        size='icon'
        onClick={(e) => {
          e.stopPropagation();
          onDownload(snippet);
        }}
      >
        <Download className='size-4' />
      </Button>
      <Button
        className='icon-hover'
        variant='ghost'
        size='icon'
        onClick={(e) => {
          e.stopPropagation();
          onShare(snippet);
        }}
      >
        <ShareIcon className='size-4' />
      </Button>
      <Button
        className='icon-hover hover:text-red-500'
        variant='ghost'
        size='icon'
        onClick={(e) => {
          e.stopPropagation();
          onDelete(snippet._id);
        }}
      >
        <Trash className='size-4' />
      </Button>
    </div>
  );
}


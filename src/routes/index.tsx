import { createFileRoute, Link } from '@tanstack/react-router';
import { useState } from 'react';
import Editor from '@monaco-editor/react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { MoonStar, PlusIcon, MinusIcon } from 'lucide-react';
import { useMutation, useQuery } from 'convex/react';
import { api } from '../../convex/_generated/api';
import type { Id } from '../../convex/_generated/dataModel';
import { cn } from '@/lib/utils';
import ReactMarkdown from 'react-markdown';
import { HomeHeader } from '@/components/home-header';
import { SnippetActions } from '@/components/snippet-actions';
import { ExpirationSelect } from '@/components/expiration-select';

export const Route = createFileRoute('/')({
  component: Home,
});

interface Snippet {
  _id: Id<'snippets'>;
  slug: string;
  name: string;
  language: string;
  content: string;
}

const languages = [
  'typescript',
  'javascript',
  'python',
  'jsx',
  'csharp',
  'yaml',
  'xml',
  'markdown',
  'css',
  'c',
  'rust',
  'lua',
  'text',
];

const extMap: Record<string, string> = {
  typescript: 'ts',
  javascript: 'js',
  python: 'py',
  jsx: 'jsx',
  csharp: 'cs',
  yaml: 'yml',
  xml: 'xml',
  markdown: 'md',
  css: 'css',
  c: 'c',
  rust: 'rs',
  lua: 'lua',
  text: 'txt',
};

function Home() {
  const [title, setTitle] = useState('');
  const [language, setLanguage] = useState('text');
  const [content, setContent] = useState('');
  const [expiresAt, setExpiresAt] = useState<number | undefined>();
  const snippets = useQuery(api.snippets.list) || [];
  const createSnippet = useMutation(api.snippets.create);
  const deleteSnippet = useMutation(api.snippets.remove);
  const [showNew, setShowNew] = useState(false);
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const saveSnippet = async () => {
    if (!title.trim() || !content.trim()) return;
    await createSnippet({ name: title, language, content, expiresAt });
    setTitle('');
    setContent('');
    setLanguage('markdown');
    setExpiresAt(undefined);
    setShowNew(false);
  };

  const download = (snip: Snippet) => {
    const ext = extMap[snip.language] ?? 'txt';
    const blob = new Blob([snip.content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${snip.name}.${ext}`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const share = (snip: Snippet) => {
    const url = `${window.location.origin}/${snip.slug}`;
    if (navigator.share) {
      navigator.share({ url });
    } else {
      navigator.clipboard.writeText(url);
    }
  };

  return (
    <>
      <HomeHeader />
      <div className='min-h-screen flex flex-col items-center pt-24 p-4'>
        <h1 className='my-30 text-5xl font-bold flex items-center gap-2'>
          <MoonStar className='size-14 mr-2' />
          <span className='text-foreground/60'>ek</span>(klip)
          <span className='text-foreground/60'>se</span>
        </h1>
        <div className='w-full max-w-3xl space-y-4'>
          <div className='rounded-xl border border-foreground/20 overflow-hidden'>
            <button
              onClick={() => setShowNew(!showNew)}
              className='flex w-full items-center justify-between p-4 cursor-pointer hover:bg-foreground/5 transition-colors'
            >
              <span className='flex items-center gap-2'>
                <MoonStar className='size-5' />
                New Klip
              </span>
              {showNew ? <MinusIcon className='size-4' /> : <PlusIcon className='size-4' />}
            </button>
            {showNew && (
              <div className='flex flex-col space-y-4 border-t border-foreground/20 p-6 bg-background'>
                <div className='flex flex-row gap-2'>
                  <Input
                    className='h-10 rounded-md'
                    placeholder='Name'
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                  <Select
                    value={language}
                    onValueChange={setLanguage}
                  >
                    <SelectTrigger className='h-10 rounded-md w-1/4'>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent
                      position='popper'
                      side='bottom'
                      align='start'
                    >
                      {languages.map((lang) => (
                        <SelectItem
                          key={lang}
                          value={lang}
                        >
                          {lang}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                {language === 'text' ? (
                  <Textarea
                    className='h-[20vh] resize-y rounded-md'
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                  />
                ) : (
                  <div className='h-[20vh] resize-y rounded-xl border border-foreground/20 overflow-hidden'>
                    <div className='px-2 py-4 h-full'>
                      <Editor
                        height='100%'
                        language={language}
                        value={content}
                        onChange={(v) => setContent(v ?? '')}
                        options={{
                          minimap: { enabled: false },
                          lineNumbers: 'on',
                          automaticLayout: true,
                          fontSize: 16,
                          lineHeight: 24,
                        }}
                        beforeMount={(monaco) => {
                          monaco.editor.defineTheme('carbonfox', {
                            base: 'vs-dark',
                            inherit: true,
                            rules: [
                              { token: 'comment', foreground: '6e6f70', fontStyle: 'italic' },
                              { token: 'keyword', foreground: 'ff7eb6', fontStyle: 'bold' },
                              { token: 'string', foreground: '3ddbd9' },
                              { token: 'number', foreground: 'ee5396' },
                              { token: 'type', foreground: '42be65' },
                              { token: 'class', foreground: '42be65', fontStyle: 'bold' },
                              { token: 'function', foreground: 'be95ff' },
                              { token: 'variable', foreground: 'f2f4f8' },
                              { token: 'variable.parameter', foreground: '82cfff' },
                              { token: 'operator', foreground: 'f2f4f8' },
                              { token: 'delimiter', foreground: 'f2f4f8' },
                              { token: 'constant', foreground: 'ee5396' },
                              { token: 'property', foreground: '82cfff' },
                              { token: 'tag', foreground: 'ff7eb6' },
                              { token: 'attribute.name', foreground: '42be65' },
                              { token: 'attribute.value', foreground: '3ddbd9' },
                            ],
                            colors: {
                              'editor.background': '#161616',
                              'editor.foreground': '#f2f4f8',
                              'editor.lineHighlightBackground': '#262626',
                              'editor.selectionBackground': '#3d3d3d',
                              'editor.inactiveSelectionBackground': '#2a2a2a',
                              'editorCursor.foreground': '#f2f4f8',
                              'editorWhitespace.foreground': '#525252',
                              'editorIndentGuide.background': '#393939',
                              'editorIndentGuide.activeBackground': '#525252',
                              'editor.lineNumber.foreground': '#6f6f6f',
                              'editor.lineNumber.activeForeground': '#c6c6c6',
                              'editorGutter.background': '#161616',
                              'editorBracketMatch.background': '#2a2a2a',
                              'editorBracketMatch.border': '#525252',
                            },
                          });
                        }}
                        theme='carbonfox'
                      />
                    </div>
                  </div>
                )}
                <div className='flex justify-between items-center'>
                  <ExpirationSelect
                    value={expiresAt}
                    onChange={setExpiresAt}
                  />
                  <Button
                    className='rounded-md cursor-pointer'
                    onClick={saveSnippet}
                  >
                    Save Klip
                  </Button>
                </div>
              </div>
            )}
          </div>
          <div className=''>
            {snippets.map((snip) => (
              <div
                key={snip._id}
                className={cn(
                  'rounded-md border border-foreground/20 p-2 pl-4 transition-colors mb-4',
                  expandedId === snip._id && 'bg-foreground/10 pb-6'
                )}
              >
                <div
                  className='flex items-center justify-between cursor-pointer hover:bg-foreground/5 rounded-md'
                  onClick={() => setExpandedId(expandedId === snip._id ? null : snip._id)}
                >
                  <Link
                    to='/$slug'
                    params={{ slug: snip.slug }}
                    className='font-medium'
                    onClick={(e) => e.stopPropagation()}
                  >
                    {snip.name}
                  </Link>
                  <SnippetActions
                    snippet={snip}
                    languageExtension={extMap[snip.language] ?? snip.language}
                    onCopy={(content) => navigator.clipboard.writeText(content)}
                    onDownload={download}
                    onShare={share}
                    onDelete={(id) => deleteSnippet({ id })}
                  />
                </div>
                {expandedId === snip._id && (
                  <div className='mt-4'>
                    {snip.language === 'markdown' ? (
                      <div className='rounded-md border border-foreground/20 p-4'>
                        <ReactMarkdown>{snip.content}</ReactMarkdown>
                      </div>
                    ) : snip.language === 'text' ? (
                      <pre className='rounded-md border border-foreground/20 p-4 whitespace-pre-wrap mr-2'>
                        {snip.content}
                      </pre>
                    ) : (
                      <div className='rounded-md border border-foreground/20 overflow-hidden'>
                        <div className='px-2 py-4'>
                          <Editor
                            value={snip.content}
                            language={snip.language}
                            options={{
                              readOnly: true,
                              minimap: { enabled: false },
                              fontSize: 14,
                              lineHeight: 24,
                            }}
                            beforeMount={(monaco) => {
                              monaco.editor.defineTheme('carbonfox', {
                                base: 'vs-dark',
                                inherit: true,
                                rules: [
                                  { token: 'comment', foreground: '6e6f70', fontStyle: 'italic' },
                                  { token: 'keyword', foreground: 'ff7eb6', fontStyle: 'bold' },
                                  { token: 'string', foreground: '3ddbd9' },
                                  { token: 'number', foreground: 'ee5396' },
                                  { token: 'type', foreground: '42be65' },
                                  { token: 'class', foreground: '42be65', fontStyle: 'bold' },
                                  { token: 'function', foreground: 'be95ff' },
                                  { token: 'variable', foreground: 'f2f4f8' },
                                  { token: 'variable.parameter', foreground: '82cfff' },
                                  { token: 'operator', foreground: 'f2f4f8' },
                                  { token: 'delimiter', foreground: 'f2f4f8' },
                                  { token: 'constant', foreground: 'ee5396' },
                                  { token: 'property', foreground: '82cfff' },
                                  { token: 'tag', foreground: 'ff7eb6' },
                                  { token: 'attribute.name', foreground: '42be65' },
                                  { token: 'attribute.value', foreground: '3ddbd9' },
                                ],
                                colors: {
                                  'editor.background': '#161616',
                                  'editor.foreground': '#f2f4f8',
                                  'editor.lineHighlightBackground': '#262626',
                                  'editor.selectionBackground': '#3d3d3d',
                                  'editor.inactiveSelectionBackground': '#2a2a2a',
                                  'editorCursor.foreground': '#f2f4f8',
                                  'editorWhitespace.foreground': '#525252',
                                  'editorIndentGuide.background': '#393939',
                                  'editorIndentGuide.activeBackground': '#525252',
                                  'editor.lineNumber.foreground': '#6f6f6f',
                                  'editor.lineNumber.activeForeground': '#c6c6c6',
                                  'editorGutter.background': '#161616',
                                  'editorBracketMatch.background': '#2a2a2a',
                                  'editorBracketMatch.border': '#525252',
                                },
                              });
                            }}
                            theme='carbonfox'
                            height='40vh'
                          />
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

import { Link } from '@tanstack/react-router'
import ReactMarkdown from 'react-markdown'
import { CodeEditor, codeEditorBackground } from '@/components/code-editor'
import { KlipActions } from '@/components/klip/actions'
import { extMap } from '@/lib/constants'
import type { Klip } from '@/lib/types'
import type { Id } from '../../../convex/_generated/dataModel'

interface KlipCardProps {
    klip: Klip
    isExpanded: boolean
    onToggle: () => void
    onCopy: (content: string) => void
    onDownload: (klip: Klip) => void
    onShare: (klip: Klip) => void
    onDelete: (id: Id<'klips'>) => void
}

export function KlipCard({
    klip,
    isExpanded,
    onToggle,
    onCopy,
    onDownload,
    onShare,
    onDelete,
}: KlipCardProps) {
    return (
        <div className='rounded-xl border border-foreground/20 transition-colors mb-4'>
            <button
                type='button'
                className='flex w-full items-center justify-between p-4 cursor-pointer hover:bg-foreground/5 transition-colors'
                onClick={onToggle}
            >
                <Link
                    to='/$slug'
                    params={{ slug: klip.slug }}
                    className='font-medium'
                    onClick={(e) => e.stopPropagation()}
                >
                    {klip.name}
                </Link>
                <KlipActions
                    klip={klip}
                    languageExtension={extMap[klip.language] ?? klip.language}
                    onCopy={onCopy}
                    onDownload={onDownload}
                    onShare={onShare}
                    onDelete={onDelete}
                />
            </button>
            {isExpanded && (
                <div className='px-4 pb-4 pt-4'>
                    <KlipContent klip={klip} />
                </div>
            )}
        </div>
    )
}

function KlipContent({ klip }: { klip: Klip }) {
    if (klip.language === 'markdown') {
        return (
            <div className='rounded-md border border-foreground/20 p-4'>
                <ReactMarkdown>{klip.content}</ReactMarkdown>
            </div>
        )
    }

    if (klip.language === 'text') {
        return (
            <pre className='rounded-md border border-foreground/20 p-4 whitespace-pre-wrap mr-2'>
                {klip.content}
            </pre>
        )
    }

    return (
        <div
            className='rounded-md border border-foreground/20 overflow-hidden'
            style={{ background: codeEditorBackground }}
        >
            <div className='px-2 py-4'>
                <CodeEditor
                    value={klip.content}
                    language={klip.language}
                    readOnly
                    height='40vh'
                />
            </div>
        </div>
    )
}

import ReactMarkdown from 'react-markdown'
import { CodeEditor, codeEditorBackground } from '@/components/code-editor'
import { KlipActions } from '@/components/klip/actions'
import { extMap } from '@/lib/constants'
import type { Klip } from '@/lib/types'

export function KlipClient({ klip }: { klip: Klip }) {
    const download = (k: Klip) => {
        const ext = extMap[k.language] ?? 'txt'
        const blob = new Blob([k.content], { type: 'text/plain' })
        const url = URL.createObjectURL(blob)
        const a = document.createElement('a')
        a.href = url
        a.download = `${k.name}.${ext}`
        a.click()
        URL.revokeObjectURL(url)
    }

    const share = (k: Klip) => {
        const url = `${window.location.origin}/${k.slug}`
        if (navigator.share) {
            navigator.share({ url })
        } else {
            navigator.clipboard.writeText(url)
        }
    }

    return (
        <div className='min-h-screen flex flex-col justify-center max-w-4xl mx-auto p-4 space-y-4'>
            <div className='flex justify-between items-center'>
                <h1 className='text-xl font-bold'>{klip.name}</h1>
                <KlipActions
                    klip={klip}
                    languageExtension={extMap[klip.language] ?? klip.language}
                    onCopy={(content) => navigator.clipboard.writeText(content)}
                    onDownload={download}
                    onShare={share}
                    onDelete={() => {}}
                />
            </div>
            {klip.language === 'markdown' ? (
                <div className='rounded-2xl border border-foreground/20 p-4'>
                    <ReactMarkdown>{klip.content}</ReactMarkdown>
                </div>
            ) : klip.language === 'text' ? (
                <pre className='rounded-2xl border border-foreground/20 p-4 whitespace-pre-wrap'>
                    {klip.content}
                </pre>
            ) : (
                <div
                    className='rounded-2xl border border-foreground/20 overflow-hidden'
                    style={{ background: codeEditorBackground }}
                >
                    <CodeEditor
                        value={klip.content}
                        language={klip.language}
                        readOnly
                        height='60vh'
                    />
                </div>
            )}
        </div>
    )
}

import { MinusIcon, MoonStar, PlusIcon } from 'lucide-react'
import { useState } from 'react'
import { CodeEditor, codeEditorBackground } from '@/components/code-editor'
import { ExpirationSelect } from '@/components/expiration-select'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'
import { languages } from '@/lib/constants'

interface NewKlipFormProps {
    onSave: (data: {
        name: string
        language: string
        content: string
        expiresAt?: number
    }) => Promise<void>
}

export function NewKlipForm({ onSave }: NewKlipFormProps) {
    const [showNew, setShowNew] = useState(false)
    const [title, setTitle] = useState('')
    const [language, setLanguage] = useState('text')
    const [content, setContent] = useState('')
    const [expiresAt, setExpiresAt] = useState<number | undefined>()

    const handleSave = async () => {
        if (!title.trim() || !content.trim()) return
        await onSave({ name: title, language, content, expiresAt })
        setTitle('')
        setContent('')
        setLanguage('text')
        setExpiresAt(undefined)
        setShowNew(false)
    }

    return (
        <div className='rounded-xl border border-foreground/20 overflow-hidden'>
            <button
                type='button'
                onClick={() => setShowNew(!showNew)}
                className='flex w-full items-center justify-between p-4 cursor-pointer hover:bg-foreground/5 transition-colors'
            >
                <span className='flex items-center gap-2'>
                    <MoonStar className='size-5' />
                    New Klip
                </span>
                {showNew ? (
                    <MinusIcon className='size-4' />
                ) : (
                    <PlusIcon className='size-4' />
                )}
            </button>
            {showNew && (
                <div
                    className='flex flex-col space-y-4 border-t border-foreground/20 p-4'
                    style={{ background: codeEditorBackground }}
                >
                    <div className='flex flex-row gap-2'>
                        <Input
                            className='h-10 rounded-md'
                            placeholder='Name'
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                        <Select value={language} onValueChange={setLanguage}>
                            <SelectTrigger className='h-10 rounded-md w-1/4'>
                                <SelectValue />
                            </SelectTrigger>
                            <SelectContent
                                position='popper'
                                side='bottom'
                                align='start'
                            >
                                {languages.map((lang) => (
                                    <SelectItem key={lang} value={lang}>
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
                        <div
                            className='h-[20vh] resize-y rounded-xl border border-foreground/20 overflow-hidden'
                            style={{ background: codeEditorBackground }}
                        >
                            <div className='px-2 py-4 h-full'>
                                <CodeEditor
                                    value={content}
                                    language={language}
                                    onChange={setContent}
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
                            onClick={handleSave}
                        >
                            Save Klip
                        </Button>
                    </div>
                </div>
            )}
        </div>
    )
}

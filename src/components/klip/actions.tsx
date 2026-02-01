import { Copy, Download, ShareIcon, Trash } from 'lucide-react'
import { Button } from '@/components/ui/button'
import type { Klip } from '@/lib/types'
import type { Id } from '../../../convex/_generated/dataModel'

interface KlipActionsProps {
    klip: Klip
    languageExtension: string
    onCopy: (content: string) => void
    onDownload: (klip: Klip) => void
    onShare: (klip: Klip) => void
    onDelete: (id: Id<'klips'>) => void
}

export function KlipActions({
    klip,
    languageExtension,
    onCopy,
    onDownload,
    onShare,
    onDelete,
}: KlipActionsProps) {
    return (
        <div className='flex items-center gap-1'>
            <span className='text-sm text-foreground/60 mr-2'>
                {languageExtension}
            </span>
            <Button
                className='icon-hover'
                variant='ghost'
                size='icon'
                onClick={(e) => {
                    e.stopPropagation()
                    onCopy(klip.content)
                }}
            >
                <Copy className='size-4' />
            </Button>
            <Button
                className='icon-hover'
                variant='ghost'
                size='icon'
                onClick={(e) => {
                    e.stopPropagation()
                    onDownload(klip)
                }}
            >
                <Download className='size-4' />
            </Button>
            <Button
                className='icon-hover'
                variant='ghost'
                size='icon'
                onClick={(e) => {
                    e.stopPropagation()
                    onShare(klip)
                }}
            >
                <ShareIcon className='size-4' />
            </Button>
            <Button
                className='icon-hover hover:text-red-500'
                variant='ghost'
                size='icon'
                onClick={(e) => {
                    e.stopPropagation()
                    onDelete(klip._id)
                }}
            >
                <Trash className='size-4' />
            </Button>
        </div>
    )
}

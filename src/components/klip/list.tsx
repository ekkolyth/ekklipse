import { useState } from 'react'
import { KlipCard } from '@/components/klip/card'
import { extMap } from '@/lib/constants'
import type { Klip } from '@/lib/types'
import type { Id } from '../../../convex/_generated/dataModel'

interface KlipListProps {
    klips: Klip[]
    onDelete: (id: Id<'klips'>) => void
}

export function KlipList({ klips, onDelete }: KlipListProps) {
    const [expandedId, setExpandedId] = useState<string | null>(null)

    const download = (klip: Klip) => {
        const ext = extMap[klip.language] ?? 'txt'
        const blob = new Blob([klip.content], { type: 'text/plain' })
        const url = URL.createObjectURL(blob)
        const a = document.createElement('a')
        a.href = url
        a.download = `${klip.name}.${ext}`
        a.click()
        URL.revokeObjectURL(url)
    }

    const share = (klip: Klip) => {
        const url = `${window.location.origin}/${klip.slug}`
        if (navigator.share) {
            navigator.share({ url })
        } else {
            navigator.clipboard.writeText(url)
        }
    }

    return (
        <div>
            {klips.map((klip) => (
                <KlipCard
                    key={klip._id}
                    klip={klip}
                    isExpanded={expandedId === klip._id}
                    onToggle={() =>
                        setExpandedId(expandedId === klip._id ? null : klip._id)
                    }
                    onCopy={(content) => navigator.clipboard.writeText(content)}
                    onDownload={download}
                    onShare={share}
                    onDelete={onDelete}
                />
            ))}
        </div>
    )
}

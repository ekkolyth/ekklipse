import Editor from '@monaco-editor/react'

const carbonfoxTheme = {
    base: 'vs-dark' as const,
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
}

interface CodeEditorProps {
    value: string
    language: string
    onChange?: (value: string) => void
    readOnly?: boolean
    height?: string
}

export function CodeEditor({
    value,
    language,
    onChange,
    readOnly = false,
    height = '100%',
}: CodeEditorProps) {
    return (
        <Editor
            height={height}
            language={language}
            value={value}
            onChange={(v) => onChange?.(v ?? '')}
            options={{
                readOnly,
                minimap: { enabled: false },
                lineNumbers: 'on',
                automaticLayout: true,
                fontSize: readOnly ? 14 : 16,
                lineHeight: 24,
            }}
            beforeMount={(monaco) => {
                monaco.editor.defineTheme('carbonfox', carbonfoxTheme)
            }}
            theme='carbonfox'
        />
    )
}

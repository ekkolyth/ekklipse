import Editor from '@monaco-editor/react'

/** Vercel dark theme – faithful to Next.js & Vercel docs (vscode-vercel) */
const VERCEL_EDITOR_BG = '#0a0a0a'

const vercelDarkTheme = {
    base: 'vs-dark' as const,
    inherit: true,
    rules: [
        { token: 'comment', foreground: 'a1a1a1' },
        { token: 'keyword', foreground: 'f05b8d' },
        { token: 'storage', foreground: 'f05b8d' },
        { token: 'string', foreground: '58c760' },
        { token: 'number', foreground: '62a6ff' },
        { token: 'constant', foreground: '62a6ff' },
        { token: 'type', foreground: '62a6ff' },
        { token: 'class', foreground: '62a6ff' },
        { token: 'function', foreground: 'b675f1' },
        { token: 'variable', foreground: 'ededed' },
        { token: 'variable.parameter', foreground: 'ededed' },
        { token: 'operator', foreground: 'f05b8d' },
        { token: 'delimiter', foreground: 'ededed' },
        { token: 'property', foreground: '62a6ff' },
        { token: 'tag', foreground: '58c760' },
        { token: 'attribute.name', foreground: 'b675f1' },
        { token: 'attribute.value', foreground: '58c760' },
        { token: 'support', foreground: 'f05b8d' },
        { token: 'invalid', foreground: 'f05b8d' },
    ],
    colors: {
        'editor.background': VERCEL_EDITOR_BG,
        'editor.foreground': '#ededed',
        'editor.lineHighlightBackground': '#ffffff1a',
        'editor.selectionBackground': '#ffffff1a',
        'editor.inactiveSelectionBackground': '#ffffff1a',
        'editorCursor.foreground': '#ededed',
        'editorWhitespace.foreground': '#878787',
        'editorIndentGuide.background': '#242424',
        'editorIndentGuide.activeBackground': '#242424',
        'editor.lineNumber.foreground': '#878787',
        'editor.lineNumber.activeForeground': '#a1a1a1',
        'editorGutter.background': VERCEL_EDITOR_BG,
        'editorBracketMatch.background': '#ffffff1a',
        'editorBracketMatch.border': '#00000000',
    },
}

export const codeEditorBackground = VERCEL_EDITOR_BG

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
                monaco.editor.defineTheme('vercel-dark', vercelDarkTheme)
                // Snippet-style editing: no module context, so chill TS/JS diagnostics
                const relaxed = {
                    noSemanticValidation: true,
                    noSyntaxValidation: true,
                }
                monaco.languages.typescript.javascriptDefaults.setDiagnosticsOptions(relaxed)
                monaco.languages.typescript.typescriptDefaults.setDiagnosticsOptions(relaxed)
            }}
            theme='vercel-dark'
        />
    )
}

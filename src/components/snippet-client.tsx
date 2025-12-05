import Editor from "@monaco-editor/react";
import ReactMarkdown from "react-markdown";
import type { Id } from "../../convex/_generated/dataModel";
import { useTheme } from "@/components/theme-provider";
import { SnippetActions } from "@/components/snippet-actions";

export interface Snippet {
  _id: Id<"snippets">;
  slug: string;
  name: string;
  language: string;
  content: string;
  createdAt: number;
}

export function SnippetClient({ snippet }: { snippet: Snippet }) {
  const { resolvedTheme } = useTheme();

  const extMap: Record<string, string> = {
    typescript: "ts",
    javascript: "js",
    python: "py",
    jsx: "jsx",
    csharp: "cs",
    yaml: "yml",
    xml: "xml",
    markdown: "md",
    css: "css",
    c: "c",
    rust: "rs",
    lua: "lua",
    text: "txt",
  };

  const download = (snip: Snippet) => {
    const ext = extMap[snip.language] ?? "txt";
    const blob = new Blob([snip.content], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
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
    <div className="min-h-screen flex flex-col justify-center max-w-4xl mx-auto p-4 space-y-4">
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-bold">{snippet.name}</h1>
        <SnippetActions
          snippet={snippet}
          languageExtension={extMap[snippet.language] ?? snippet.language}
          onCopy={(content) => navigator.clipboard.writeText(content)}
          onDownload={download}
          onShare={share}
          onDelete={() => {}}
        />
      </div>
      {snippet.language === "markdown" ? (
        <div className="rounded-2xl border border-foreground/20 p-4">
          <ReactMarkdown>{snippet.content}</ReactMarkdown>
        </div>
      ) : snippet.language === "text" ? (
        <pre className="rounded-2xl border border-foreground/20 p-4 whitespace-pre-wrap">
          {snippet.content}
        </pre>
      ) : (
        <div className="rounded-2xl border border-foreground/20 overflow-hidden">
          <Editor
            value={snippet.content}
            language={snippet.language}
            theme={resolvedTheme === "dark" ? "vs-dark" : "light"}
            options={{ readOnly: true, minimap: { enabled: false } }}
            height="60vh"
          />
        </div>
      )}
    </div>
  );
}

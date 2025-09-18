'use client'
import { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { Highlight, themes } from 'prism-react-renderer';

interface ReleaseAsset {
  id: number;
  name: string;
  browser_download_url: string;
}

interface Release {
  id: number;
  name: string;
  body: string;
  assets: ReleaseAsset[];
  html_url: string;
}

type Language =
  | "javascript"
  | "typescript"
  | "python"
  | "java"
  | "csharp"
  | "cpp"
  | "html"
  | "css"
  | "bash"
  | string;


export default function Home() {
  const [release, setRelease] = useState<Release | null>(null);

  useEffect(() => {
    fetch('https://api.github.com/repos/ItsJustJosepee/josepechat/releases/latest')
      .then(res => res.json())
      .then(data => setRelease(data))
      .catch(err => console.error(err));
  }, []);

  if (!release) return <p className="text-center mt-10">Cargando release...</p>;

  return (
    <section>
      <div className="release-card">
        <div className="info">
          <ReactMarkdown
            components={{
              code({ className, children, ...props }) {
                const match = /language-(\w+)/.exec(className || '');
                return match ? (
                  <Highlight
                    theme={themes.vsDark}
                    code={String(children).replace(/\n$/, '')}
                    language={match[1] as Language}
                  >
                    {({ className, style, tokens, getLineProps, getTokenProps }) => (
                      <pre
                        className={`max-w-full overflow-x-auto rounded-lg p-3 text-sm font-mono ${className}`}
                        style={{ ...style, whiteSpace: "pre-wrap", wordBreak: "break-word" }}
                      >
                        {tokens.map((line, i) => (
                          <div key={i} {...getLineProps({ line })}>
                            {line.map((token, key) => (
                              <span key={key} {...getTokenProps({ token })} />
                            ))}
                          </div>
                        ))}
                      </pre>
                    )}
                  </Highlight>
                ) : (
                  <code className="bg-gray-200 px-1 py-0.5 rounded" {...props}>
                    {children}
                  </code>
                );
              },
            }}
          >
            {release.body}
          </ReactMarkdown>
        </div>

        {release.assets.map((asset) => (
          <a
            key={asset.id}
            href={asset.browser_download_url}
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
          >
            Descargar {asset.name}
          </a>
        ))}

        <p className="mt-4 text-right">
          <a
            href={release.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="link"
          >
            Ver en GitHub
          </a>
        </p>
      </div>
    </section>
  );
}

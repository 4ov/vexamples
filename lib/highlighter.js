import hl from "highlight.js";

hl.registerLanguage("v", () => {
  return {
    name: "v",
    keywords: [
      "as",
      "asm",
      "assert",
      "atomic",
      "break",
      "const",
      "continue",
      "defer",
      "else",
      "embed",
      "enum",
      "false",
      "fn",
      "for",
      "go",
      "goto",
      "if",
      "import",
      "in",
      "interface",
      "is",
      "lock",
      "match",
      "module",
      "mut",
      "none",
      "or",
      "pub",
      "return",
      "rlock",
      "select",
      "shared",
      "sizeof",
      "static",
      "struct",
      "true",
      "type",
      "typeof",
      "union",
      "unsafe",
      "__offsetof",
    ],
    contains: [
      hl.COMMENT("/\\*", "\\*/"),
      hl.COMMENT(/\/\//, /^/),
      {
        scope: "string",
        begin: '"',
        end: '"',
      },
      {
        scope: "string",
        begin: "'",
        end: "'",
      },
    ],
  };
});

export default function highlight(raw, lang) {
  const langExist = hl.getLanguage(lang);
  if (langExist) {
    return `<pre class="hljs"><code>${
      hl.highlight(raw, {
        language: lang,
      }).value
    }
</code></pre>`;
  } else {
    return raw;
  }
}

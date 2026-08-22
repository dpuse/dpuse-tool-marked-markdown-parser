// ── External Dependencies & Registrations
import { marked } from 'marked';

// ── Tools ────────────────────────────────────────────────────────────────────────────────────────────────────────────

export class Tool {
    // ── Actions ──────────────────────────────────────────────────────────────────────────────────────────────────────

    // Render markdown to HTML.
    // Returned HTML is not sanitised: marked renders raw HTML found in the source verbatim, so callers must run the
    // result through a sanitiser (e.g. DOMPurify) before inserting it into the DOM.
    render(markdown: string): string {
        return marked.parse(markdown, { async: false });
    }
}

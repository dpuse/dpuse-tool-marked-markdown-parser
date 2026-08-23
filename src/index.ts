// ── External Dependencies & Registrations
import { marked } from 'marked';
import TurndownService from 'turndown';

// ── Tools ────────────────────────────────────────────────────────────────────────────────────────────────────────────

export class Tool {
    // ── State ────────────────────────────────────────────────────────────────────────────────────────────────────────

    #turndownService = new TurndownService();

    constructor() {
        this.#turndownService.keep(['u']); // Preserve <u> (underline); not part of standard Markdown, so Turndown drops it by default.
    }

    // ── Actions ──────────────────────────────────────────────────────────────────────────────────────────────────────

    // Render markdown to HTML.
    // Returned HTML is not sanitised: marked renders raw HTML found in the source verbatim, so callers must run the
    // result through a sanitiser (e.g. DOMPurify) before inserting it into the DOM.
    render(markdown: string): string {
        return marked.parse(markdown, { async: false });
    }

    // Convert HTML (e.g. a rich text editor's DOM output) back to markdown.
    toMarkdown(html: string | HTMLElement): string {
        return this.#turndownService.turndown(html);
    }
}

// ── External Dependencies & Registrations
import { describe, expect, it } from 'vitest';
import { Tool as MarkedTool } from '@/index';

// ── Tests ────────────────────────────────────────────────────────────────────────────────────────────────────────────

describe('MarkedTool', () => {
    it('renders a heading', () => {
        expect(new MarkedTool().render('# Title')).toBe('<h1>Title</h1>\n');
    });

    it('renders a paragraph', () => {
        expect(new MarkedTool().render('Hello world')).toBe('<p>Hello world</p>\n');
    });

    it('renders emphasis', () => {
        expect(new MarkedTool().render('*italic* and **bold**')).toBe('<p><em>italic</em> and <strong>bold</strong></p>\n');
    });

    it('renders raw HTML verbatim, unsanitised', () => {
        expect(new MarkedTool().render('<img src="x" onerror="alert(1)">')).toContain('onerror="alert(1)"');
    });
});

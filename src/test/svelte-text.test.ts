import { cleanup, render } from '@testing-library/svelte'
import SvelteText from '../lib/wc/SvelteText.svelte'
import { describe, it, expect, afterEach } from 'vitest'

describe('SvelteText.svelte', () => {
    afterEach(() => cleanup())

    it('Mounted', () => {
        const { container } = render(SvelteText, { text: '' })
        expect(container).toBeTruthy()
    })
    it('get SvelteText', () => {
        const { container } = render(SvelteText, { text: '' })
        expect(container.innerHTML).toContain('SvelteText')
    })

    it('pass props text', () => {
        const { container } = render(SvelteText, { text: 'svelte-vitest' })
        expect(container.innerHTML).toContain('svelte-vitest')
    })
})
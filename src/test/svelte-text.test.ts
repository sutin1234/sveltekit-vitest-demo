import { cleanup, render, fireEvent } from '@testing-library/svelte'
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
    it('getTextByTestId', () => {
        const { getByTestId } = render(SvelteText, { text: 'svelte-vitest' })
        const text = getByTestId('text')
        expect(text?.innerHTML).toContain('svelte-vitest')
    })

    it('click button && getCount', async () => {
        const { getByRole, container } = render(SvelteText, { text: 'svelte-vitest', count: 0 })
        const btn = getByRole('button')
        expect(container?.innerHTML).toContain('0')

        await fireEvent.click(btn)
        expect(container?.innerHTML).toContain('1')
        await fireEvent.click(btn)

    })
})
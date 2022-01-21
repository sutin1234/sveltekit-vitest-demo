import { cleanup, render } from '@testing-library/svelte'
import Counter from '../lib/Counter.svelte'
import { describe, it, expect, afterEach } from 'vitest'

describe('Counter.svelte', () => {
    afterEach(() => cleanup())

    it('Mounted', () => {
        const { container } = render(Counter)
        expect(container).toBeTruthy()
    })
})
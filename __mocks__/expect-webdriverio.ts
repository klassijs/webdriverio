import { vi } from 'vitest'
process.env.WDIO_ASSERTION_LIB_ACTIVATED = '1'
const setOptions = vi.fn()
export { setOptions }
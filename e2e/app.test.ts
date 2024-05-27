import { setup, $fetch } from '@nuxt/test-utils/e2e'
import { test, expect, describe } from 'vitest'
import i18nConfig from '../i18n.config'

// @ts-ignore
const messages = i18nConfig().messages.en

describe('Router', async () => {

    await setup()

    test('Index Page (/)', async () => {
        const html = await $fetch('/')
        
        const titleText = messages.index.title
        expect(html).toContain(titleText)
    })

    test('Sign In Page (/login)', async () => {
        const html = await $fetch('/login')
        const signinTitle = messages.user.signin
        expect(html).toContain(signinTitle)
    })

    test('Browse Page (/browse)', async () => {
        const html = await $fetch('/browse')
        expect(html).toContain('The Avengers')
    })

    test('Avengers Endgame Movie Page (/watch/tt123123)', async () => {
        const html = await $fetch('/watch/tt4154796')
        expect(html).toContain('Avengers: Endgame')
    })

    test('404 Error when accessing /watch without any slug', async () => {
        try {
            await $fetch('/watch')
        } catch (error) {
            // @ts-ignore
            expect(error.response.status).toBe(404)
        }
    })

    test('Custom error message when accessing /watch with a valid but nonexistent IMDb ID', async () => {
        const html = await $fetch('/watch/tt4154755')
        expect(html).toContain('Oops!')
    })

    test('404 Error when when accessing /watch with an invalid IMDb ID', async () => {
        try {
            await $fetch('/watch/123')
        } catch (error) {
            // @ts-ignore
            expect(error.response.status).toBe(404)
        }
    })

    test('404 Error when accessing an invalid page (/invalid-page)', async () => {
        try {
            await $fetch('/invalid-route')
        } catch (error) {
            // @ts-ignore
            expect(error.response.status).toBe(404)
        }
    })

})  
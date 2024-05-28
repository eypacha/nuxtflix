import { setup, createPage, url } from '@nuxt/test-utils/e2e'
import { test, expect, describe } from 'vitest'

describe('Router', async () => {

    await setup()

    test('Index Page (/)', async () => {

        const page = await createPage()
        await page.goto(url('/'), { waitUntil: 'hydration' })
        const index_route = await page.$('index_route')
        expect(index_route).toBeDefined()

    })

    test('Sign In Page (/login)', async () => {
        
        const page = await createPage()
        await page.goto(url('/login'), { waitUntil: 'hydration' })
        const login_route = await page.$('.login_route')
        expect(login_route).toBeDefined()

    })

    test('Browse Page (/browse)', async () => {
       
        const page = await createPage()
        await page.goto(url('/browse'), { waitUntil: 'hydration' })
        const browse_route = await page.$('.browse_route')
        expect(browse_route).toBeDefined()

    })

    test('Avengers Endgame Movie Page (/watch/tt123123)', async () => {

        const page = await createPage()
        await page.goto(url('/watch/tt4154796'), { waitUntil: 'hydration' })
        const text = await page.textContent('.v-card-title')
        expect(text).toContain('Avengers: Endgame')

    })

    test('404 Error when accessing /watch without any slug', async () => {
        
        const page = await createPage()
        await page.goto(url('/watch'), { waitUntil: 'hydration' })
        const text = await page.textContent('h1')
        expect(text).toBe('404')

    })

    test('Custom error message when accessing /watch with a valid but nonexistent IMDb ID', async () => {

        const page = await createPage()
        await page.goto(url('/watch/tt4154755'), { waitUntil: 'hydration' })
        const text = await page.textContent('h3')
        expect(text).toContain('Oops!')

    })

    test('404 Error when when accessing /watch with an invalid IMDb ID', async () => {

        const page = await createPage()
        await page.goto(url('/watch/123'), { waitUntil: 'hydration' })
        const text = await page.textContent('h1')
        expect(text).toBe('404')

    })

    test('404 Error when accessing an invalid page (/invalid-page)', async () => {

        const page = await createPage()
        await page.goto(url('/invalid-route'), { waitUntil: 'hydration' })
        const text = await page.textContent('h1')
        expect(text).toBe('404')

    })

})  
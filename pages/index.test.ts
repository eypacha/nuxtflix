import { mountSuspended } from '@nuxt/test-utils/runtime'
import { it, expect, describe } from 'vitest'
import Index from './index.vue'
import i18nConfig from '../i18n.config'

describe('App', () => {

    it('renders correct text content from i18n configuration', async () => {
        const component = await mountSuspended(Index)
        
        const config = i18nConfig() as { messages: { en: { index: any } } };
        const messages = config.messages.en.index;
        
        const titleText = messages.title
        const subtitleText = messages.subtitle

        expect(component.html()).toContain(titleText)
        expect(component.html()).toContain(subtitleText)
    })
    
})
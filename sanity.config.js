import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import {i18n} from './languages'
import {documentInternationalization} from '@sanity/document-internationalization'
import {languageFilter} from '@sanity/language-filter'
import {internationalizedArray} from 'sanity-plugin-internationalized-array'
import {googleTranslate} from 'sanity-plugin-google-translate'



export default defineConfig({
  name: 'default',
  title: 'Shopify - fabelfriet',

  projectId: '6tlmpa5b',
  dataset: 'production',

  plugins: [structureTool(),
     visionTool(),
     documentInternationalization({
      supportedLanguages: i18n.languages,
      schemaTypes: ['header', 'homebanner','onzefriet','onzelocaties','hetmenu','onzeimpact','getintouch','footer'],
    }),
    internationalizedArray({
      languages: i18n.languages,
      defaultLanguages: [i18n.base],
      fieldTypes: ['string', 'text'],
    }),
    languageFilter({
      supportedLanguages: i18n.languages,
      defaultLanguages: [i18n.base],
      documentTypes: [`presenter`, `course`, `labelGroup`],
      filterField: (enclosingType, member, selectedLanguageIds) => {
        // Filter internationalized arrays
        if (
          enclosingType.jsonType === 'object' &&
          enclosingType.name.startsWith('internationalizedArray') &&
          'kind' in member
        ) {
          const language = isKeyedObject(member.field.path[1]) ? member.field.path[1]._key : null

          return language ? selectedLanguageIds.includes(language) : false
        }

        if (enclosingType.jsonType === 'object' && enclosingType.name.startsWith('locale')) {
          return selectedLanguageIds.includes(member.name)
        }

        return true
      },
    }),
    googleTranslate(),
  ],

  schema: {
    types: schemaTypes,
  },
})

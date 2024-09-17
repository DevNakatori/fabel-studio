const languages = [
    {id: 'nl', title: 'Dutch', isDefault: true},
    {id: 'en', title: 'English'},
  ]
  
  const i18n = {
    languages,
    base: languages.find((item) => item.isDefault).id,
  }
  
  const googleTranslateLanguages = languages.map(({id, title}) => ({id, title}))
  
  // For v3 studio
  export {i18n, googleTranslateLanguages}
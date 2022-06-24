export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'kiran-brahma/sanity-angular-tailwindcss-website'
      }
    },
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '62b58b827ec5f96293683cc7',
                  title: 'Sanity Studio',
                  name: 'sanity-angular-tailwindcss-website-studio-nqa6xpf4',
                  apiId: '1136d342-92e0-42c6-a18e-36c20ccfabc8'
                },
                {
                  buildHookId: '62b58b8302648a65c867528f',
                  title: 'Website',
                  name: 'sanity-angular-tailwindcss-website-web-avbapori',
                  apiId: '6dcc229a-7dca-48c5-8d42-958e91adbd7c'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/kiran-brahma/sanity-angular-tailwindcss-website',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-angular-tailwindcss-website-web-avbapori.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}

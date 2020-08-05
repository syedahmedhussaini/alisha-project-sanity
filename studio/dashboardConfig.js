export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-eleventy-blog'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '5f2ae16e9b4455704e683407',
                  title: 'Sanity Studio',
                  name: 'alisha-project-sanity-studio',
                  apiId: '4d07f328-9947-4070-a189-bc927d3ef53d'
                },
                {
                  buildHookId: '5f2ae16ec81ca98a510684a6',
                  title: 'Blog Website',
                  name: 'alisha-project-sanity',
                  apiId: '88608871-5020-4207-a725-82063c50ab5e'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/syedahmedhussaini/alisha-project-sanity',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://alisha-project-sanity.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}

export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
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
                  buildHookId: '621ed4677a878c1b7627be36',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-rjz3i317',
                  apiId: '9a4984ff-6fd1-4469-af50-f215991a2eca'
                },
                {
                  buildHookId: '621ed46836bc7a1df46ba4c8',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-yqqziz2y',
                  apiId: 'b0c002bd-9c3c-433e-add9-b7f329aaa56e'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/roytanaka/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-yqqziz2y.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}

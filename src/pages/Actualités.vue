<template>
  <Layout>
    <div class="mb-24">
      <PageTitle>
        Actualités
      </PageTitle>

      <div class="px-4">
        <div class="mx-auto max-w-screen-md">
          <div 
            v-for="{ node } in $page.actualites.edges"
            :key="node.id"
            :job="node"
            class="my-8"
          >
            <div class="text-gray-600 text-sm">{{ $date(node.date_publie).format('[le] DD MMMM YYYY') }}</div>
            <g-link :to=node.path>
              <div class="text-navy text-2xl sm:text-3xl leading-tight font-semibold font-marianne hover:underline">{{ node.title }}</div>
            </g-link>
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>

<page-query>
  query Actualites {
    actualites: allActualite (sortBy: "date_publie") {
      edges {
        node {
          id
          path
          title
          date_publie
        }
      }
    }
  }
</page-query>

<script>
import PageTitle from '~/components/PageTitle.vue'
import PageContent from '~/components/PageContent.vue'

export default {
  metaInfo: {
    title: 'Actualités'
  },
  components: {
    PageTitle,
    PageContent
  }
}
</script>

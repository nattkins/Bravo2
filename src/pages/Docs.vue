<template>
  <Layout>
 <div class="container px-5 py-24 mx-auto">

              <div class="flex flex-wrap -m-4">
    
            <div v-for="doc in $page.docs.edges" :key="doc.id" class="p-4 md:w-1/3">
        <div class="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
          <div class="flex items-center mb-3">
        <h1 class="sm:text-3xl text-2xl font-medium title-font text-gray-900"><g-link :to="doc.node.path" class="text-copy-primary">{{ doc.node.title }}</g-link></h1>
        </div>
<p class="leading-relaxed text-base"> 
           {{ doc.node.excerpt }}
        </p>

        <div class="mb-8">

           <g-link :to="doc.node.path"  class="mt-3 text-indigo-500 inline-flex items-center">Learn More
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </g-link>
        </div>
          </div>
            </div>
      </div> <!-- end post -->

    </div>
  </Layout>
</template>

<page-query>
query Documentation {
  docs: allDocumentation (sortBy: "date", order: DESC) {
    edges {
      node {
        id
        path
        title
        excerpt
      }
    }
  }
}
</page-query>

<script>
export default {
  metaInfo: {
    title: 'Docs'
  }
}
</script>


<template>
    <Layout>
        <div class="">
            <h1>Блог</h1>
            <div>
                <section class="posts">
                    <Post v-for="edge in $page.allPost.edges" :key="edge.node.id" :post="edge.node" />
                </section>
            </div>
        </div>
    </Layout>
</template>

<page-query>
    query {
    allPost {
    totalCount
    edges {
    node {
    id
    title
    timeToRead
    description
    date (format: "DD-MM-YYYY")
    path
    }
    }
    }
    }
</page-query>
<script>
    import Post from "../components/posts/Post";
    export default {
        components: {
            Post
        },
        metaInfo: {
            title: 'Блог'
        }
    }
</script>

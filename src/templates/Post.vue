<template>
    <Layout>
        <br>
        <g-link to="/blog" class="link">  &larr; Вернутся</g-link>
        <div class="post-title">
            <h2 class="">{{$page.post.title}}</h2>
            <p class="post-date"> {{ $page.post.date}} | {{$page.post.timeToRead}} мин для прочтения
            </p>
        </div>
        <div class="post-content">
            <p v-html="$page.post.content" />
        </div>
    </Layout>
</template>
<page-query>
    query Post ($path: String!) {
        post: post (path: $path) {
            id
            title
            content
            date (format: "DD-MM-YYYY")
            timeToRead
        }
    }
</page-query>
<script>
    export default {
        name: "Post"
    }
</script>

<style scoped>

</style>
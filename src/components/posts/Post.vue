<template>
    <div class="shadow p-5 my-3">
        <p class="text-muted" v-html="post.date"/>
        <g-link :to="post.path" class="read">
            <h3 v-html="post.title"/>
        </g-link>
        <p class="description" v-html="post.description"/>
        <b>{{post.timeToRead}} мин для чтения</b> &nbsp;
        <g-link :to="post.path" class="read">Продолжить...</g-link>
    </div>
</template>

<script>
    export default {
        name: "Post",
        props: {
            post: Object,
        },
    }
</script>
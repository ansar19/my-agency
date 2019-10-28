<template>
    <div class="card p-3 my-4 my-md-1">
        <blockquote class="blockquote mb-1">
            <!-- <h1 class="serif-font-face mb-0">{{ teamMember.name }}</h1> -->
            <span class="text-muted">{{ teamMember.name }}</span>
            <footer class="blockquote-footer">
                <small class="text-muted">
                    <p class="font-italic mb-0">{{ teamMember.description }} </p>
                </small>
            </footer>
        </blockquote>
    </div>
</template>

<script>
    export default {
        name: "Team-Member",
        props: {
            teamMember: Object,
        }
    }
</script>

<style scoped>

</style>
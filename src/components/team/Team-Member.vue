<template>
    <div class="card p-3 my-2 my-md-1">
        <blockquote class="blockquote mb-1">
            <!-- <h1 class="serif-font-face mb-0">{{ teamMember.name }}</h1> -->
            <h6 class="">{{ teamMember.name }}</h6>
            <footer class="blockquote-footer">
                
                    <p class="font-italic mb-0">{{ teamMember.description }} </p>
                
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
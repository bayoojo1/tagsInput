<template>
    <div>{{ tags }}</div><br />
    <div v-text="tags.length"></div><br />
    <div v-if="!tags.length">
        You have no tags. Enter it in the input field below:
    </div>
    <input type="text" />
</template>

<script>
export default {
    data: () => ({
        tags: ["vue", "react", "angular"],
    }),
};
</script>
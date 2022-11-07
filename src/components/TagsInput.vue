<template>
    <div>{{ tags }}</div><br />
    <div v-text="tags.length"></div><br />
    <div v-if="!tags.length">
        You have no tags. Enter it in the input field below:
    </div>
    <div v-for="(tag, index) in tags" :key="tag.id">
        {{ index + ' : ' + tag }} 
    </div><br />

    <input 
    type="text" 
    :value="newTag" 
    v-on:keydown.enter="tags.push($event.target.value)"
    v-on:keydown.tab.prevent="tags.push($event.target.value)"
    />
    <!-- <button v-on:click="tags.push(newTag)">OK</button> -->
</template>

<script>
export default {
    data: () => ({
        tags: ["vue", "react", "angular"],
        newTag: "preact"
    }),
};
</script>
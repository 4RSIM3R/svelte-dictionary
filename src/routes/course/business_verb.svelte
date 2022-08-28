<script>
    import { onMount } from "svelte";

    let words = [];

    onMount(async () => {
        let response = await fetch("/api/business_verb.json");
        let result = await response.json();
        words = result;
    });
</script>

<div class="min-h-screen flex flex-col p-8">
    <h1 class="mb-4 text-xl font-semibold">Business Verb</h1>
    <div class="flex flex-col overflow-y-auto">
        {#each words as word}
            <div class="w-full p-4 shadow-md rounded-sm mb-4">
                <p class="text-lg font-semibold">
                    {word.WORD} - {word.INDONESIAN}
                </p>
                <p class="text-sm mt-2">
                    {word.ENGLISH}
                </p>
            </div>
        {/each}
    </div>
</div>

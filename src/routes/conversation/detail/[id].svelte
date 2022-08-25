<script>
    import { conversationDetail } from "../../api/conversation";
    import { page } from "$app/stores";
    import { onMount } from "svelte";

    let chats = [];

    onMount(() => {
        chats = conversationDetail[$page.params.id];
    });
</script>

<div class="min-h-screen flex flex-col p-8">
    <div class="flex flex-col overflow-y-auto space-y-8">
        {#each chats as chat, i}
            {#if i % 2 == 0}
                <div class="flex justify-end">
                    <div class="w-3/4">
                        <div class="p-3 bg-gray-50 shadow-sm rounded-md ">
                            <p class="text-lg mb-2 font-semibold">{chat.name}</p>
                            <p>
                                {chat.message}
                            </p>
                        </div>
                    </div>
                </div>
            {:else}
                <div class="flex justify-start">
                    <div class="w-3/4">
                        <div class="p-3 bg-gray-50 shadow-sm rounded-md ">
                            <p class="text-lg mb-2 font-semibold">{chat.name}</p>
                            <p>
                                {chat.message}
                            </p>
                        </div>
                    </div>
                </div>
            {/if}
        {/each}
    </div>
</div>

<script>
    import { listConversation } from "../api/conversation";
    import { goto } from "$app/navigation";

    function navigateToDetail(id) {
        goto(`/conversation/${id}`);
    }
</script>

<div class="min-h-screen flex flex-col p-8">
    <h1 class="mb-4 text-xl font-semibold">Conversation</h1>
    <div class="flex flex-col overflow-y-auto space-y-4">
        {#each listConversation as conversation}
            <div
                class="flex flex-row space-x-4"
                on:click={() => navigateToDetail(conversation.id)}
            >
                <img
                    src={conversation.image}
                    class="h-12 w-12 object-cover rounded-full"
                    alt=""
                />
                <div class="flex flex-col">
                    <p class="text-lg font-semibold">{conversation.title}</p>
                    <p class="text-sm text-gray-500">{conversation.subtitle}</p>
                </div>
            </div>
        {/each}
    </div>
</div>

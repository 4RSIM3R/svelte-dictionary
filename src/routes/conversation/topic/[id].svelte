<script>
    import { conversationByTopic } from "../../api/conversation_by_topic";
    import { page } from "$app/stores";
    import { onMount } from "svelte";
    import { goto } from "$app/navigation";

    let payload = [];

    onMount(() => {
        payload = conversationByTopic[$page.params.id].data;
        console.log(payload.data);
    });

    function navigateToDetail(id) {
        goto(`/conversation/detail/${id}`);
    }

</script>

<div class="min-h-screen flex flex-col p-8">
    <div class="flex flex-col overflow-y-auto space-y-8">
        {#each payload as data}
            <div class="flex flex-row space-x-4 items-center" on:click={() => navigateToDetail(data.id)}>
                <img
                    src={data.image}
                    class="h-12 w-12 object-cover rounded-full"
                    alt=""
                />
                <div class="flex flex-col">
                    <p class="font-semibold">{data.subtitle}</p>
                    <p class="text-sm text-gray-500">{data.title}</p>
                </div>
            </div>
        {/each}
    </div>
</div>

<script>
    import { goto } from "$app/navigation";

    function handleBusinessVerbsButton() {
        goto("business_verb");
    }

    function handleBusinessNounButton() {
        goto("business_noun");
    }

    function handleBusinessAbbreviationButton() {
        goto("business_abbreviation");
    }

    function handleBusinessConversation() {
        goto("/conversation");
    }
</script>

<div class="min-h-screen flex flex-col p-8">
    <h1 class="mb-4 text-xl font-semibold">Course Menu</h1>
    <div class="grid grid-cols-12 gap-4">
        <div class="col-span-6" on:click={handleBusinessVerbsButton}>
            <div
                class="w-full h-20 bg-slate-800  rounded-md p-3 flex flex-col justify-end"
            >
                <p class="text-white font-medium">100 Business Verbs</p>
            </div>
        </div>
        <div class="col-span-6" on:click={handleBusinessNounButton}>
            <div
                class="w-full h-20 bg-slate-800 rounded-md p-3 flex flex-col justify-end"
            >
                <p class="text-white font-medium">100 Business Noun</p>
            </div>
        </div>
        <div class="col-span-6" on:click={handleBusinessAbbreviationButton}>
            <div
                class="w-full h-20 bg-slate-800  rounded-md p-3 flex flex-col justify-end"
            >
                <p class="text-white font-medium">50 Business Abbreviations</p>
            </div>
        </div>
        <div class="col-span-6" on:click={handleBusinessConversation}>
            <div
                class="w-full h-20 bg-slate-800  rounded-md p-3 flex flex-col justify-end"
            >
                <p class="text-white font-medium">50 Short Conversations</p>
            </div>
        </div>
    </div>
</div>

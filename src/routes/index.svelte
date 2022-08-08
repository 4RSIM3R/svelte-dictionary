<script>
    import { goto } from "$app/navigation";
    import { onMount } from "svelte";

    function handleSignInButton() {
        goto("/menu");
    }

    onMount(() => {});
</script>

<div class="min-h-screen flex flex-col justify-center items-center">
    <img
        src="logo.png"
        alt="Logo Bussworld"
        class="h-48 w-48 object-cover mb-4"
    />
    <button
        type="button"
        on:click={handleSignInButton}
        class="text-white bg-gray-800 font-medium rounded-lg text-sm px-5 py-2 mr-2 mb-2 "
    >
        Go To Menu
    </button>
</div>

<script>
    import { goto } from "$app/navigation";

    function handleAboutUsButton() {
        goto("/about");
    }
</script>

<div class="min-h-screen flex flex-col p-8">
    <h1 class="mb-4 text-xl font-semibold">Bussworld Apps</h1>
    <div class="grid grid-cols-12 gap-4">
        <div class="col-span-6">
            <div
                on:click={handleAboutUsButton}
                class="w-full h-20 bg-slate-800  rounded-md p-3 flex flex-col justify-end"
            >
                <p class="text-white font-medium">About Us</p>
            </div>
        </div>
        <div class="col-span-6">
            <div
                class="w-full h-20 bg-slate-800 rounded-md p-3 flex flex-col justify-end"
            >
                <p class="text-white font-medium">Business Vocabulary</p>
            </div>
        </div>
        <div class="col-span-6">
            <div
                class="w-full h-20 bg-slate-800  rounded-md p-3 flex flex-col justify-end"
            >
                <p class="text-white font-medium">Sign In For Course</p>
            </div>
        </div>
        <div class="col-span-6">
            <div
                class="w-full h-20 bg-slate-800  rounded-md p-3 flex flex-col justify-end"
            >
                <p class="text-white font-medium">More Information</p>
            </div>
        </div>
    </div>
</div>

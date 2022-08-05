<script>
    let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
</script>

<div class="min-h-screen flex flex-col p-8">
    <h1 class="mb-4 text-xl font-semibold">Business Vocabulary</h1>
    <input
        type="text"
        id="email"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-3 mb-4"
        placeholder="Search word here.."
        required="true"
    />
    <div class="flex flex-col overflow-y-auto">
        {#each nums as num}
            <div class="w-full p-4 shadow-md rounded-sm mb-4">
                <p class="text-lg font-semibold">Borrow - Meminjam</p>
                <p class="text-sm mt-2">
                    to take and use something that belongs to somebody else, and
                    return it to them at a later time
                </p>
            </div>
        {/each}
    </div>
</div>

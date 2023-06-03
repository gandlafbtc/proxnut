<script lang="ts">
	export let level: string;
	export let message: string;
</script>

{#if level==='warning'}
<div class="flex gap-1 p-1 pl-2 bg-yellow-200 w-full mx-2 mt-1 rounded-md">
	<span class="font-bold text-xs text-yellow-700">{level}</span>
	<span class="text-xs text-yellow-700">{message}</span>
</div>
{:else if  level==='error'}
<div class="flex gap-1 p-1 pl-2 bg-red-200 w-full mx-2 mt-1 rounded-md">
	<span class="font-bold text-xs text-red-700">{level}</span>
	<span class="text-xs text-red-700">{message}</span>
</div>
{:else if  level==='success'}
<div class="flex gap-1 p-1 pl-2 bg-green-200 w-full mx-2 mt-1 rounded-md">
	<span class="font-bold text-xs text-green-700">{level}</span>
	<span class="text-xs text-green-700">{message}</span>
</div>
{:else if  level==='info'}
<div class="flex gap-1 p-1 pl-2 bg-blue-200 w-full mx-2 mt-1 rounded-md">
	<span class="font-bold text-xs text-blue-700">{level}</span>
	<span class="text-xs text-blue-700">{message}</span>
</div>
{/if}
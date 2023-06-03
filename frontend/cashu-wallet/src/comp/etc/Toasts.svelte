<script>
	import Toast from "./Toast.svelte";
	import { notifications } from "../../stores";
</script>

<div class="fixed z-20 flex flex-col w-60">
	{#each $notifications as toast}
		<Toast
			level={toast.level}
			message={toast.message}
			messageTitle={toast.messageTitle}
		/>
	{/each}
</div>

<script lang="ts">
    export let general: {isStoreTokens: boolean}

    if (!general){
        general = {
            isStoreTokens : true
        }
    }
</script>
<div class="flex gap-2">
    <p>
        Store claimed tokens
    </p>
    <input type="checkbox" class="toggle toggle-primary" bind:checked={general.isStoreTokens} />
</div>
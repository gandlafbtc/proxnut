<script lang="ts">
	import type { Config } from "../../../types";

 export let config: Config
</script>


<div class="card w-full bg-secondary text-primary-content">
    <div class="card-body">

        <div class="flex justify-between">
            <div>
                <h2 class="card-title w-full">Hosts mapped</h2>
                <p>
                    {config.HOST_MAP.length??0}
                </p>
            </div>
           
            <div class="">
                <h2 class="card-title text-right">Routes configured</h2>

                <p>
                    {config.ROUTE_MAP.length??0}
                </p>
            </div>

        </div>
    </div>
  </div>
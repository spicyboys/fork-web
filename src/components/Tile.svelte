<script lang="ts">
  export let width: 2 | 4 | 6 | 8 | 12 = 12;
</script>

<div class={`tile is-${width} is-parent`}>
  <div class="tile is-child">
    <article class="tile is-child notification is-info">
      {#if $$slots.title}
        <p class="title"><slot name="title" /></p>
      {/if}
      {#if $$slots.subtitle}
        <p class="subtitle"><slot name="subtitle" /></p>
      {/if}
    </article>
  </div>
</div>

<script lang="ts">
  import type firebase from "firebase";
  import { createEventDispatcher } from "svelte";

  export let user: firebase.User | undefined;

  const dispatch = createEventDispatcher<{
    login: () => void;
    logout: () => void;
  }>();
</script>

<div class="navbar-menu">
  <div class="navbar-end">
    <div class="navbar-item">
      <div class="buttons">
        {#if user}
          <button class="button" on:click={() => dispatch("logout")}>
            <strong>Logout</strong>
          </button>
        {:else}
          <button class="button is-primary" on:click={() => dispatch("login")}>
            <strong>Log In / Sign Up</strong>
          </button>
        {/if}
      </div>
    </div>
  </div>
</div>

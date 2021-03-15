<script lang="ts">
  import type firebase from "firebase";
  export let user: firebase.User;

  import { collectionData } from "rxfire/firestore";
  import { db } from "../../firebase";

  let recipes = collectionData(
    db.collection("recipes").where("author_uid", "==", user.uid)
  );
</script>

<h1 class="title">Hello {user.displayName}!</h1>
<div class="card">
  <div class="card-content">
    <div class="content">
      {#if $recipes === undefined}
        loading...
      {:else if $recipes.length === 0}
        No Recipes!
      {:else}
        {JSON.stringify($recipes)}
      {/if}
    </div>
  </div>
</div>

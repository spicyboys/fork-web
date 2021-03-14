<script lang="ts">
  import type firebase from "firebase";
  export let user: firebase.User;
</script>

<section class="hero">
  <div class="hero-body">
    <p class="title">
      Hello {user.displayName}
    </p>
  </div>
</section>

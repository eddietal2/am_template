<script>
    import { onMount } from 'svelte';
    import { goto } from '$app/navigation';
    import { Label, Input, FloatingLabelInput, Helper, Textarea } from 'flowbite-svelte';

    onMount(() => {
      return;
    })
</script>
<main>
  <!-- Header -->
  <div class="mx-auto w-11/12 lg:w-11/12 xl:w-10/12">
    <h1 class="jersey-font page-header">CONTACT US</h1>
    <p class="sm:w-1/2 lg:w-1/2">Have a question? Have a comment? Want to work with, or invest in Final Boss? Please contact us: </p>
    <!-- Spacer -->
    <div class="h-4"></div>
     
    <!-- Form -->
    <div class="w-full lg:w-1/2">
      <FloatingLabelInput defaultClass={"mb-2"} style="filled" color="base" type="text">
        Name
      </FloatingLabelInput>
      <!-- Spacer -->
      <div class="h-4"></div>
      <FloatingLabelInput defaultClass={"mb-2"} style="filled" color="base" type="text">
        Email
      </FloatingLabelInput>
      <!-- Spacer -->
      <div class="h-4"></div>
      <Textarea placeholder="Your message" rows="4" name="message" />
      <p class="pt-2">
        Remember, contributions to this topic should follow our Community Guidelines.
      </p>
    </div>
  </div>
</main>
<style>

</style>

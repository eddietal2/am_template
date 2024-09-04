<script lang="ts">
  import { FloatingLabelInput, Textarea, Toast } from 'flowbite-svelte';
  import { CheckCircleOutline, CloseCircleOutline } from 'flowbite-svelte-icons'
  import { enhance } from '$app/forms';

  // TailwindCSS Classes
  const successToastClass = 'w-full max-w-xl z-50 p-4 text-white text-3xl bg-black shadow dark:text-white dark:bg-black border-2 border-[#00ff00] rounded gap-3'
  const errorToastClass = 'w-full max-w-sm lg:max-w-xl z-50 p-4 text-white text-3xl bg-black shadow dark:text-white dark:bg-black border-2 border-[#dd0000] rounded gap-3'
  const textareaClass = 'p-2.5 mt-4 text-sm bg-gray-100 text-black dark:text-black dark:bg-gray-200 focus:ring-primary-500 border-black focus:border-primary-500 dark:focus:ring-primary-500 dark:focus:border-primary-500 disabled:cursor-not-allowed disabled:opacity-50'

  // Toasts
  let successToast = false;
  function showSuccessToast() {
    successToast = true;
    setTimeout(() => {
      successToast = false;
    }, 8000);
  }

  let errorToast = false;
  let errorToastMessage = '';
  function showErrorToast(message: string) {
    errorToastMessage = message;
    errorToast = true;
    setTimeout(() => {
      errorToast = false;
      errorToastMessage = '';
    }, 5000);
  }


  // Contact Form Submission
  let contactInfo = {
    name: '',
    email: '',
    message: '',
  }
  async function handleSubmit(event: SubmitEvent) {
    console.log('Attempting to Submit Form...');
    const form = event.currentTarget as HTMLFormElement; 

    try {
      // Check if User has filled out entire form
      if( contactInfo.name == '' || 
          contactInfo.email == '' || 
          contactInfo.message == '' ) 
        { return showErrorToast('Please fill out the entire form') }

        // Fetch Slack API Request
        const response = await fetch(form.action, {
          method: form.method,
          body: new FormData(form)   
        });

        // Success Response
        if (response.ok) {
          const data = await response.json();
          showSuccessToast();

          // Failure Response
        } else {
          console.error('Error submitting form:', response.status);
          showErrorToast('There was an error submitting your form. Please try again later.')
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      showErrorToast('There was an error submitting your form. Please try again later.')
    }
  }

</script>
<main>
  <!-- Header -->
  <div class="mx-auto px-4 container">
    <h1 class="mb-2 mt-8 page-header">CONTACT US</h1>
    <p class="text-md lg:text-xl sm:w-1/2 lg:w-1/2">Have a question? Have a comment? Want to work with, or invest in Final Boss? Please contact us: </p>
    <!-- Spacer -->
    <div class="h-4"></div>
     
    <!-- Form -->
    <div class="w-full lg:w-1/2">
    <form method="POST" use:enhance on:submit|preventDefault={handleSubmit}>
      <FloatingLabelInput 
        bind:value={contactInfo.name}
        maxlength="100"
        name="name"
        classInput={"text-black dark:text-black"}
        type="text">
        Name
      </FloatingLabelInput>
      <!-- Spacer -->
      <div class="h-4"></div>
      <FloatingLabelInput
        bind:value={contactInfo.email}
        maxlength="100"
        name="email"
        classInput={"text-black dark:text-black"}
        type="email"
        >
        Email
      </FloatingLabelInput>

      <!-- Spacer -->
      <div class="h-4"></div>
      <Textarea 
        bind:value={contactInfo.message}
        maxlength="500"
        name="message"
        style="outlined"
        unWrappedClass={textareaClass}
        placeholder="Your message" rows="4"  />
      <button
        type="submit"
        class="block w-full bg-black h-10 rounded text-white text-lg mt-2 hover:bg-[var(--red)] duration-200">
          Submit
      </button>
    </form>
    <!-- Toasts -->
    {#if successToast}
      <Toast 
        position={"top-right"}
        divClass={successToastClass} 
        contentClass={'w-full text-lg lg:text-2xl font-normal'} 
        dismissable={true} 
        align={true}>
          <span><CheckCircleOutline size="xl" color="#00ff00"></CheckCircleOutline></span>
          <span>Your message has been submitted! We will get back to you soon.</span>
      </Toast>
    {/if}
    {#if errorToast}
      <Toast 
        position={"top-right"}
        divClass={errorToastClass} 
        contentClass={'w-full text-lg lg:text-2xl font-normal'} 
        dismissable={true} 
        align={true}>
          <span><CloseCircleOutline size="xl" color="#dd0000"></CloseCircleOutline></span>
          <span>{errorToastMessage}</span>
      </Toast>
    {/if}
  </div>
</main>
<style>

</style>

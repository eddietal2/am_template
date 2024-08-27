<script>
    import { onMount } from 'svelte';
    import { goto } from '$app/navigation';
    import { Button } from 'flowbite-svelte';
    function testerLink() {
        window.open('https://forms.gle/SWN4pGnP4crNx78e7', '_blank');
    }

    onMount(() => {
      return;
    })
</script>
<main style="">
    <!-- Info -->
    <div id="info" class="mx-auto p-5 rounded h-auto justify-center md:shadow-4xl w-11/12 md:w-5/6 lg:w-1/2 md:bg-[#FFFFFF05]">
        <h1>Home</h1>
    </div>
</main>
<style>
    #logo {
        opacity: 0;
        animation: fade-in-hor 600ms ease 500ms forwards;
    }
    #info {
        opacity: 0;
        animation: fade-in-ver 600ms ease 1000ms forwards;
    }
    @keyframes fade-in-hor {
        0% {
            transform: translateX(-1.25rem);
        }
        100% {
            opacity: 1;
            transform: translateX(0rem);
        }
    }
    @keyframes fade-in-ver {
        0% {
            transform: translateY(1.25rem);
        }
        100% {
            opacity: 1;
            transform: translateY(0rem);
        }
    }
</style>
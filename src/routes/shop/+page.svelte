<script>
    import { onMount } from 'svelte';
    import { goto } from '$app/navigation';
    import { Button } from 'flowbite-svelte';

    onMount(() => {
      return;
    })

    let characters = [
      {
        name: 'Phoenix',
        photo: 'https://ik.imagekit.io/lgpq0vloy/Cosmic%20Collsions/Characters/DALL_E%202024-04-09%2021.17.57%20-%20In%20a%20universe%20where%20advanced%20technology%20and%20interstellar%20warfare%20collide,%20Captain%20Aurora%20_Phoenix.jpg?updatedAt=1724781653546',
        title: 'The Captain',
        description: "A battle-hardened SSDF veteran, driven by the loss of her family in the alien attack. A brilliant tactician, she defends the solar system with unmatched skill, but her inner turmoil risks overwhelming her, as she battles between vengeance and hope.",
      },
      {
        name: 'Riley',
        photo: 'https://ik.imagekit.io/lgpq0vloy/Cosmic%20Collsions/Characters/DALLE2024-04-1008.58.35-LieutenantRiley_MacGyver_McKayknownasTheEngineerstandsoutwiththeirred-themedengineeringgearembodyinginno-ezgif.com-webp-to-jpg-co.jpg?updatedAt=1724391506293',
        title: 'The Engineer',
        description: "A young, improvisational genius who can turn scraps into solutions, from asteroid defenses to alien tech. Their rebellious nature and unconventional methods often clash with Phoenix's strict command, challenging them to find common ground and work as a team.",
      },
      {
        name: 'Johnny Sparks',
        photo: 'https://ik.imagekit.io/lgpq0vloy/Cosmic%20Collsions/Characters/DALLE2024-04-1009.02.32-CadetJohnny_Sparky_SparksknownasTheRookieembodiesthevibrantenergyanduntestedvalorofanewrecruit.Dressed-ezgif.com-webp-to-jpg-conv.jpg?updatedAt=1724391506509',
        title: 'The Rookie',
        description: "A newly minted graduate, Sparky is naive but full of courage and optimism. Despite their inexperience, they bring a fresh perspective and a contagious positive spirit, which could be the spark the resistance needs. An exceptional VR/AR gamer with a determination reminiscent of a young Leon Kennedy.",
      },
      {
        name: 'Xylo',
        photo: 'https://ik.imagekit.io/lgpq0vloy/Cosmic%20Collsions/Characters/DALLE2024-04-1008.55.44-EnhancingXyloshumanlikenessfurthertheynowexhibitamorepronouncedblendofhumanandetherealavianfeatures.The-ezgif.com-webp-to-jpg-con.jpg?updatedAt=1724391506584',
        title: 'The Alien',
        description: "An ethereal avian species with shimmering iridescent wings, hailing from a solar system bathed in twilight. With an innate grasp of astrophysics, Xylo navigates space with unmatched precision. Discovered after crash-landing on Earth, Xylo's gentle nature and otherworldly beauty quickly transformed initial fear into awe.",
      },
      {
        name: 'Wraith',
        photo: 'https://ik.imagekit.io/lgpq0vloy/Cosmic%20Collsions/Characters/85ce716b-cbed-4d90-b72c-981c6eecdedc.png?updatedAt=1724391761183',
        title: 'The AI',
        description: "Wraith, once a counterpart to Reaper, remains loyal to humanity. Operating in the shadows, Wraith uses its cyber capabilities to protect the solar system, quietly neutralizing threats and countering Reaper's plans. A silent guardian, it provides vital intelligence to the SSDF, ensuring the galaxy's survival.",
      },
    ]
</script>
<main>
  <!-- Header -->
  <div class="mx-auto w-11/12 lg:w-11/12 xl:w-10/12">
    <h1 class="jersey-font page-header">SHOP</h1>
  </div>

  <!-- Content -->
  <div class="flex flex-col md:flex-row mx-auto mt-2 h-auto lg:h-40 w-11/12 lg:w-11/12 xl:w-10/12"> 
    
    <!-- Photo -->
    <div class="w-full mb-5 lg:mr-6 md:w-1/4">
      <img 
      src="https://ik.imagekit.io/lgpq0vloy/Cosmic%20Collsions/Coz_Logo_Draft_2%20(2).png?updatedAt=1721968909845" 
      class="w-full my-4" 
      alt="Cosmic Collisions Logo"
      >
    </div>
    
    <!-- Text and Link -->
    <div class="w-full md:w-3/4">
      <p class="md:text-sm lg:text-lg sm:w-1/2 lg:w-3/4">
        <span class="block">
            <br>                            
            <ion-icon class="text-2xl relative top-0.5 text-[var(--green)] md:text-[var(--green)]" name="logo-apple"></ion-icon>
            <ion-icon class="text-2xl relative top-0.5 text-[var(--green)] md:text-[var(--green)]" name="logo-android"></ion-icon>
            <span class="text-sm text-[#dd0000] font-bold ml-2">Demo Release -  Fall 2024</span>
        </span>
        <br class="md:hidden">
        Get ready to shoot some aliens and asteroids in space, in an AR environment!
        Inspired by classics like <b>Galaga</b> and <b>Space Invaders</b>, we aim to add another dimension 
        - and story - to the traditional space shooter. Join our heroes from the SSDF (Solar System Defense Force), as they protect the Earth, the Sun, and their neighbors from an oncoming enemy attack.
        <br>
        <br>
    </p>
    <Button color="none" class="text-white text-md mt-2 w-full lg:w-40" style="background: var(--green-gradient);">Tester Sign Up</Button>
    </div>

  </div>

</main>
<style>

</style>

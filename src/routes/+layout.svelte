<script lang="ts">
  import "../app.css";
  import { page } from '$app/stores';
  import { Navbar, NavBrand, NavLi, NavUl, NavHamburger, Footer, FooterBrand, FooterCopyright, FooterIcon, FooterLink, FooterLinkGroup  } from 'flowbite-svelte';
  $: activeUrl = $page.url.pathname;

  // Navbar Link Classes
  const nonActiveNavLink = 'text-[#999] text-xl lg:text-lg  my-1 duration-100 raleway';
  const activeNavLink = 'text-[#dd0000] text-xl lg:text-lg lg:bg-transparent my-1 font-bold duration-100 raleway-700';

  // Should hide Navbar on mobile when a link is clicked
  let hideNavMenu = true;
  function onNavHamburgerClick()  {
      if(hideNavMenu) {
        hideNavMenu = false;
      } else {
        hideNavMenu = true;
      }
  };
  function onNavLinkClick()  {
      hideNavMenu = true;
  };
 
</script>
<main>
  <Navbar let:toggle class="fixed w-full top-0 z-50 backdrop-blur-lg bg-[#fff]/80 shadow-md" color="none">
      <NavBrand href="/">
        <!-- <img 
          src="" 
          class="h-9 sm:h-12" 
          alt="" /> -->

        <p class="font-bold text-3xl">Logo</p>
      </NavBrand>
      <NavHamburger menuClass={'text-black'} onClick={() => onNavHamburgerClick()}  />
      <NavUl {activeUrl} hidden={hideNavMenu}
        on:click={() => onNavLinkClick()}>
        <NavLi href="/" active={true} activeClass={activeNavLink} nonActiveClass={nonActiveNavLink}>HOME</NavLi>
        <NavLi href="/shop" active={true}  activeClass={activeNavLink} nonActiveClass={nonActiveNavLink}>SHOP</NavLi>
        <NavLi href="/blog" active={true}  activeClass={activeNavLink} nonActiveClass={nonActiveNavLink}>BLOG</NavLi>
        <NavLi href="/about" active={true}  activeClass={activeNavLink} nonActiveClass={nonActiveNavLink}>ABOUT</NavLi>
        <NavLi href="/contact" active={true}  activeClass={activeNavLink} nonActiveClass={nonActiveNavLink}>CONTACT</NavLi>
      </NavUl>
  </Navbar>

  <main class="min-h-screen py-16 lg:py-24" style="background: var(--bg-light-gray);">
    <slot></slot>
  </main>

  <Footer class="h-20 bg-black p-10">
    <div class="sm:flex sm:items-center sm:justify-between">
    <FooterCopyright href="/" by="Affiliate Marketing" year={2024} />
    <FooterLinkGroup ulClass="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
      <!-- <FooterLink href="/about">About</FooterLink>
      <FooterLink href="/contact">Contact</FooterLink> -->
    </FooterLinkGroup>
    </div>
  </Footer>

</main>
<style>
    
</style>
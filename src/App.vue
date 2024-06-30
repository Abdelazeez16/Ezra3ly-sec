<template>

    <Nav></Nav>
    <Landing></Landing>
    <About></About>
    <ACCORDION></ACCORDION>
    <Footer></Footer>
  
</template>

<script>
import Nav from './components/Nav.vue'
import Landing from './components/Landing.vue'
import About from './components/About.vue'
import ACCORDION from './components/Accordion.vue'
import Footer from './components/Footer.vue'


export default {
  name: 'App',
  components: {
    Nav,
    Landing,
    About,
    ACCORDION,
    Footer
  }
}
</script>

<style>
::selection{
  background: black;
  color: white;
}
</style>

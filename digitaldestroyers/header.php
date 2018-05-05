<?php  ?>
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <title>Health And Beauty</title>

    <?php wp_head(); ?>

    
  </head>
  <body <?php body_class(); ?>>
  
  <?php 
      if(is_home()){
        ?>
          <header>
        <?php 
      }
      else{
      ?>
          <header class = "sticky">
        <?php 
        }

      ?>

      <!--  Use php to dynamically get the title of page-->
      

      <a href="#" class="icon-menu"></a>
      <nav class="menu-items">
      <div class="nav-menu">
        <span>Menu</span>
        <a href="#" class="icon-cross"></a>
        <?php wp_nav_menu(array('theme_location' => 'menu1', 'menu_id' => 'main-menu')); ?>
  
  
      </div>
      </nav>

      <div class="social-menu">
        <ul>
          <li><a href="http://facebook.com" class="icon-facebook"><span class="hidden">Facebook</span></a></li>
          <li><a href="http://twitter.com" class="icon-twitter"><span class="hidden">Twitter</span></a></li>
          <li><a href="http://instagram.com" class="icon-instagram"><span class="hidden">Instagram</span></a></li>
        </ul>
      </div>
      
      <div class = "logo">
        <img class = "img1" src="http://healthandbeautyweb.ca/wp-content/uploads/2017/10/logo.png" alt="logo">
        <img class = "img2" src="http://healthandbeautyweb.ca/wp-content/uploads/2017/10/emily-sea-198689.png" alt="img">
      </div>

      

    </header>


    <main>
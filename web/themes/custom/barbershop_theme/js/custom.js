/**
 * @file
 * Global utilities.
 *
 */
(function($, Drupal) {

  'use strict';

  Drupal.behaviors.barbershop_theme = {
    attach: function(context, settings) {

      document.getElementById('first-btn').addEventListener('click', function() {
        var nextBlock = document.getElementById('block-barbershop-theme-servicesweprovidetitle');
        nextBlock.scrollIntoView({ behavior: 'smooth' });
    });

      // Custom code here

    }
  };

})(jQuery, Drupal);
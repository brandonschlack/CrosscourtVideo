/*
 *
 * Crosscourtvideo.com main script
 *
 */
"use strict";

/*
 * Document Ready - index.html
 */
$(function(){
    // Init WOW.js animations
    new WOW().init();

    var $navBrand = $("#navbrand img");
    $navBrand.hover(function(){
        $(this).attr("src","img/navbrand/ccv-navbrand-color.svg");
    }, function(){
        $(this).attr("src","img/navbrand/ccv-navbrand-white.svg");
    });

    //$(".feature-tab").hover(function(){
    //    $(this).addClass("hover");
    //},function(){
    //    $(this).removeClass("hover");
    //});
});
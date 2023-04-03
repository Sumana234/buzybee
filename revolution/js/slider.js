/*------------------------------------------------------------------------------*/
/*  Home_Page Slider
/*------------------------------------------------------------------------------*/

var revapi2,

  tpj;
  
  jQuery(function() {
    tpj = jQuery;
    if(tpj("#rev_slider_1_1").revolution == undefined){
      revslider_showDoubleJqueryError("#rev_slider_1_1");
    }else{
        revapi2 = tpj("#rev_slider_1_1").show().revolution({
        sliderType:"standard",
        visibilityLevels:"1240,1024,778,480",
        gridwidth:"1340,1340,778,480",
        gridheight:"785,785,450,320",
        spinner:"spinner0",
        perspective:600,
        perspectiveType:"local",
        editorheight:"785,785,450,320",
        responsiveLevels:"1240,1024,778,480",
        disableProgressBar:true,
          navigation: {
            onHoverStop:false,
            arrows: {
              enable:true,
              style:"uranus",
              hide_onmobile:true,
              hide_under:778,
              left: {
                h_offset:30
              },
              right: {
                h_offset:30
              }
            }
          },
        fallbacks: {
          allowHTML5AutoPlayOnAndroid:true
        },
      });
    }
    
  });


 /* (homepage -2 )*/
  jQuery(function() {
    tpj = jQuery;

    if(tpj("#rev_slider_2_1").revolution == undefined){
        revslider_showDoubleJqueryError("#rev_slider_2_1");
        
      }else{

        revapi2 = tpj("#rev_slider_2_1").show().revolution({
        sliderType:"standard",
        visibilityLevels:"1240,1024,778,480",
        gridwidth:"1340,1340,778,480",
        gridheight:"675,675,450,320",
        spinner:"spinner0",
        perspective:600,
        perspectiveType:"local",
        editorheight:"675,675,450,320",
        responsiveLevels:"1240,1024,778,480",
        disableProgressBar:true,
          navigation: {
            onHoverStop:false,
            arrows: {
              enable:true,
              style:"uranus",
              hide_onmobile:true,
              hide_under:778,
              left: {
                h_offset:30
              },
              right: {
                h_offset:30
              }
            }
          },
        fallbacks: {
          allowHTML5AutoPlayOnAndroid:true
        },
      });
    }
  });


  /* (homepage -3 )*/
  jQuery(function() {
    tpj = jQuery;

    if(tpj("#rev_slider_3_1").revolution == undefined){
        revslider_showDoubleJqueryError("#rev_slider_3_1");
        
      }else{

        revapi2 = tpj("#rev_slider_3_1").show().revolution({
        sliderType:"standard",
        visibilityLevels:"1240,1024,778,480",
        gridwidth:"1340,1340,778,480",
        gridheight:"700,700,450,320",
        spinner:"spinner0",
        perspective:600,
        perspectiveType:"local",
        editorheight:"700,700,450,320",
        responsiveLevels:"1240,1024,778,480",
        disableProgressBar:true,
          navigation: {
            onHoverStop:false,
            arrows: {
              enable:true,
              style:"uranus",
              hide_onmobile:true,
              hide_under:778,
              left: {
                h_offset:30
              },
              right: {
                h_offset:30
              }
            }
          },
        fallbacks: {
          allowHTML5AutoPlayOnAndroid:true
        },
      });
    }
  });

  function typetext() {
  var type_list = document.querySelector( '#typed_lists' );

    if( type_list ) {
      var typed = new Typed('#typed', {
        stringsElement: '#typed_lists',
        typeSpeed: 50,
        backSpeed: 50,
        cursorChar: '_',
        loop: true
      });
    }
   }

   jQuery(window).load(function(){
    typetext();
   });
  

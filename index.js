$(document).ready(function () {
          $(".Agility").hover(function (event) {
        $('.agility2').css('display','block');},function(event){
        $('.agility2').css('display','none');
        });

                $(".Reliability").hover(function (event) {
        $('.reliability2').css('display','block');},function(event){
        $('.reliability2').css('display','none');
        });

                $(".Speed").hover(function (event) {
        $('.speed2').css('display','block');},function(event){
        $('.speed2').css('display','none');
        });

                $(".Patience").hover(function (event) {
        $('.patience2').css('display','block');},function(event){
        $('.patience2').css('display','none');
        });

                $(".Creativity").hover(function (event) {
        $('.creativity2').css('display','block');},function(event){
        $('.creativity2').css('display','none');
        });

                $(".Stability").hover(function (event) {
        $('.stability2').css('display','block');},function(event){
        $('.stability2').css('display','none');
        });

                $(".Dynamic").hover(function (event) {
        $('.dynamic2').css('display','block');},function(event){
        $('.dynamic2').css('display','none');
        });

                $(".Comical").hover(function (event) {
        $('.comical2').css('display','block');},function(event){
        $('.comical2').css('display','none');
        });


                          $(".equip").click(function (event) {
        $('.mail').css('display','block');


        });
              $(".close_mail").click(function (event) {
        $('.mail').css('display','none');


        });




          document.getElementById('replaceButton'); 
            const content = document.getElementById('model_container');
            const button = document.querySelector("button.change1");

           button.addEventListener('click', function() { content.innerHTML = '<model-viewer src="/public/zz1/designer.glb" camera-controls style="width:380px; height: 380px; "></model-viewer>'; }); 




                   $(".change1").click(function (event) {
        $('.designport').css('display','block');
        $('.marketingport').css('display','none');

        });
        $(".reset").click(function (event) {
      $('.designport').css('display','none');
    });
            $(".change2").click(function (event) {
        $('.marketingport').css('display','block');
        $('.designport').css('display','none');

        });
        $(".reset").click(function (event) {
      $('.marketingport').css('display','none');
    });

     $(".nomnom_li").click(function (event) {
      $('.nomnom_content').css('display','block');
    });

       $(".close_nomnom").click(function (event) {
      $('.nomnom_content').css('display','none');
    });

      $(".freq_li").click(function (event) {
      $('.freq_content').css('display','block');
    });
    $(".close_freq").click(function (event) {
      $('.freq_content').css('display','none');
    });

   $(".tea_li").click(function (event) {
      $('.tea_content').css('display','block');
    });
    $(".close_tea").click(function (event) {
      $('.tea_content').css('display','none');
    });

    $(".drip").click(function (event) {
      $('.content_drip').css('display','flex');
    });

      $(".close_drip").click(function (event) {
      $('.content_drip').css('display','none');
    });

     $(".wy").click(function (event) {
      $('.contain_wy').css('display','block');
    });
    $(".close_wy").click(function (event) {
      $('.contain_wy').css('display','none');
    });


        $(".matsu").click(function (event) {
      $('.contain_matsu').css('display','flex');
    });
    $(".close_matsu").click(function (event) {
      $('.contain_matsu').css('display','none');
    });

            document.getElementById('resetbtn'); 
            const content2 = document.getElementById('model_container');
            const button2 = document.querySelector("button.reset");

           button2.addEventListener('click', function() { content2.innerHTML = '<model-viewer src="/public/zz1/first.glb" camera-controls style="width:380px; height: 380px; "></model-viewer>'; }); 

            document.getElementById('replaceButton2'); 
            const content3 = document.getElementById('model_container');
            const button3 = document.querySelector("button.change2");

           button3.addEventListener('click', function() { content3.innerHTML = '<model-viewer src="/public/zz1/marketing.glb" camera-controls style="width:380px; height: 380px; "></model-viewer>'; }); 


  });
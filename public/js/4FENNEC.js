

let scene4, camera4, renderer4,controls4,loader4,md;
let contt4 = document.getElementById("secondd");



     
        scene4 = new THREE.Scene();
        camera4 = new THREE.PerspectiveCamera(20,contt4.offsetWidth / contt4.offsetHeight,0.1,1000);
        camera4.position.set(0,0,25);
        camera4.lookAt(scene4.position); 
        renderer4 = new THREE.WebGLRenderer({antialias:true,alpha:true});
        
      
        renderer4.setSize(window.innerWidth,window.innerHeight);

        //renderer4.setClearColor( 0x333, 1);

        contt4.appendChild(renderer4.domElement);

         controls4 = new THREE.OrbitControls(camera4,renderer4.domElement);
        controls4.addEventListener('change',()=>{ renderer4;});
        
        controls4.minDistance = 2;
        controls4.maxDistance =5000000;
        

    


          


        loader4 = new THREE.GLTFLoader();

       

        
        // Load a glTF resource
        loader4.load(
           
            '/js/FK.glb',
           
            function ( gltf ) {
              console.log(gltf);


               gltf.scene.position.set(-3,0,-2);
                
               md = gltf.scene;
             md.scale.set(1, 1, 1);
             md.rotation.y =md.rotation.y-10;

            /* const box34 = new THREE.Box3().setFromObject(md);
             const vector4 = new THREE.Vector3();
             box34.getCenter(vector4);
             md.position.set(-vector4.x, -vector4.y, -vector4.z);
             */

             //md.position.set(-2, -1.3, 0)
             // md.rotation.x = Math.PI / 2
                scene4.add( md );
        
                    /*
                scene4.add(gltf.animations); // Array<THREE.AnimationClip>
                scene4.add(gltf.scene); // THREE.Group
                scene4.add(gltf.scenes); // Array<THREE.Group>
                scene4.add(gltf.cameras); // Array<THREE.Camera>
                scene4.add(gltf.asset); // Object
                */
                  
                
                
                //renderer4;
        
            },
            // called while loading is progressing
            function ( xhr ) {
        
                console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );
        
            },
            // called when loading has errors
            function ( error ) {
        
                console.log( 'An error happened' );
        
            }
        );
  
  
   

        /*
          
         const light4f= new THREE.DirectionalLight(0xe6e6e6,1);
         light4f.position.set(-900,-200,1);
         scene4.add(light4f);
          */
         
         
         const amibientLight = new THREE.AmbientLight(0x404040, 2);
         scene4.add(amibientLight);
     
         // direction lights setup
         const spotLight1 = new THREE.SpotLight(0x1d27f0, 5);
         spotLight1.position.set(6, 11, 6);
         spotLight1.castShadow = true;
         const spotLightHelper1 = new THREE.SpotLightHelper(spotLight1, 1, 0x00ff00);
         scene4.add(spotLight1);
     
         // orenge light setup
         const spotLight2 = new THREE.SpotLight(0xf57d22, 2);
         spotLight2.position.set(-10, 0, 12);
         spotLight2.castShadow = true;
         const spotLightHelper2 = new THREE.SpotLightHelper(spotLight2, 2, 0x00ff00);
         scene4.add(spotLight2);
     
         // back light setup
         const spotLight3 = new THREE.SpotLight(0x1d27f0, 2);
         spotLight3.position.set(-10, 18, -17);
         spotLight3.castShadow = true;
         const spotLightHelper3 = new THREE.SpotLightHelper(spotLight3, 2, 0xff0000);
         scene4.add(spotLight3);

     
         

        animate4 ();
     
      function animate4 () {
        renderer4.render(scene4 ,camera4 );
        requestAnimationFrame(animate4 );
      }


      
      document.getElementById("ONN").addEventListener("mouseenter", function( event ) {
        // on met l'accent sur la cible de mouseenter
       // event.target.style.color = "purple";
       md.rotation.y =md.rotation.y-5;
       animate4();
        // on réinitialise la couleur après quelques instants
        setTimeout(function() {
          event.target.style.color = "";
        }, 500);
      }, false);




    window.addEventListener('resize',function(){
      var width=window.innerWidth;
      var height=window.innerHeight;
       
      camera4.aspect=width/height;
      renderer4.setSize(width,height);
      
      camera4.updateProjectionMatrix();
        

    });



         
    //init4();








      // camera.position.set(1200, -250, 2000);        camera inside position

      
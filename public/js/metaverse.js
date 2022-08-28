
let scenem, cameram, rendererm,controlsm,materialArraym;
let conttm = document.getElementById("third");


function initm()
    {
        scenem = new THREE.Scene();
        cameram = new THREE.PerspectiveCamera(55,window.innerWidth/window.innerHeight,45,30000);
        cameram.position.set(-900,-200,-900);

        rendererm = new THREE.WebGLRenderer({antialias:true});
        rendererm.setSize(window.innerWidth,window.innerHeight);
        renderer.domElement.style = "border-radius:30px;outline:none";
        conttm.appendChild(rendererm.domElement);

         controlsm = new THREE.OrbitControls(cameram,rendererm.domElement);
        controlsm.addEventListener('change',()=>{ rendererm; });
        
        controlsm.minDistance = 500;
        controlsm.maxDistance =20000;
        

        // px  nx   py   ny   pz   nz
        materialArraym = [];
        
        let texture_ft = new THREE.TextureLoader().load( '/js/meta/px.png');
        let texture_bk = new THREE.TextureLoader().load( '/js/meta/nx.png');
        let texture_up = new THREE.TextureLoader().load( '/js/meta/py.png');
        let texture_dn = new THREE.TextureLoader().load( '/js/meta/ny.png');
        let texture_rt = new THREE.TextureLoader().load( '/js/meta/pz.png');
        let texture_lf = new THREE.TextureLoader().load( '/js/meta/nz.png');
       
/*
        let texture_ft = new THREE.TextureLoader().load( '/js/house/px.png');
        let texture_bk = new THREE.TextureLoader().load( '/js/house/nx.png');
        let texture_up = new THREE.TextureLoader().load( '/js/house/py.png');
        let texture_dn = new THREE.TextureLoader().load( '/js/house/ny.png');
        let texture_rt = new THREE.TextureLoader().load( '/js/house/pz.png');
        let texture_lf = new THREE.TextureLoader().load( '/js/house/nz.png');
      */
          
        materialArraym .push(new THREE.MeshBasicMaterial( { map: texture_ft }));
        materialArraym .push(new THREE.MeshBasicMaterial( { map: texture_bk }));
        materialArraym .push(new THREE.MeshBasicMaterial( { map: texture_up }));
        materialArraym .push(new THREE.MeshBasicMaterial( { map: texture_dn }));
        materialArraym .push(new THREE.MeshBasicMaterial( { map: texture_rt }));
        materialArraym .push(new THREE.MeshBasicMaterial( { map: texture_lf }));
   
        
        for (let i = 0; i < 6; i++)
           materialArraym [i].side = THREE.BackSide;


       
        let skyboxGeom  = new THREE.BoxGeometry( 10000, 10000, 10000);
        let skyboxm  = new THREE.Mesh( skyboxGeom , materialArraym  );
        scenem.add( skyboxm  );  
         



 
  

        animatem ();
     
    }
      function animatem () {
        rendererm.render(scenem ,cameram );
        requestAnimationFrame(animatem );
      }


    initm();









      // camera.position.set(1200, -250, 2000);        camera inside position
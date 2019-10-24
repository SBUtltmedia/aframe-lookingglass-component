/* global AFRAME */

if (typeof AFRAME === 'undefined') {
  throw new Error('Component attempted to register before AFRAME was available.');
}

/**
 * Looking Glass component for A-Frame.
 */
AFRAME.registerComponent('lookingglass', {
  schema: {},

  /**
   * Set if component needs multiple instancing.
   */
  multiple: false,

  /**
   * Called once when component is attached. Generally for initial setup.
   */
  init: function() {
     var scene = document.querySelector('a-scene').object3D;
     var renderer = this.el.renderer;

     var cameraEl = document.querySelector('a-entity[camera]');
     if (!cameraEl) {
       cameraEl = document.querySelector('a-camera');
     }
     console.log(scene, renderer, cameraEl)

     var camera = new THREE.PerspectiveCamera(13.5, window.innerWidth / window.innerHeight, 0.1, 1000);
     camera.position.set(0, 0, 20);
     console.log(camera)

     // scene.onAfterRender = (renderer, scene, camera)=> {   this.holoplay.render() }
     // console.log(cameraEl)
     
     document.querySelector('#cameraHolder').setObject3D('camera', camera);
     cameraEl.parentNode.removeChild(cameraEl);
      //renderer = console.log()
     this.holoplay = new HoloPlay(scene, camera, renderer);

     // var holoplay = this.holoplay
   //   var oldRender = this.el.renderer.render;
   //   this.el.renderer.render = function() {
   //     //  console.log(arguments[1].type)
   //
   //     if (arguments[1].type == "PerspectiveCamera") {
   //       oldRender.apply(this, arguments)
   //
   //     } else {
   //       holoplay.render()
   //     }
   // }

    //  // scene.remove(cameraEl.getObject3D('camera'))

    // var tmpRender= renderer.render().clone()
    // renderer.render= ()=>{
    //   tmpRender()

    // this.holoplay.render()
    // }//scene.onAfterRender = (renderer, scene, camera)=> {   this.holoplay.render() }
    //     var scene2 = document.querySelector('a-scene').getAttribute('lookingglass');
    //
    //         // THREE may swap the camera used for the rendering if in VR, so we pass it to tock
    //         if (self.isPlaying) { self.tock(self.time, self.delta, camera); }
    //       };
    //console.log(this.el.renderer);
  },

  /**
   * Called when component is attached and when component data changes.
   * Generally modifies the entity based on the data.
   */
  update: function() {},

  /**
   *
   */
  tick: function() {
    this.holoplay.render();
  },

  /**
   * Called when a component is removed (e.g., via removeAttribute).
   * Generally undoes all modifications to the entity.
   */
  remove: function() {},

  /**
   * Called on each scene tick.
   */
  // tick: function (t) { },

  /**
   * Called when entity pauses.
   * Use to stop or remove any dynamic or background behavior such as events.
   */
  pause: function() {},

  /**
   * Called when entity resumes.
   * Use to continue or add any dynamic or background behavior such as events.
   */
  play: function() {},

  /**
   * Event handlers that automatically get attached or detached based on scene state.
   */
  events: {
    // click: function (evt) { }
  }
});

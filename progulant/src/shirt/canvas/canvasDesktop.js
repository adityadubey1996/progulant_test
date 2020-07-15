import React from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import $ from "jquery";
import "../../css/canvasDesktop.css";
class CanvasDesktop extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      height: null,
    };
  }

  CanvasDimension = () => {
    $(document).ready(() => {
      var sososo = $(".shirt-canvas-inner").height();
      //   console.log(sososo);
      this.setState({ height: sososo });
      //   console.log(this.state.height);
    });
    this.width = $(".shirt-canvas-inner-desktop").width();
    this.height = $(".shirt-canvas-inner-desktop").height();
    $(".shirt-canvas-inner").css({ position: "relative" });
  };

  sceneSetup = () => {
    console.log("from scenesetup desktop");
    // get container dimensions and use them for scene sizing
    const width = this.width;
    const height = this.height;
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(
      80, // fov = field of view
      width / height, // aspect ratio
      0.1, // near plane
      1000 // far plane
    );

    // set some distance from a cube that is located at z = 0
    this.camera.position.z = 2.4;

    this.renderer = new THREE.WebGLRenderer({ alpha: true });
    this.renderer.setSize(width, height);
    this.renderer.setClearColor(0xdddddd, 0.8);
    this.el.appendChild(this.renderer.domElement); // mount using React ref
    this.controls = new OrbitControls(this.camera, this.renderer.domElement);
  };

  componentDidMount() {
    $(document).ready(() => {
      var navbar_height = $(".navbar-desktop").height();
      var shirt_navbar = $(".navbar-shirt-outer").height();
      console.log(shirt_navbar);
      var screenHeight = $(".App-Desktop").height();
      var total = navbar_height + shirt_navbar;
      console.log(total);
      $(".shirt-canvas-inner-desktop").css({
        position: "absolute",
        top: total,
        height: screenHeight - total,
        zIndex: 99999,
      });
      this.CanvasDimension();
      this.sceneSetup();
    });

    // this.sceneSetup();
  }

  render() {
    return (
      <div className="shirt-canvas-inner-desktop">
        <div ref={(ref) => (this.el = ref)}> </div>
      </div>
    );
  }
}

export default CanvasDesktop;

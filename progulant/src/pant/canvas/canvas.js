import React from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import $ from "jquery";
import "../../css/canvas.css";
class Canvas extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      height: null,
    };
  }

  CanvasDimension = () => {
    $(document).ready(() => {
      var sososo = $(".shirt-canvas-inner").height();
      console.log(sososo);
      this.setState({ height: sososo });
    });
    console.log(this.state.height);
  };

  sceneSetup = () => {
    console.log("from scenesetup");
    // get container dimensions and use them for scene sizing
    const width = window.innerWidth;
    const height = this.state.height;
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(
      80, // fov = field of view
      width / height, // aspect ratio
      0.1, // near plane
      1000 // far plane
    );

    // set some distance from a cube that is located at z = 0
    this.camera.position.z = 2.4;

    this.renderer = new THREE.WebGLRenderer();
    this.renderer.setSize(width, height);
    this.renderer.setClearColor(0xdddddd, 0.5);
    this.el.appendChild(this.renderer.domElement); // mount using React ref
    this.controls = new OrbitControls(this.camera, this.renderer.domElement);
  };

  componentDidMount() {
    this.CanvasDimension();

    // this.sceneSetup();
  }

  render() {
    return (
      <div className="shirt-canvas-inner">
        <div ref={(ref) => (this.el = ref)}> </div>
      </div>
    );
  }
}

export default Canvas;

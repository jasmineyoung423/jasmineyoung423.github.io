import React, { Component } from "react";
import * as THREE from "three";
import { FirstPersonControls } from "three/examples/jsm/controls/FirstPersonControls";
import './three-scene.styles.css';

class ThreeScene extends Component 
{

    componentDidMount()
    {
        // Init
        const width = this.mount.clientWidth;
        const height = this.mount.clientHeight;
        this.scene = new THREE.Scene();
        
        //Renderer
        this.renderer = new THREE.WebGLRenderer({ antialias: true });
        this.renderer.setClearColor("#263238");
        this.renderer.setSize(width, height);

        
        
        //Camera
        this.camera = new THREE.PerspectiveCamera(100, width / height, 0.1, 1000);
        this.fpControls = new FirstPersonControls(this.camera, this.mount);
        this.fpControls.lookSpeed = 0.4;
        this.fpControls.movementSpeed = 20;
        this.fpControls.lookVertical = true;
        this.fpControls.constrainVertical = true;
        this.fpControls.verticalMin = 1.0;
        this.fpControls.verticalMax = 2.0;
        this.fpControls.lon = -150;
        this.fpControls.lat = 120;
        
        // Lights
        var spotLight = new THREE.SpotLight(0xFFFFFF);
        spotLight.position.set(-40, 40, -15);
        spotLight.castShadow = true;
        spotLight.shadow.mapSize = new THREE.Vector2(1024, 1024);
        spotLight.shadow.camera.far = 130;
        spotLight.shadow.camera.near = 40;

        //Mesh/Models
        
        const bufferCubegeometry = new THREE.BoxBufferGeometry( 5, 5, 5);
        const material = new THREE.MeshBasicMaterial( { color: 0xffff00, wireframe:true} );
        this.cube = new THREE.Mesh( bufferCubegeometry, material );
        this.cube.position.set(0,3,0);
        this.scene.add( this.cube);

        var planeGeometry = new THREE.PlaneGeometry(60, 20);
        var planeMaterial = new THREE.MeshBasicMaterial({
            color: 0xAAAAAA
        });

        var plane = new THREE.Mesh(planeGeometry, planeMaterial);
        plane.rotation.x = -0.5 * Math.PI;
        plane.position.set(15, 0, 0);
        this.scene.add(plane);

        // use ref as a mount point of the Three.js scene instead of the document.body
        this.mount.appendChild(this.renderer.domElement);

        this.renderScene();
        //start animation
        this.start();
    }

    componentWillUnmount()
    {
        this.stop()
        this.mount.removeChild(this.renderer.domElement)
    }
        
    start = () =>
    {
        if (!this.frameId)
        {
            this.frameId = requestAnimationFrame(this.animate);
        }
    };

    stop = () => 
    {
        cancelAnimationFrame(this.frameId);
    };

    animate = () =>
    {
        //Animate Models Here
        //Rotate Models
        if (this.cube)
        {
            this.cube.rotation.y += 0.01;
        }
        //this.fpControls.update();
        //ReDraw Scene with Camera and Scene Object
        this.renderScene();
        this.frameId = window.requestAnimationFrame(this.animate);
    };

    renderScene = () => 
    {
        if (this.renderer)
        {
            this.renderer.render(this.scene, this.camera);
        }
    };

    render() 
    {
        return(
            <div 
            className="canvas"
            ref={mount => { this.mount = mount}}
            />
        );
    }
}

export default ThreeScene;
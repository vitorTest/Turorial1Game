﻿#pragma strict

var speed : float = 0.2f;
var offset : float;

function Start () {
	
}

function Update () {
	offset = Time.time * speed;
	//renderer.material.mainTextureOffset = new Vector2(0, -offset);
	GetComponent.<Renderer>().material.mainTextureOffset = new Vector2(0, -offset);
}

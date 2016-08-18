function ground ()
{
	this.mass = 0;
	this.elasticity = 0.1;
	this.localInertia = 0;
	this.motionState = 0;
	this.rigidBodyInfo = 0;
	this.collisionShape = 0;
	this.collisionShapeTransform = 0; // remove =0 if creates problem for array inits
	this.physicsBody = 0;
	
	this.hasTexture = true;
	this.isTransparent = false;
	this.tranparancyLevel = 1.0;
	
	this.positionX = 0.0;
	this.positionY = -5.0;
	this.positionZ = 0.0;
	
	this.angleX = 0;
	this.angleY = 0;
	this.angleZ = 0;

	this.vertices = [
            -35.0,  0.0, -35.0,
            -35.0,  0.0,  35.0,
             35.0,  0.0,  35.0,
             35.0,  0.0, -35.0
	];

   this.vertexNormals = [
             0.0,  1.0,  0.0,
             0.0,  1.0,  0.0,
             0.0,  1.0,  0.0,
             0.0,  1.0,  0.0
	]; 

	this.vertexIndices = [
			0, 1, 2,      0, 2, 3

	];

	this.textureImage = "ground_stone_03.png";
	
	this.textureCoords = [
            0.0, 0.0,
            1.0, 0.0,
            1.0, 1.0,
            0.0, 1.0
	];
	
	this.color = [0.5, 1.0, 0.5, 1.0];
	this.vertexColors = [];
	for (var j=0; j < this.vertices.length/3; j++) 
	{
		this.vertexColors = this.vertexColors.concat(this.color);
	}
}

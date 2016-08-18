function object ()
{
	this.mass = 1;
	this.elasticity = 0.5;
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
	this.positionY = 5.0;
	this.positionZ = 0.0;
	
	this.angleX = 0;
	this.angleY = 0;
	this.angleZ = 0;
	imported_vertices = [
			 1.979525,-0.058972,-1.000000,0.488273,-0.031394,0.964698,-1.000000,-1.000000,1.000000,-1.000000,-1.000000,-1.000000,1.003780,1.003780,-1.000738,1.041681,1.041681,1.039770,-1.000000,1.000000,1.000000,-1.000000,1.000000,-1.000000,0.235839,1.241995,-2.169801,0.273739,1.279896,-0.129292,-1.767942,1.238215,-0.169063,-1.767941,1.238215,-2.169062,0.485593,-0.020064,1.715534,-1.002681,-0.988670,1.750837,0.303481,0.534629,1.370032,-1.002681,1.011330,1.750836
	];

	imported_texture_coordinates = [
				0,0.33435,0.33231,0.33333,0.33333,0.66565,0.00102,0.66667,0.33435,0.33333,0.66667,0.33231,0.99898,0.33333,1,0.66565,0.66769,0.66667,0.66667,0.33435,0.33333,0.33435,0.66565,0.33333,0.66565,0,0.33333,0.00102,0.33231,0,0.33333,0.33231,0.00102,0.33333,0,0.00102,0.33333,0.66769,0.33231,1,0,0.99898,0.33435,0.66667,0.66667,0.66565
	];
	
	imported_faces = [
					//v-indices+vertices x3, material index, tex-coords x3, v-normals x 3
					//There is an error in the export of vertex-indices hence using
					//trianges made of quadrangles in vertex-indices 
					42,0,1,2,0,0,1,2,0,0,0,42,0,2,3,0,0,2,3,0,0,0,42,7,6,10,0,4,5,5,1,1,1,42,7,10,11,0,4,5,4,1,1,1,42,0,4,5,0,6,7,8,2,2,2,42,0,5,1,0,6,8,9,2,2,2,42,5,6,15,0,10,11,11,3,3,3,42,5,15,14,0,10,11,10,3,3,3,42,2,6,7,0,12,5,4,4,4,4,42,2,7,3,0,12,4,13,4,4,4,42,4,0,3,0,14,15,16,5,5,5,42,4,3,7,0,14,16,17,5,5,5,42,8,11,10,0,18,19,20,6,6,6,42,8,10,9,0,18,20,3,6,6,6,42,5,4,8,0,8,7,7,7,7,7,42,5,8,9,0,8,7,8,7,7,7,42,4,7,11,0,14,17,17,8,8,8,42,4,11,8,0,14,17,14,8,8,8,42,6,5,9,0,11,10,10,9,9,9,42,6,9,10,0,11,10,11,9,9,9,42,12,14,15,0,21,10,11,10,10,10,42,12,15,13,0,21,11,22,10,10,10,42,2,1,12,0,2,1,1,11,11,11,42,2,12,13,0,2,1,2,11,11,11,42,1,5,14,0,9,8,8,12,12,12,42,1,14,12,0,9,8,9,12,12,12,42,6,2,13,0,5,12,12,13,13,13,42,6,13,15,0,5,12,5,13,13,13
				];

	imported_normals= [
					0.38943,-0.90829,0.1528,-0.29627,-0.9551,-0,0.92696,0.17169,0.33356,0.16151,0.85045,0.50065,-1,-0,-0,-9.7e-05,-0.000272,-1,-0.011147,0.99989,-0.009275,0.32885,0.94409,-0.023644,0.001774,-0.97963,-0.20078,-0.024117,0.97636,0.21479,0.12138,0.14152,0.98247,0.54566,-0.83788,0.014592,0.84202,-0.10413,0.52929,-0.99999,-0,-0.00357
	];


	this.vertices = [];
	this.vertexIndices = [];
	this.vertexNormals = [];
	this.textureImage = "bricks.png";
	this.textureCoords = [];
	
	for(var i = 0; i <  imported_faces.length; i+=11)
	{
		for(var i_vertex = 1; i_vertex < 4; i_vertex++)
		for(var i_coord = 0;  i_coord < 3;  i_coord++)
				this.vertices.push( imported_vertices[ imported_faces[i + i_vertex]*3 + i_coord ] );
				
		for(var i_vertex = 5; i_vertex < 8; i_vertex++)
		for(var i_coord = 0;  i_coord < 2;  i_coord++)		
				this.textureCoords.push( imported_texture_coordinates[ imported_faces[i + i_vertex]*2 + i_coord ] );

		for(var i_vertex = 8; i_vertex < 11; i_vertex++)
		for(var i_coord = 0;  i_coord < 3;  i_coord++)	
			this.vertexNormals.push( imported_normals[ imported_faces[i + i_vertex]*3 + i_coord ] );
	}
	
	for(var i = 0; i <  this.vertices.length/3; i++)
	{
		this.vertexIndices.push( i );
	}
	
	this.color = [0.5, 1.0, 0.5, 1.0];
	this.vertexColors = [];
	for (var j=0; j < this.vertices.length/3; j++) 
	{
		this.vertexColors = this.vertexColors.concat(this.color);
	}
	
   /*/
   var msg = this.vertices.length.toString()+"\n";
   for(var i = 0; i < this.vertices.length; i++)
   {
		msg = msg+this.vertices[i].toString()+", ";
		if (i != 0 && (i+1)%3 == 0) msg = msg+"\n";
   }
   alert (msg);
   //*/
}

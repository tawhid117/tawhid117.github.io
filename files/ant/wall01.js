function ball ()
{
	this.mass = 1.0;
	this.elasticity = 0.9;
	this.localInertia = 0;
	this.motionState = 0;
	this.rigidBodyInfo = 0;
	this.collisionShape = 0;
	this.collisionShapeTransform = 0; 
	this.physicsBody = 0;
	
	this.hasTexture = true;
	this.isTransparent = false;
	this.tranparancyLevel = 1.0;
	
	this.positionX = -5.0;
	this.positionY = 1.0;
	this.positionZ = -5.0;
	
	this.angleX = 0;
	this.angleY = 90;
	this.angleZ = 0;
	
	imported_vertices = [
		1.000000,-1.000000,-10.772914,1.000000,-1.000000,10.772914,-1.000000,-1.000000,10.772911,-1.000000,-1.000000,-10.772918,1.000000,1.000000,-10.772909,0.999999,1.000000,10.772921,-1.000000,1.000000,10.772910,-1.000000,1.000000,-10.772914	];

	imported_texture_coordinates = [
		0.4,2.1546,0.4,0,0.6,2.1546,0.2,0,0.2,2.1546,0,0,0.2,2.1546,1,0.2,0.8,0.2,1,0,0.6,0,0.8,0,0.8,0.4,0.4,2.1546,0,2.1546,0.8,2.1546,1,0.4
	];
	
	imported_faces = [
		42,0,1,3,0,0,1,2,0,0,0,42,4,7,5,0,3,1,4,1,1,1,42,0,4,5,0,5,3,6,2,2,2,42,1,5,2,0,7,8,9,3,3,3,42,2,6,3,0,10,11,2,4,4,4,42,4,0,7,0,8,7,12,5,5,5,42,1,2,3,0,1,10,2,0,0,0,42,7,6,5,0,1,13,4,1,1,1,42,1,0,5,0,14,5,6,2,2,2,42,5,6,2,0,8,11,9,6,6,6,42,6,7,3,0,11,15,2,4,4,4,42,0,3,7,0,7,16,12,7,7,7	];

	imported_normals= [
		0,-1,0,0,1,0,1,0,0,-1e-006,-3e-006,1,-1,0,0,3e-006,2e-006,-1,-5e-006,0,1,2e-006,2e-006,-1
	];


	this.vertices = [];
	this.vertexIndices = [];
	this.vertexNormals = [];
	this.textureImage = "old-metal.png";
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

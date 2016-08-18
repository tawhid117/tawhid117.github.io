function test ()
{
	this.reached = 0;
	
	this.mass = 1.0;
	this.elasticity = 0.9;
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
		
1.000000,-1.000000,-1.000000,1.000000,-1.000000,1.000000,-1.000000,-1.000000,1.000000,-1.000000,-1.000000,-1.000000,1.000000,1.000000,-0.999999,0.999999,1.000000,1.000001,-1.000000,1.000000,1.000000,-1.000000,1.000000,-1.000000		
	];

	imported_normals= [
0,-1,0,0,1,0,1,0,0,0,0,1,-1,0,0,0,0,-1,1,0,1e-006
		
	];
	
	imported_texture_coordinates = [
0.66667,0.33333,1,0.33333,0.66667,0.66667,0.33333,0.66667,0.33333,0.33333,0,0.33333,0.33333,0,0.66667,0,1,0,0,0.66667,1,0.66667,0.66667,0.33333,0,0

	];
	
	imported_faces = [
42,0,1,3,0,0,1,2,0,0,0,42,4,7,5,0,3,4,2,1,1,1,42,0,4,1,0,4,5,6,2,2,2,42,1,5,2,0,4,6,0,3,3,3,42,2,6,3,0,7,8,0,4,4,4,42,4,0,7,0,5,4,9,5,5,5,42,1,2,3,0,1,10,2,0,0,0,42,7,6,5,0,4,11,2,1,1,1,42,4,5,1,0,5,12,6,6,6,6,42,5,6,2,0,6,7,0,3,3,3,42,6,7,3,0,8,1,0,4,4,4,42,0,3,7,0,4,3,9,5,5,5

	];




	this.vertices = [];
	this.vertexIndices = [];
	this.vertexNormals = [];
	this.textureImage = "wood.png";
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
/*	this.vertexColors = [];
	for (var j=0; j < this.vertices.length/3; j++) 
	{
		this.vertexColors = this.vertexColors.concat(this.color);
	}
*/	
	var len = Math.round(this.color.length*this.vertices.length/3);
	this.vertexColors = new Array(len);
	for (var j=0; j < this.vertices.length/3; j++)
	{
	this.vertexColors[j] = this.color[0];
	this.vertexColors[j+1] = this.color[1];
	this.vertexColors[j+2] = this.color[2];
	this.vertexColors[j+3] = this.color[3];
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

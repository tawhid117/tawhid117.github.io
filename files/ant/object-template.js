function agent ()
{
	this.mass = 1.0;
	this.elasticity = 0.5;
	this.localInertia = 0;
	this.motionState = 0;
	this.rigidBodyInfo = 0;
	this.collisionShape = 0;
	this.collisionShapeTransform = 0; 
	this.physicsBody = 0;
	
	this.hasTexture = true;
	this.isTransparent = false;
	this.tranparancyLevel = 1.0;
	
	this.positionX = -2.0;
	this.positionY = 0.0;
	this.positionZ = 0.0;
	
	this.angleX = 0;
	this.angleY = 0;
	this.angleZ = 0;
	
	imported_vertices = [
		
		
	];

	imported_normals= [

		
	];
	
	imported_texture_coordinates = [


	];
	
	imported_faces = [


	];




	this.vertices = [];
	this.vertexIndices = [];
	this.vertexNormals = [];
	this.textureImage = "image.png";
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

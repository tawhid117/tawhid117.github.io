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
	
	this.positionX = -5.0;
	this.positionY = 2.0;
	this.positionZ = -5.0;
	
	this.angleX = 0;
	this.angleY = 0;
	this.angleZ = 0;
	
	imported_vertices = [
		-0.987643,-1.201106,1.146923,
		-0.987643,-1.201106,-0.853077,
		1.012357,-1.201106,-0.853077,
		1.012357,-1.201106,1.146923,
		-0.987643,1.227939,1.146923,
		-0.987643,1.227939,-0.853077,
		1.012357,1.227939,-0.853077,
		1.012357,1.227939,1.146923,
		-0.195273,2.566027,0.075662,
		-0.382866,2.509121,0.075662,
		-0.555753,2.416712,0.075662,
		-0.707289,2.292349,0.075662,
		-0.831652,2.140812,0.075662,
		-0.924062,1.967925,0.075662,
		-0.980968,1.780332,0.075662,
		-1.000183,1.585242,0.075662,
		-0.980968,1.390152,0.075662,
		-0.924062,1.202559,0.075662,
		-0.191524,2.566027,0.037602,
		-0.375513,2.509121,0.001004,
		-0.545078,2.416712,-0.032725,
		-0.693702,2.292349,-0.062288,
		-0.815676,2.140812,-0.086550,
		-0.906310,1.967925,-0.104578,
		-0.962122,1.780332,-0.115680,
		-0.980968,1.585242,-0.119429,
		-0.962122,1.390152,-0.115680,
		-0.906310,1.202559,-0.104578,
		-0.180422,2.566027,0.001004,
		-0.353736,2.509121,-0.070785,
		-0.513462,2.416712,-0.136946,
		-0.653464,2.292349,-0.194936,
		-0.768360,2.140812,-0.242528,
		-0.853736,1.967925,-0.277892,
		-0.906310,1.780332,-0.299669,
		-0.924062,1.585242,-0.307022,
		-0.906310,1.390152,-0.299669,
		-0.853736,1.202559,-0.277892,
		-0.162394,2.566027,-0.032725,
		-0.318372,2.509121,-0.136946,
		-0.462122,2.416712,-0.232997,
		-0.588120,2.292349,-0.317186,
		-0.691524,2.140812,-0.386278,
		-0.768360,1.967925,-0.437618,
		-0.815675,1.780332,-0.469233,
		-0.831652,1.585242,-0.479909,
		-0.815675,1.390152,-0.469233,
		-0.768360,1.202559,-0.437618,
		-0.138132,2.566027,-0.062288,
		-0.270780,2.509121,-0.194936,
		-0.393030,2.416712,-0.317186,
		-0.500182,2.292349,-0.424338,
		-0.588120,2.140812,-0.512276,
		-0.653464,1.967925,-0.577620,
		-0.693702,1.780332,-0.617858,
		-0.707289,1.585242,-0.631445,
		-0.693702,1.390152,-0.617858,
		-0.653464,1.202559,-0.577620,
		-0.108569,2.566027,-0.086550,
		-0.212790,2.509121,-0.242528,
		-0.308841,2.416712,-0.386278,
		-0.393030,2.292349,-0.512276,
		-0.462122,2.140812,-0.615680,
		-0.513462,1.967925,-0.692516,
		-0.545077,1.780332,-0.739831,
		-0.555753,1.585242,-0.755808,
		-0.545077,1.390152,-0.739831,
		-0.513462,1.202559,-0.692516,
		-0.074840,2.566027,-0.104578,-0.146629,2.509121,-0.277892,-0.212790,2.416712,-0.437618,-0.270780,2.292349,-0.667808,-0.353736,1.990529,-0.771182,-0.375512,1.780332,-0.830466,-0.382866,1.585242,-0.848218,-0.375512,1.390152,-0.830466,-0.353736,1.202559,-0.777892,-0.038242,2.566027,-0.115680,-0.074840,2.509121,-0.299669,-0.108568,2.416712,-0.469234,-0.138132,2.292349,-0.617858,-0.162394,2.140812,-0.739832,-0.180422,1.967925,-0.830466,-0.191524,1.780332,-0.886278,-0.195272,1.585242,-0.905124,-0.191524,1.390152,-0.886278,-0.180422,1.202559,-0.830466,-0.000182,2.566027,-0.119429,-0.000182,2.509121,-0.307022,-0.000182,2.416712,-0.479909,-0.000182,2.292349,-0.631445,-0.000182,2.140812,-0.755808,-0.000182,1.967925,-0.848218,-0.000182,1.780332,-1.258084,-0.000182,1.585242,-0.924338,-0.000182,1.390152,-0.905124,-0.000182,1.202559,-0.848218,0.037878,2.566027,-0.115680,0.074476,2.509121,-0.299669,0.108204,2.416712,-0.469233,0.137768,2.292349,-0.617858,0.162030,2.140812,-0.739831,0.180058,1.967925,-0.830466,0.191160,1.780332,-0.886278,0.194908,1.585242,-0.905124,0.191160,1.390152,-0.886278,0.180058,1.202559,-0.830466,0.074476,2.566027,-0.104578,0.146265,2.509121,-0.277892,0.212426,2.416712,-0.437618,0.270416,2.292349,-0.667808,0.353371,1.990529,-0.771182,0.375148,1.780332,-0.830466,0.382501,1.585242,-0.848218,0.375148,1.390152,-0.830466,0.353371,1.202559,-0.777892,0.108204,2.566027,-0.086550,0.212426,2.509121,-0.242528,0.308476,2.416712,-0.386278,0.392665,2.292349,-0.512276,0.461758,2.140812,-0.615680,0.513098,1.967925,-0.692516,0.544713,1.780332,-0.739831,0.555388,1.585242,-0.755808,0.544713,1.390152,-0.739831,0.513098,1.202559,-0.692516,0.137768,2.566027,-0.062288,0.270416,2.509121,-0.194936,0.392665,2.416712,-0.317186,0.499818,2.292349,-0.424338,0.587756,2.140812,-0.512276,0.653099,1.967925,-0.577620,0.693338,1.780332,-0.617858,0.706925,1.585242,-0.631445,0.693338,1.390152,-0.617858,0.653099,1.202559,-0.577620,0.162030,2.566027,-0.032725,0.318008,2.509121,-0.136946,0.461758,2.416712,-0.232996,0.587756,2.292349,-0.317186,0.691160,2.140812,-0.386278,0.767996,1.967925,-0.437618,0.815311,1.780332,-0.469233,0.831288,1.585242,-0.479908,0.815311,1.390152,-0.469233,0.767995,1.202559,-0.437618,0.180058,2.566027,0.001004,0.353371,2.509121,-0.070785,0.513098,2.416712,-0.136946,0.653099,2.292349,-0.194936,0.767996,2.140812,-0.242528,0.853371,1.967925,-0.277891,0.905945,1.780332,-0.299668,0.923697,1.585242,-0.307021,0.905945,1.390152,-0.299668,0.853371,1.202559,-0.277891,0.191160,2.566027,0.037602,0.375148,2.509121,0.001004,0.544713,2.416712,-0.032724,0.693338,2.292349,-0.062288,0.815311,2.140812,-0.086550,0.905945,1.967925,-0.104578,0.961757,1.780332,-0.115680,0.980603,1.585242,-0.119428,0.961758,1.390152,-0.115680,0.905945,1.202559,-0.104578,0.194908,2.566027,0.075662,0.382501,2.509121,0.075662,0.555388,2.416712,0.075662,0.706924,2.292349,0.075662,0.831287,2.140812,0.075662,0.923697,1.967925,0.075662,0.980603,1.780332,0.075662,0.999818,1.585242,0.075662,0.980603,1.390152,0.075662,0.923697,1.202559,0.075662,0.191160,2.566027,0.113722,0.375148,2.509121,0.150320,0.544713,2.416712,0.184048,0.693338,2.292349,0.213612,0.815311,2.140812,0.237874,0.905945,1.967925,0.255902,0.961757,1.780332,0.267004,0.980603,1.585242,0.270752,0.961757,1.390152,0.267004,0.905945,1.202559,0.255902,0.180058,2.566027,0.150320,0.353371,2.509121,0.222109,0.513098,2.416712,0.288269,0.653099,2.292349,0.346260,0.767995,2.140812,0.393852,0.853371,1.967925,0.429215,0.905945,1.780332,0.450992,0.923697,1.585242,0.458345,0.905945,1.390152,0.450992,0.853371,1.202559,0.429215,0.162030,2.566027,0.184048,0.318008,2.509121,0.288269,0.461757,2.416712,0.384320,0.587755,2.292349,0.468509,0.691159,2.140812,0.537602,0.767995,1.967925,0.588942,0.815311,1.780332,0.620557,0.831287,1.585242,0.631232,0.815311,1.390152,0.620557,0.767995,1.202559,0.588942,0.137768,2.566027,0.213612,0.270416,2.509121,0.346260,0.392665,2.416712,0.468509,0.499818,2.292349,0.575662,0.587755,2.140812,0.663600,0.653099,1.967925,0.728943,0.693337,1.780332,0.769182,0.706924,1.585242,0.782769,0.693337,1.390152,0.769182,0.653099,1.202559,0.728943,0.108204,2.566027,0.237874,0.212425,2.509121,0.393852,0.308476,2.416712,0.537602,0.392665,2.292349,0.663600,0.461757,2.140812,0.767003,0.513098,1.967925,0.843840,0.544713,1.780332,0.891155,0.555388,1.585242,0.907131,0.544713,1.390152,0.891155,0.513098,1.202559,0.843839,0.074476,2.566027,0.255902,0.146264,2.509121,0.429215,0.212425,2.416712,0.588942,0.270416,2.292349,0.728943,0.318007,2.140812,0.843839,0.353371,1.967925,0.929215,0.375148,1.780332,0.981789,0.382501,1.585242,0.999541,0.375148,1.390152,0.981789,0.353371,1.202559,0.929215,0.037878,2.566027,0.267004,0.074476,2.509121,0.450992,0.108204,2.416712,0.620557,0.137767,2.292349,0.769182,0.162029,2.140812,0.891155,0.180058,1.967925,0.981789,0.191159,1.780332,1.037601,0.194908,1.585242,1.056447,0.191159,1.390152,1.037601,0.180058,1.202559,0.981789,-0.000182,2.566027,0.270752,-0.000182,2.509121,0.458345,-0.000182,2.416712,0.631232,-0.000182,2.292349,0.782768,-0.000182,2.140812,0.907131,-0.000182,1.967925,0.999541,-0.000182,1.780332,1.056447,-0.000182,1.585242,1.075662,-0.000182,1.390152,1.056447,-0.000182,1.202559,0.999541,-0.038242,2.566027,0.267004,-0.074840,2.509121,0.450992,-0.108569,2.416712,0.620557,-0.138132,2.292349,0.769181,-0.162394,2.140812,0.891155,-0.180422,1.967925,0.981789,-0.191524,1.780332,1.037601,-0.195273,1.585242,1.056447,-0.191524,1.390152,1.037601,-0.180422,1.202559,0.981789,-0.074840,2.566027,0.255902,-0.146629,2.509121,0.429215,-0.212790,2.416712,0.588941,-0.270780,2.292349,0.728943,-0.318372,2.140812,0.843839,-0.353736,1.967925,0.929215,-0.375512,1.780332,0.981789,-0.382866,1.585242,0.999541,-0.375513,1.390152,0.981789,-0.353735,1.202559,0.929215,-0.108569,2.566027,0.237874,-0.212790,2.509121,0.393851,-0.308840,2.416712,0.537601,-0.393030,2.292349,0.663599,-0.462122,2.140812,0.767003,-0.513462,1.967925,0.843839,-0.545077,1.780332,0.891154,-0.555752,1.585242,0.907131,-0.545077,1.390152,0.891154,-0.513462,1.202559,0.843839,-0.000182,2.585242,0.075662,-0.138132,2.566027,0.213612,-0.270780,2.509121,0.346260,-0.393030,2.416712,0.468509,-0.500182,2.292349,0.575662,-0.588120,2.140812,0.663599,-0.653463,1.967925,0.728943,-0.693702,1.780332,0.769181,-0.707289,1.585242,0.782768,-0.693702,1.390152,0.769181,-0.653463,1.202559,0.728943,-0.162394,2.566027,0.184048,-0.318372,2.509121,0.288269,-0.462122,2.416712,0.384320,-0.588120,2.292349,0.468509,-0.691524,2.140812,0.537601,-0.768360,1.967925,0.588941,-0.815675,1.780332,0.620556,-0.831652,1.585242,0.631232,-0.815675,1.390152,0.620556,-0.768360,1.202559,0.588941,-0.180422,2.566027,0.150320,-0.353736,2.509121,0.222108,-0.513462,2.416712,0.288269,-0.653463,2.292349,0.346260,-0.768360,2.140812,0.393851,-0.853735,1.967925,0.429215,-0.906309,1.780332,0.450992,-0.924061,1.585242,0.458345,-0.906309,1.390152,0.450992,-0.853735,1.202559,0.429215,-0.191524,2.566027,0.113722,-0.375512,2.509121,0.150320,-0.545077,2.416712,0.184048,-0.693702,2.292349,0.213611,-0.815675,2.140812,0.237873,-0.906309,1.967925,0.255901,-0.962121,1.780332,0.267003,-0.980967,1.585242,0.270752,-0.962121,1.390152,0.267003,
		-0.906309,1.202559,0.255902
	];

	imported_texture_coordinates = [
		1,1,0,1,0,0,1,0,1,0.003058,0.99694,1,0,0.99694,0.003058,0
	];
	
	imported_faces = [
		42,1,0,4,0,0,1,2,0,0,0,42,1,4,5,0,0,2,3,0,0,0,42,5,6,2,0,2,3,0,1,1,1,42,5,2,1,0,2,0,1,1,1,1,42,6,7,3,0,2,3,0,2,2,2,42,6,3,2,0,2,0,1,2,2,2,42,0,3,7,0,0,1,2,3,3,3,42,0,7,4,0,0,2,3,3,3,3,42,0,1,2,0,4,5,6,4,4,4,42,0,2,3,0,4,6,7,4,4,4,42,7,6,5,0,2,3,0,5,5,5,42,7,5,4,0,2,0,1,5,5,5,42,13,12,22,0,2,3,0,6,6,6,42,13,22,23,0,2,0,1,6,6,6,42,14,13,23,0,2,3,0,7,7,7,42,14,23,24,0,2,0,1,7,7,7,42,9,8,18,0,2,3,0,8,8,8,42,9,18,19,0,2,0,1,8,8,8,42,15,14,24,0,2,3,0,9,9,9,42,15,24,25,0,2,0,1,9,9,9,42,10,9,19,0,2,3,0,10,10,10,42,10,19,20,0,2,0,1,10,10,10,42,16,15,25,0,2,3,0,11,11,11,42,16,25,26,0,2,0,1,11,11,11,42,11,10,20,0,2,3,0,12,12,12,42,11,20,21,0,2,0,1,12,12,12,42,17,16,26,0,2,3,0,13,13,13,42,17,26,27,0,2,0,1,13,13,13,42,12,11,21,0,2,3,0,14,14,14,42,12,21,22,0,2,0,1,14,14,14,42,22,21,31,0,2,3,0,15,15,15,42,22,31,32,0,2,0,1,15,15,15,42,23,22,32,0,2,3,0,16,16,16,42,23,32,33,0,2,0,1,16,16,16,42,24,23,33,0,2,3,0,17,17,17,42,24,33,34,0,2,0,1,17,17,17,42,19,18,28,0,2,3,0,18,18,18,42,19,28,29,0,2,0,1,18,18,18,42,25,24,34,0,2,3,0,19,19,19,42,25,34,35,0,2,0,1,19,19,19,42,20,19,29,0,2,3,0,20,20,20,42,20,29,30,0,2,0,1,20,20,20,42,26,25,35,0,2,3,0,21,21,21,42,26,35,36,0,2,0,1,21,21,21,42,21,20,30,0,2,3,0,22,22,22,42,21,30,31,0,2,0,1,22,22,22,42,27,26,36,0,2,3,0,23,23,23,42,27,36,37,0,2,0,1,23,23,23,42,36,35,45,0,2,3,0,24,24,24,42,36,45,46,0,2,0,1,24,24,24,42,31,30,40,0,2,3,0,25,25,25,42,31,40,41,0,2,0,1,25,25,25,42,37,36,46,0,2,3,0,26,26,26,42,37,46,47,0,2,0,1,26,26,26,42,32,31,41,0,2,3,0,27,27,27,42,32,41,42,0,2,0,1,27,27,27,42,33,32,42,0,2,3,0,28,28,28,42,33,42,43,0,2,0,1,28,28,28,42,34,33,43,0,2,3,0,29,29,29,42,34,43,44,0,2,0,1,29,29,29,42,29,28,38,0,2,3,0,30,30,30,42,29,38,39,0,2,0,1,30,30,30,42,35,34,44,0,2,3,0,31,31,31,42,35,44,45,0,2,0,1,31,31,31,42,30,29,39,0,2,3,0,32,32,32,42,30,39,40,0,2,0,1,32,32,32,42,45,44,54,0,2,3,0,33,33,33,42,45,54,55,0,2,0,1,33,33,33,42,40,39,49,0,2,3,0,34,34,34,42,40,49,50,0,2,0,1,34,34,34,42,46,45,55,0,2,3,0,35,35,35,42,46,55,56,0,2,0,1,35,35,35,42,41,40,50,0,2,3,0,36,36,36,42,41,50,51,0,2,0,1,36,36,36,42,47,46,56,0,2,3,0,37,37,37,42,47,56,57,0,2,0,1,37,37,37,42,42,41,51,0,2,3,0,38,38,38,42,42,51,52,0,2,0,1,38,38,38,42,43,42,52,0,2,3,0,39,39,39,42,43,52,53,0,2,0,1,39,39,39,42,44,43,53,0,2,3,0,40,40,40,42,44,53,54,0,2,0,1,40,40,40,42,39,38,48,0,2,3,0,41,41,41,42,39,48,49,0,2,0,1,41,41,41,42,54,53,63,0,2,3,0,42,42,42,42,54,63,64,0,2,0,1,42,42,42,42,49,48,58,0,2,3,0,43,43,43,42,49,58,59,0,2,0,1,43,43,43,42,55,54,64,0,2,3,0,44,44,44,42,55,64,65,0,2,0,1,44,44,44,42,50,49,59,0,2,3,0,45,45,45,42,50,59,60,0,2,0,1,45,45,45,42,56,55,65,0,2,3,0,46,46,46,42,56,65,66,0,2,0,1,46,46,46,42,51,50,60,0,2,3,0,47,47,47,42,51,60,61,0,2,0,1,47,47,47,42,57,56,66,0,2,3,0,48,48,48,42,57,66,67,0,2,0,1,48,48,48,42,52,51,61,0,2,3,0,49,49,49,42,52,61,62,0,2,0,1,49,49,49,42,53,52,62,0,2,3,0,50,50,50,42,53,62,63,0,2,0,1,50,50,50,42,64,63,72,0,2,3,0,51,51,51,42,64,72,73,0,2,0,1,51,51,51,42,59,58,68,0,2,3,0,52,52,52,42,59,68,69,0,2,0,1,52,52,52,42,65,64,73,0,2,3,0,53,53,53,42,65,73,74,0,2,0,1,53,53,53,42,60,59,69,0,2,3,0,54,54,54,42,60,69,70,0,2,0,1,54,54,54,42,66,65,74,0,2,3,0,55,55,55,42,66,74,75,0,2,0,1,55,55,55,42,61,60,70,0,2,3,0,56,56,56,42,61,70,71,0,2,0,1,56,56,56,42,67,66,75,0,2,3,0,57,57,57,42,67,75,76,0,2,0,1,57,57,57,42,71,70,79,0,2,3,0,58,58,58,42,71,79,80,0,2,0,1,58,58,58,42,76,75,85,0,2,3,0,59,59,59,42,76,85,86,0,2,0,1,59,59,59,42,73,72,82,0,2,3,0,60,60,60,42,73,82,83,0,2,0,1,60,60,60,42,69,68,77,0,2,3,0,61,61,61,42,69,77,78,0,2,0,1,61,61,61,42,74,73,83,0,2,3,0,62,62,62,42,74,83,84,0,2,0,1,62,62,62,42,70,69,78,0,2,3,0,63,63,63,42,70,78,79,0,2,0,1,63,63,63,42,75,74,84,0,2,3,0,64,64,64,42,75,84,85,0,2,0,1,64,64,64,42,84,83,93,0,2,3,0,65,65,65,42,84,93,94,0,2,0,1,65,65,65,42,79,78,88,0,2,3,0,66,66,66,42,79,88,89,0,2,0,1,66,66,66,42,85,84,94,0,2,3,0,67,67,67,42,85,94,95,0,2,0,1,67,67,67,42,80,79,89,0,2,3,0,68,68,68,42,80,89,90,0,2,0,1,68,68,68,42,86,85,95,0,2,3,0,69,69,69,42,86,95,96,0,2,0,1,69,69,69,42,81,80,90,0,2,3,0,70,70,70,42,81,90,91,0,2,0,1,70,70,70,42,82,81,91,0,2,3,0,71,71,71,42,82,91,92,0,2,0,1,71,71,71,42,83,82,92,0,2,3,0,72,72,72,42,83,92,93,0,2,0,1,72,72,72,42,78,77,87,0,2,3,0,73,73,73,42,78,87,88,0,2,0,1,73,73,73,42,93,92,102,0,2,3,0,74,74,74,42,93,102,103,0,2,0,1,74,74,74,42,88,87,97,0,2,3,0,75,75,75,42,88,97,98,0,2,0,1,75,75,75,42,94,93,103,0,2,3,0,76,76,76,42,94,103,104,0,2,0,1,76,76,76,42,89,88,98,0,2,3,0,77,77,77,42,89,98,99,0,2,0,1,77,77,77,42,95,94,104,0,2,3,0,78,78,78,42,95,104,105,0,2,0,1,78,78,78,42,90,89,99,0,2,3,0,79,79,79,42,90,99,100,0,2,0,1,79,79,79,42,96,95,105,0,2,3,0,80,80,80,42,96,105,106,0,2,0,1,80,80,80,42,91,90,100,0,2,3,0,81,81,81,42,91,100,101,0,2,0,1,81,81,81,42,92,91,101,0,2,3,0,82,82,82,42,92,101,102,0,2,0,1,82,82,82,42,103,102,111,0,2,3,0,83,83,83,42,103,111,112,0,2,0,1,83,83,83,42,98,97,107,0,2,3,0,84,84,84,42,98,107,108,0,2,0,1,84,84,84,42,104,103,112,0,2,3,0,85,85,85,42,104,112,113,0,2,0,1,85,85,85,42,99,98,108,0,2,3,0,86,86,86,42,99,108,109,0,2,0,1,86,86,86,42,105,104,113,0,2,3,0,87,87,87,42,105,113,114,0,2,0,1,87,87,87,42,100,99,109,0,2,3,0,88,88,88,42,100,109,110,0,2,0,1,88,88,88,42,106,105,114,0,2,3,0,89,89,89,42,106,114,115,0,2,0,1,89,89,89,42,110,109,118,0,2,3,0,90,90,90,42,110,118,119,0,2,0,1,90,90,90,42,115,114,124,0,2,3,0,91,91,91,42,115,124,125,0,2,0,1,91,91,91,42,112,111,121,0,2,3,0,92,92,92,42,112,121,122,0,2,0,1,92,92,92,42,108,107,116,0,2,3,0,93,93,93,42,108,116,117,0,2,0,1,93,93,93,42,113,112,122,0,2,3,0,94,94,94,42,113,122,123,0,2,0,1,94,94,94,42,109,108,117,0,2,3,0,95,95,95,42,109,117,118,0,2,0,1,95,95,95,42,114,113,123,0,2,3,0,96,96,96,42,114,123,124,0,2,0,1,96,96,96,42,123,122,132,0,2,3,0,97,97,97,42,123,132,133,0,2,0,1,97,97,97,42,118,117,127,0,2,3,0,98,98,98,42,118,127,128,0,2,0,1,98,98,98,42,124,123,133,0,2,3,0,99,99,99,42,124,133,134,0,2,0,1,99,99,99,42,119,118,128,0,2,3,0,100,100,100,42,119,128,129,0,2,0,1,100,100,100,42,125,124,134,0,2,3,0,101,101,101,42,125,134,135,0,2,0,1,101,101,101,42,120,119,129,0,2,3,0,102,102,102,42,120,129,130,0,2,0,1,102,102,102,42,121,120,130,0,2,3,0,103,103,103,42,121,130,131,0,2,0,1,103,103,103,42,122,121,131,0,2,3,0,104,104,104,42,122,131,132,0,2,0,1,104,104,104,42,117,116,126,0,2,3,0,105,105,105,42,117,126,127,0,2,0,1,105,105,105,42,132,131,141,0,2,3,0,106,106,106,42,132,141,142,0,2,0,1,106,106,106,42,127,126,136,0,2,3,0,107,107,107,42,127,136,137,0,2,0,1,107,107,107,42,133,132,142,0,2,3,0,108,108,108,42,133,142,143,0,2,0,1,108,108,108,42,128,127,137,0,2,3,0,109,109,109,42,128,137,138,0,2,0,1,109,109,109,42,134,133,143,0,2,3,0,110,110,110,42,134,143,144,0,2,0,1,110,110,110,42,129,128,138,0,2,3,0,111,111,111,42,129,138,139,0,2,0,1,111,111,111,42,135,134,144,0,2,3,0,112,112,112,42,135,144,145,0,2,0,1,112,112,112,42,130,129,139,0,2,3,0,113,113,113,42,130,139,140,0,2,0,1,113,113,113,42,131,130,140,0,2,3,0,114,114,114,42,131,140,141,0,2,0,1,114,114,114,42,141,140,150,0,2,3,0,115,115,115,42,141,150,151,0,2,0,1,115,115,115,42,142,141,151,0,2,3,0,116,116,116,42,142,151,152,0,2,0,1,116,116,116,42,137,136,146,0,2,3,0,117,117,117,42,137,146,147,0,2,0,1,117,117,117,42,143,142,152,0,2,3,0,118,118,118,42,143,152,153,0,2,0,1,118,118,118,42,138,137,147,0,2,3,0,119,119,119,42,138,147,148,0,2,0,1,119,119,119,42,144,143,153,0,2,3,0,120,120,120,42,144,153,154,0,2,0,1,120,120,120,42,139,138,148,0,2,3,0,121,121,121,42,139,148,149,0,2,0,1,121,121,121,42,145,144,154,0,2,3,0,122,122,122,42,145,154,155,0,2,0,1,122,122,122,42,140,139,149,0,2,3,0,123,123,123,42,140,149,150,0,2,0,1,123,123,123,42,155,154,164,0,2,3,0,124,124,124,42,155,164,165,0,2,0,1,124,124,124,42,150,149,159,0,2,3,0,125,125,125,42,150,159,160,0,2,0,1,125,125,125,42,151,150,160,0,2,3,0,126,126,126,42,151,160,161,0,2,0,1,126,126,126,42,152,151,161,0,2,3,0,127,127,127,42,152,161,162,0,2,0,1,127,127,127,42,147,146,156,0,2,3,0,128,128,128,42,147,156,157,0,2,0,1,128,128,128,42,153,152,162,0,2,3,0,129,129,129,42,153,162,163,0,2,0,1,129,129,129,42,148,147,157,0,2,3,0,130,130,130,42,148,157,158,0,2,0,1,130,130,130,42,154,153,163,0,2,3,0,131,131,131,42,154,163,164,0,2,0,1,131,131,131,42,149,148,158,0,2,3,0,132,132,132,42,149,158,159,0,2,0,1,132,132,132,42,158,157,167,0,2,3,0,133,133,133,42,158,167,168,0,2,0,1,133,133,133,42,164,163,173,0,2,3,0,134,134,134,42,164,173,174,0,2,0,1,134,134,134,42,159,158,168,0,2,3,0,135,135,135,42,159,168,169,0,2,0,1,135,135,135,42,165,164,174,0,2,3,0,136,136,136,42,165,174,175,0,2,0,1,136,136,136,42,160,159,169,0,2,3,0,137,137,137,42,160,169,170,0,2,0,1,137,137,137,42,161,160,170,0,2,3,0,138,138,138,42,161,170,171,0,2,0,1,138,138,138,42,162,161,171,0,2,3,0,139,139,139,42,162,171,172,0,2,0,1,139,139,139,42,157,156,166,0,2,3,0,140,140,140,42,157,166,167,0,2,0,1,140,140,140,42,163,162,172,0,2,3,0,141,141,141,42,163,172,173,0,2,0,1,141,141,141,42,172,171,181,0,2,3,0,142,142,142,42,172,181,182,0,2,0,1,142,142,142,42,167,166,176,0,2,3,0,143,143,143,42,167,176,177,0,2,0,1,143,143,143,42,173,172,182,0,2,3,0,144,144,144,42,173,182,183,0,2,0,1,144,144,144,42,168,167,177,0,2,3,0,145,145,145,42,168,177,178,0,2,0,1,145,145,145,42,174,173,183,0,2,3,0,146,146,146,42,174,183,184,0,2,0,1,146,146,146,42,169,168,178,0,2,3,0,147,147,147,42,169,178,179,0,2,0,1,147,147,147,42,175,174,184,0,2,3,0,148,148,148,42,175,184,185,0,2,0,1,148,148,148,42,170,169,179,0,2,3,0,149,149,149,42,170,179,180,0,2,0,1,149,149,149,42,171,170,180,0,2,3,0,150,150,150,42,171,180,181,0,2,0,1,150,150,150,42,181,180,190,0,2,3,0,151,151,151,42,181,190,191,0,2,0,1,151,151,151,42,182,181,191,0,2,3,0,152,152,152,42,182,191,192,0,2,0,1,152,152,152,42,177,176,186,0,2,3,0,153,153,153,42,177,186,187,0,2,0,1,153,153,153,42,183,182,192,0,2,3,0,154,154,154,42,183,192,193,0,2,0,1,154,154,154,42,178,177,187,0,2,3,0,155,155,155,42,178,187,188,0,2,0,1,155,155,155,42,184,183,193,0,2,3,0,156,156,156,42,184,193,194,0,2,0,1,156,156,156,42,179,178,188,0,2,3,0,157,157,157,42,179,188,189,0,2,0,1,157,157,157,42,185,184,194,0,2,3,0,158,158,158,42,185,194,195,0,2,0,1,158,158,158,42,180,179,189,0,2,3,0,159,159,159,42,180,189,190,0,2,0,1,159,159,159,42,195,194,204,0,2,3,0,160,160,160,42,195,204,205,0,2,0,1,160,160,160,42,190,189,199,0,2,3,0,161,161,161,42,190,199,200,0,2,0,1,161,161,161,42,191,190,200,0,2,3,0,162,162,162,42,191,200,201,0,2,0,1,162,162,162,42,192,191,201,0,2,3,0,163,163,163,42,192,201,202,0,2,0,1,163,163,163,42,187,186,196,0,2,3,0,164,164,164,42,187,196,197,0,2,0,1,164,164,164,42,193,192,202,0,2,3,0,165,165,165,42,193,202,203,0,2,0,1,165,165,165,42,188,187,197,0,2,3,0,166,166,166,42,188,197,198,0,2,0,1,166,166,166,42,194,193,203,0,2,3,0,167,167,167,42,194,203,204,0,2,0,1,167,167,167,42,189,188,198,0,2,3,0,168,168,168,42,189,198,199,0,2,0,1,168,168,168,42,198,197,207,0,2,3,0,169,169,169,42,198,207,208,0,2,0,1,169,169,169,42,204,203,213,0,2,3,0,170,170,170,42,204,213,214,0,2,0,1,170,170,170,42,199,198,208,0,2,3,0,171,171,171,42,199,208,209,0,2,0,1,171,171,171,42,205,204,214,0,2,3,0,172,172,172,42,205,214,215,0,2,0,1,172,172,172,42,200,199,209,0,2,3,0,173,173,173,42,200,209,210,0,2,0,1,173,173,173,42,201,200,210,0,2,3,0,174,174,174,42,201,210,211,0,2,0,1,174,174,174,42,202,201,211,0,2,3,0,175,175,175,42,202,211,212,0,2,0,1,175,175,175,42,197,196,206,0,2,3,0,176,176,176,42,197,206,207,0,2,0,1,176,176,176,42,203,202,212,0,2,3,0,177,177,177,42,203,212,213,0,2,0,1,177,177,177,42,212,211,221,0,2,3,0,178,178,178,42,212,221,222,0,2,0,1,178,178,178,42,207,206,216,0,2,3,0,179,179,179,42,207,216,217,0,2,0,1,179,179,179,42,213,212,222,0,2,3,0,180,180,180,42,213,222,223,0,2,0,1,180,180,180,42,208,207,217,0,2,3,0,181,181,181,42,208,217,218,0,2,0,1,181,181,181,42,214,213,223,0,2,3,0,182,182,182,42,214,223,224,0,2,0,1,182,182,182,42,209,208,218,0,2,3,0,183,183,183,42,209,218,219,0,2,0,1,183,183,183,42,215,214,224,0,2,3,0,184,184,184,42,215,224,225,0,2,0,1,184,184,184,42,210,209,219,0,2,3,0,185,185,185,42,210,219,220,0,2,0,1,185,185,185,42,211,210,220,0,2,3,0,186,186,186,42,211,220,221,0,2,0,1,186,186,186,42,221,220,230,0,2,3,0,187,187,187,42,221,230,231,0,2,0,1,187,187,187,42,222,221,231,0,2,3,0,188,188,188,42,222,231,232,0,2,0,1,188,188,188,42,217,216,226,0,2,3,0,189,189,189,42,217,226,227,0,2,0,1,189,189,189,42,223,222,232,0,2,3,0,190,190,190,42,223,232,233,0,2,0,1,190,190,190,42,218,217,227,0,2,3,0,191,191,191,42,218,227,228,0,2,0,1,191,191,191,42,224,223,233,0,2,3,0,192,192,192,42,224,233,234,0,2,0,1,192,192,192,42,219,218,228,0,2,3,0,193,193,193,42,219,228,229,0,2,0,1,193,193,193,42,225,224,234,0,2,3,0,194,194,194,42,225,234,235,0,2,0,1,194,194,194,42,220,219,229,0,2,3,0,195,195,195,42,220,229,230,0,2,0,1,195,195,195,42,235,234,244,0,2,3,0,196,196,196,42,235,244,245,0,2,0,1,196,196,196,42,230,229,239,0,2,3,0,197,197,197,42,230,239,240,0,2,0,1,197,197,197,42,231,230,240,0,2,3,0,198,198,198,42,231,240,241,0,2,0,1,198,198,198,42,232,231,241,0,2,3,0,199,199,199,42,232,241,242,0,2,0,1,199,199,199,42,227,226,236,0,2,3,0,200,200,200,42,227,236,237,0,2,0,1,200,200,200,42,233,232,242,0,2,3,0,201,201,201,42,233,242,243,0,2,0,1,201,201,201,42,228,227,237,0,2,3,0,202,202,202,42,228,237,238,0,2,0,1,202,202,202,42,234,233,243,0,2,3,0,203,203,203,42,234,243,244,0,2,0,1,203,203,203,42,229,228,238,0,2,3,0,204,204,204,42,229,238,239,0,2,0,1,204,204,204,42,244,243,253,0,2,3,0,205,205,205,42,244,253,254,0,2,0,1,205,205,205,42,239,238,248,0,2,3,0,206,206,206,42,239,248,249,0,2,0,1,206,206,206,42,245,244,254,0,2,3,0,207,207,207,42,245,254,255,0,2,0,1,207,207,207,42,240,239,249,0,2,3,0,208,208,208,42,240,249,250,0,2,0,1,208,208,208,42,241,240,250,0,2,3,0,209,209,209,42,241,250,251,0,2,0,1,209,209,209,42,242,241,251,0,2,3,0,210,210,210,42,242,251,252,0,2,0,1,210,210,210,42,237,236,246,0,2,3,0,211,211,211,42,237,246,247,0,2,0,1,211,211,211,42,243,242,252,0,2,3,0,212,212,212,42,243,252,253,0,2,0,1,212,212,212,42,238,237,247,0,2,3,0,213,213,213,42,238,247,248,0,2,0,1,213,213,213,42,247,246,256,0,2,3,0,214,214,214,42,247,256,257,0,2,0,1,214,214,214,42,253,252,262,0,2,3,0,215,215,215,42,253,262,263,0,2,0,1,215,215,215,42,248,247,257,0,2,3,0,216,216,216,42,248,257,258,0,2,0,1,216,216,216,42,254,253,263,0,2,3,0,217,217,217,42,254,263,264,0,2,0,1,217,217,217,42,249,248,258,0,2,3,0,218,218,218,42,249,258,259,0,2,0,1,218,218,218,42,255,254,264,0,2,3,0,219,219,219,42,255,264,265,0,2,0,1,219,219,219,42,250,249,259,0,2,3,0,220,220,220,42,250,259,260,0,2,0,1,220,220,220,42,251,250,260,0,2,3,0,221,221,221,42,251,260,261,0,2,0,1,221,221,221,42,252,251,261,0,2,3,0,222,222,222,42,252,261,262,0,2,0,1,222,222,222,42,261,260,270,0,2,3,0,223,223,223,42,261,270,271,0,2,0,1,223,223,223,42,262,261,271,0,2,3,0,224,224,224,42,262,271,272,0,2,0,1,224,224,224,42,257,256,266,0,2,3,0,225,225,225,42,257,266,267,0,2,0,1,225,225,225,42,263,262,272,0,2,3,0,226,226,226,42,263,272,273,0,2,0,1,226,226,226,42,258,257,267,0,2,3,0,227,227,227,42,258,267,268,0,2,0,1,227,227,227,42,264,263,273,0,2,3,0,228,228,228,42,264,273,274,0,2,0,1,228,228,228,42,259,258,268,0,2,3,0,229,229,229,42,259,268,269,0,2,0,1,229,229,229,42,265,264,274,0,2,3,0,230,230,230,42,265,274,275,0,2,0,1,230,230,230,42,260,259,269,0,2,3,0,231,231,231,42,260,269,270,0,2,0,1,231,231,231,42,275,274,284,0,2,3,0,232,232,232,42,275,284,285,0,2,0,1,232,232,232,42,270,269,279,0,2,3,0,233,233,233,42,270,279,280,0,2,0,1,233,233,233,42,271,270,280,0,2,3,0,234,234,234,42,271,280,281,0,2,0,1,234,234,234,42,272,271,281,0,2,3,0,235,235,235,42,272,281,282,0,2,0,1,235,235,235,42,267,266,276,0,2,3,0,236,236,236,42,267,276,277,0,2,0,1,236,236,236,42,273,272,282,0,2,3,0,237,237,237,42,273,282,283,0,2,0,1,237,237,237,42,268,267,277,0,2,3,0,238,238,238,42,268,277,278,0,2,0,1,238,238,238,42,274,273,283,0,2,3,0,239,239,239,42,274,283,284,0,2,0,1,239,239,239,42,269,268,278,0,2,3,0,240,240,240,42,269,278,279,0,2,0,1,240,240,240,42,284,283,294,0,2,3,0,241,241,241,42,284,294,295,0,2,0,1,241,241,241,42,279,278,289,0,2,3,0,242,242,242,42,279,289,290,0,2,0,1,242,242,242,42,285,284,295,0,2,3,0,243,243,243,42,285,295,296,0,2,0,1,243,243,243,42,280,279,290,0,2,3,0,244,244,244,42,280,290,291,0,2,0,1,244,244,244,42,281,280,291,0,2,3,0,245,245,245,42,281,291,292,0,2,0,1,245,245,245,42,282,281,292,0,2,3,0,246,246,246,42,282,292,293,0,2,0,1,246,246,246,42,277,276,287,0,2,3,0,247,247,247,42,277,287,288,0,2,0,1,247,247,247,42,283,282,293,0,2,3,0,248,248,248,42,283,293,294,0,2,0,1,248,248,248,42,278,277,288,0,2,3,0,249,249,249,42,278,288,289,0,2,0,1,249,249,249,42,288,287,297,0,2,3,0,250,250,250,42,288,297,298,0,2,0,1,250,250,250,42,294,293,303,0,2,3,0,251,251,251,42,294,303,304,0,2,0,1,251,251,251,42,289,288,298,0,2,3,0,252,252,252,42,289,298,299,0,2,0,1,252,252,252,42,295,294,304,0,2,3,0,253,253,253,42,295,304,305,0,2,0,1,253,253,253,42,290,289,299,0,2,3,0,254,254,254,42,290,299,300,0,2,0,1,254,254,254,42,296,295,305,0,2,3,0,255,255,255,42,296,305,306,0,2,0,1,255,255,255,42,291,290,300,0,2,3,0,256,256,256,42,291,300,301,0,2,0,1,256,256,256,42,292,291,301,0,2,3,0,257,257,257,42,292,301,302,0,2,0,1,257,257,257,42,293,292,302,0,2,3,0,258,258,258,42,293,302,303,0,2,0,1,258,258,258,42,302,301,311,0,2,3,0,259,259,259,42,302,311,312,0,2,0,1,259,259,259,42,303,302,312,0,2,3,0,260,260,260,42,303,312,313,0,2,0,1,260,260,260,42,298,297,307,0,2,3,0,261,261,261,42,298,307,308,0,2,0,1,261,261,261,42,304,303,313,0,2,3,0,262,262,262,42,304,313,314,0,2,0,1,262,262,262,42,299,298,308,0,2,3,0,263,263,263,42,299,308,309,0,2,0,1,263,263,263,42,305,304,314,0,2,3,0,264,264,264,42,305,314,315,0,2,0,1,264,264,264,42,300,299,309,0,2,3,0,265,265,265,42,300,309,310,0,2,0,1,265,265,265,42,306,305,315,0,2,3,0,266,266,266,42,306,315,316,0,2,0,1,266,266,266,42,301,300,310,0,2,3,0,267,267,267,42,301,310,311,0,2,0,1,267,267,267,42,316,315,325,0,2,3,0,268,268,268,42,316,325,326,0,2,0,1,268,268,268,42,311,310,320,0,2,3,0,269,269,269,42,311,320,321,0,2,0,1,269,269,269,42,312,311,321,0,2,3,0,270,270,270,42,312,321,322,0,2,0,1,270,270,270,42,313,312,322,0,2,3,0,271,271,271,42,313,322,323,0,2,0,1,271,271,271,42,308,307,317,0,2,3,0,272,272,272,42,308,317,318,0,2,0,1,272,272,272,42,314,313,323,0,2,3,0,273,273,273,42,314,323,324,0,2,0,1,273,273,273,42,309,308,318,0,2,3,0,274,274,274,42,309,318,319,0,2,0,1,274,274,274,42,315,314,324,0,2,3,0,275,275,275,42,315,324,325,0,2,0,1,275,275,275,42,310,309,319,0,2,3,0,276,276,276,42,310,319,320,0,2,0,1,276,276,276,42,8,286,18,0,2,3,0,277,277,277,42,18,286,28,0,2,3,0,278,278,278,42,28,286,38,0,2,3,0,279,279,279,42,38,286,48,0,2,3,0,280,280,280,42,48,286,58,0,2,3,0,281,281,281,42,58,286,68,0,2,3,0,282,282,282,42,68,286,77,0,2,3,0,283,283,283,42,77,286,87,0,2,3,0,284,284,284,42,87,286,97,0,2,3,0,285,285,285,42,97,286,107,0,2,3,0,286,286,286,42,107,286,116,0,2,3,0,287,287,287,42,116,286,126,0,2,3,0,288,288,288,42,126,286,136,0,2,3,0,289,289,289,42,136,286,146,0,2,3,0,290,290,290,42,146,286,156,0,2,3,0,291,291,291,42,156,286,166,0,2,3,0,292,292,292,42,166,286,176,0,2,3,0,293,293,293,42,176,286,186,0,2,3,0,294,294,294,42,186,286,196,0,2,3,0,295,295,295,42,196,286,206,0,2,3,0,296,296,296,42,206,286,216,0,2,3,0,297,297,297,42,216,286,226,0,2,3,0,298,298,298,42,226,286,236,0,2,3,0,299,299,299,42,236,286,246,0,2,3,0,300,300,300,42,246,286,256,0,2,3,0,301,301,301,42,256,286,266,0,2,3,0,302,302,302,42,266,286,276,0,2,3,0,303,303,303,42,276,286,287,0,2,3,0,304,304,304,42,287,286,297,0,2,3,0,305,305,305,42,297,286,307,0,2,3,0,306,306,306,42,307,286,317,0,2,3,0,307,307,307,42,325,324,15,0,2,3,0,308,308,308,42,325,15,16,0,2,0,1,308,308,308,42,320,319,10,0,2,3,0,309,309,309,42,320,10,11,0,2,0,1,309,309,309,42,326,325,16,0,2,3,0,310,310,310,42,326,16,17,0,2,0,1,310,310,310,42,321,320,11,0,2,3,0,311,311,311,42,321,11,12,0,2,0,1,311,311,311,42,322,321,12,0,2,3,0,312,312,312,42,322,12,13,0,2,0,1,312,312,312,42,317,286,8,0,2,3,0,313,313,313,42,323,322,13,0,2,3,0,314,314,314,42,323,13,14,0,2,0,1,314,314,314,42,318,317,8,0,2,3,0,315,315,315,42,318,8,9,0,2,0,1,315,315,315,42,324,323,14,0,2,3,0,316,316,316,42,324,14,15,0,2,0,1,316,316,316,42,319,318,9,0,2,3,0,317,317,317,42,319,9,10,0,2,0,1,317,317,317
	];

	imported_normals= [
		-1,-0,0,0,0,-1,1,-0,0,0,0,1,-0,-1,0,-0,1,0,-0.87861,0.46963,-0.086536,-0.95272,0.289,-0.093835,-0.29017,0.95655,-0.028579,-0.99044,0.09755,-0.09755,-0.47089,0.88097,-0.046379,-0.99044,-0.09755,-0.09755,-0.63316,0.77151,-0.062361,-0.95272,-0.289,-0.093835,-0.77078,0.63256,-0.075915,-0.74116,0.63256,-0.22483,-0.84485,0.46963,-0.25628,-0.91611,0.289,-0.2779,-0.27902,0.95655,-0.084638,-0.95238,0.09755,-0.2889,-0.45279,0.88097,-0.13735,-0.95238,-0.09755,-0.2889,-0.60883,0.77151,-0.18469,-0.91611,-0.289,-0.2779,-0.87772,-0.09755,-0.46915,-0.5611,0.77151,-0.29991,-0.84429,-0.289,-0.45128,-0.68306,0.63256,-0.3651,-0.77862,0.46963,-0.41618,-0.84429,0.289,-0.45128,-0.25714,0.95655,-0.13745,-0.87772,0.09755,-0.46915,-0.4173,0.88097,-0.22305,-0.76932,0.09755,-0.63137,-0.36576,0.88097,-0.30018,-0.76932,-0.09755,-0.63137,-0.49181,0.77151,-0.40362,-0.74002,-0.289,-0.60732,-0.5987,0.63256,-0.49134,-0.68246,0.46963,-0.56008,-0.74002,0.289,-0.60732,-0.22539,0.95655,-0.18497,-0.60732,0.289,-0.74003,-0.18497,0.95655,-0.22539,-0.63137,0.09755,-0.76932,-0.30017,0.88097,-0.36576,-0.63137,-0.09755,-0.76932,-0.40362,0.77151,-0.49181,-0.60732,-0.289,-0.74003,-0.49134,0.63256,-0.5987,-0.56008,0.46963,-0.68246,-0.45352,0.28699,-0.84378,-0.13745,0.95655,-0.25714,-0.46915,0.09755,-0.87772,-0.22305,0.88097,-0.4173,-0.46915,-0.09755,-0.87772,-0.3937,0.82,-0.41545,-0.45128,-0.289,-0.84429,0.042979,0.83056,-0.55527,-0.2779,-0.289,-0.91611,-0.27705,0.28812,-0.91664,-0.084638,0.95655,-0.27902,-0.2889,0.09755,-0.95238,-0.13735,0.88097,-0.45279,-0.2889,-0.09755,-0.95238,-0.62046,-0.48891,-0.61318,-0.046378,0.88097,-0.47089,-0.097549,-0.09755,-0.99044,-0.06236,0.77151,-0.63316,-0.093834,-0.289,-0.95272,-0.075915,0.63256,-0.77078,-0.086536,0.46963,-0.87861,-0.54373,0.65982,-0.51864,-0.028579,0.95655,-0.29017,0.54373,0.65982,-0.51864,0.028579,0.95655,-0.29017,0.62046,-0.48891,-0.61318,0.046379,0.88097,-0.47089,0.09755,-0.09755,-0.99044,0.062361,0.77151,-0.63316,0.093835,-0.289,-0.95272,0.075915,0.63256,-0.77078,0.086536,0.46963,-0.87861,0.27705,0.28812,-0.91664,0.084638,0.95655,-0.27902,0.2889,0.09755,-0.95238,0.13735,0.88097,-0.45279,0.2889,-0.09755,-0.95238,-0.042979,0.83056,-0.55527,0.2779,-0.289,-0.91611,0.3937,0.82,-0.41545,0.45128,-0.289,-0.84429,0.45352,0.28699,-0.84378,0.13745,0.95655,-0.25714,0.46915,0.09755,-0.87772,0.22305,0.88097,-0.4173,0.46915,-0.09755,-0.87772,0.63137,0.09755,-0.76932,0.30018,0.88097,-0.36576,0.63137,-0.09755,-0.76932,0.40362,0.77151,-0.49181,0.60732,-0.289,-0.74002,0.49134,0.63256,-0.5987,0.56008,0.46963,-0.68246,0.60732,0.289,-0.74002,0.18497,0.95655,-0.22539,0.74003,0.289,-0.60732,0.22539,0.95655,-0.18497,0.76932,0.09755,-0.63137,0.36576,0.88097,-0.30017,0.76932,-0.09755,-0.63137,0.49181,0.77151,-0.40362,0.74003,-0.289,-0.60732,0.5987,0.63256,-0.49134,0.68246,0.46963,-0.56008,0.77862,0.46963,-0.41618,0.84429,0.289,-0.45128,0.25714,0.95655,-0.13745,0.87772,0.09755,-0.46915,0.4173,0.88097,-0.22305,0.87772,-0.09755,-0.46915,0.5611,0.77151,-0.29991,0.84429,-0.289,-0.45128,0.68306,0.63256,-0.3651,0.91611,-0.289,-0.2779,0.74116,0.63256,-0.22483,0.84485,0.46963,-0.25628,0.91611,0.289,-0.2779,0.27902,0.95655,-0.084638,0.95238,0.09755,-0.2889,0.45279,0.88097,-0.13735,0.95238,-0.09755,-0.2889,0.60883,0.77151,-0.18468,0.47089,0.88097,-0.046378,0.99044,-0.09755,-0.09755,0.63316,0.77151,-0.06236,0.95272,-0.289,-0.093834,0.77078,0.63256,-0.075915,0.87861,0.46963,-0.086536,0.95272,0.289,-0.093834,0.29017,0.95655,-0.028579,0.99044,0.09755,-0.09755,0.95272,0.289,0.093835,0.29017,0.95655,0.028579,0.99044,0.097551,0.09755,0.47089,0.88097,0.046379,0.99044,-0.09755,0.09755,0.63316,0.77151,0.062361,0.95272,-0.289,0.093835,0.77078,0.63256,0.075915,0.87861,0.46963,0.086536,0.84485,0.46963,0.25628,0.91611,0.289,0.2779,0.27902,0.95655,0.084638,0.95238,0.097551,0.2889,0.45279,0.88097,0.13735,0.95238,-0.09755,0.2889,0.60883,0.77151,0.18469,0.91611,-0.289,0.2779,0.74116,0.63256,0.22483,0.84429,-0.289,0.45128,0.68306,0.63256,0.3651,0.77862,0.46963,0.41618,0.84429,0.289,0.45128,0.25714,0.95655,0.13745,0.87772,0.097551,0.46915,0.4173,0.88097,0.22305,0.87772,-0.09755,0.46915,0.5611,0.77151,0.29991,0.36576,0.88097,0.30018,0.76932,-0.09755,0.63137,0.49181,0.77151,0.40362,0.74002,-0.289,0.60732,0.5987,0.63256,0.49134,0.68246,0.46963,0.56008,0.74003,0.289,0.60732,0.22539,0.95655,0.18497,0.76932,0.097551,0.63137,0.60732,0.289,0.74003,0.18497,0.95655,0.22539,0.63137,0.09755,0.76932,0.30018,0.88097,0.36576,0.63137,-0.09755,0.76932,0.40362,0.77151,0.49181,0.60732,-0.289,0.74003,0.49134,0.63256,0.5987,0.56008,0.46963,0.68246,0.41618,0.46963,0.77862,0.45128,0.289,0.84429,0.13745,0.95655,0.25714,0.46915,0.09755,0.87772,0.22305,0.88097,0.4173,0.46915,-0.09755,0.87772,0.29991,0.77151,0.5611,0.45128,-0.289,0.84429,0.3651,0.63256,0.68306,0.2779,-0.289,0.91611,0.22483,0.63256,0.74116,0.25628,0.46963,0.84485,0.2779,0.289,0.91611,0.084638,0.95655,0.27902,0.2889,0.09755,0.95238,0.13735,0.88097,0.45279,0.2889,-0.09755,0.95238,0.18468,0.77151,0.60883,0.09755,-0.09755,0.99044,0.06236,0.77151,0.63316,0.093835,-0.289,0.95272,0.075915,0.63256,0.77078,0.086535,0.46963,0.87861,0.093834,0.289,0.95272,0.028579,0.95655,0.29017,0.097549,0.09755,0.99044,0.046378,0.88097,0.47089,-0.028579,0.95655,0.29017,-0.09755,0.097551,0.99044,-0.046379,0.88097,0.47089,-0.09755,-0.09755,0.99044,-0.062361,0.77151,0.63316,-0.093835,-0.289,0.95272,-0.075915,0.63256,0.77078,-0.086536,0.46963,0.87861,-0.093835,0.289,0.95272,-0.25628,0.46963,0.84485,-0.2779,0.289,0.91611,-0.084638,0.95655,0.27902,-0.2889,0.097551,0.95238,-0.13735,0.88097,0.45279,-0.2889,-0.09755,0.95238,-0.18469,0.77151,0.60883,-0.2779,-0.289,0.91611,-0.22483,0.63256,0.74116,-0.45128,-0.289,0.84429,-0.3651,0.63256,0.68306,-0.41618,0.46963,0.77862,-0.45128,0.289,0.84429,-0.13745,0.95655,0.25714,-0.46915,0.09755,0.87772,-0.22305,0.88097,0.4173,-0.46915,-0.09755,0.87772,-0.29991,0.77151,0.5611,-0.63137,-0.09755,0.76932,-0.40362,0.77151,0.49181,-0.60732,-0.289,0.74002,-0.49134,0.63256,0.5987,-0.56008,0.46963,0.68246,-0.60732,0.289,0.74002,-0.18497,0.95655,0.22539,-0.63137,0.09755,0.76932,-0.30018,0.88097,0.36576,-0.22539,0.95655,0.18497,-0.76932,0.09755,0.63137,-0.36576,0.88097,0.30018,-0.76932,-0.09755,0.63137,-0.49181,0.77151,0.40362,-0.74003,-0.289,0.60732,-0.5987,0.63256,0.49134,-0.68246,0.46963,0.56008,-0.74003,0.289,0.60732,-0.77862,0.46963,0.41618,-0.84429,0.289,0.45128,-0.25714,0.95655,0.13745,-0.87772,0.09755,0.46915,-0.4173,0.88097,0.22305,-0.87772,-0.09755,0.46915,-0.5611,0.77151,0.29991,-0.84429,-0.289,0.45128,-0.68306,0.63256,0.3651,-0.91611,-0.289,0.2779,-0.74116,0.63256,0.22483,-0.84485,0.46963,0.25628,-0.91611,0.289,0.2779,-0.27902,0.95655,0.084638,-0.95238,0.09755,0.2889,-0.45279,0.88097,0.13735,-0.95238,-0.09755,0.2889,-0.60883,0.77151,0.18468,-0.098013,0.99514,-0.009653,-0.094247,0.99514,-0.028589,-0.086858,0.99514,-0.046427,-0.076132,0.99514,-0.06248,-0.06248,0.99514,-0.076132,-0.046427,0.99514,-0.086858,-0.028589,0.99514,-0.094247,-0.009653,0.99514,-0.098013,0.009653,0.99514,-0.098013,0.028589,0.99514,-0.094246,0.046427,0.99514,-0.086858,0.06248,0.99514,-0.076132,0.076132,0.99514,-0.06248,0.086858,0.99514,-0.046427,0.094246,0.99514,-0.028589,0.098013,0.99514,-0.009653,0.098013,0.99514,0.009653,0.094247,0.99514,0.028589,0.086858,0.99514,0.046427,0.076132,0.99514,0.06248,0.06248,0.99514,0.076132,0.046427,0.99514,0.086858,0.028589,0.99514,0.094247,0.009653,0.99514,0.098013,-0.009654,0.99514,0.098013,-0.028589,0.99514,0.094247,-0.046427,0.99514,0.086858,-0.06248,0.99514,0.076132,-0.076132,0.99514,0.06248,-0.086858,0.99514,0.046427,-0.094247,0.99514,0.028589,-0.99044,-0.09755,0.097554,-0.63316,0.77151,0.062364,-0.95272,-0.289,0.093839,-0.77078,0.63256,0.075919,-0.87861,0.46963,0.086539,-0.098013,0.99514,0.009654,-0.95272,0.289,0.093839,-0.29017,0.95655,0.02858,-0.99044,0.09755,0.097554,-0.47089,0.88097,0.046381
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

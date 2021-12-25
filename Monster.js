class Monster {
  constructor(x,y,width,height)
	{
		var options = { 
      density: 5, 
      isStatic:true
    };
		this.x=x;
		this.y=y;
		this.width = width;
		this.height = height;
		this.image=loadImage("trashcangreen.png");
		this.body=Bodies.rectangle(this.x, this.y,this.width,this.height, options)
		World.add(world, this.body);

	}
	display()
	{
			
			var santaPos=this.body.position;		
			push()
			translate(santaPos.x, santaPos.y-100);
			rectMode(CENTER)
			fill(255,0,255)
			imageMode(CENTER);
			image(this.image, 0,0,this.width,this.height);
			pop()
			
	}
}

class Dog{
	constructor(x,y,w,h)
	{
	// assign options to the dog
		this.x=x;
		this.y=y;
		this.w=w;
        this.h=h;
		var options = {
			restitution: 1
			
		}
		this.body=Bodies.rectangle(this.x, this.y, this.w, this.h, options);
		World.add(world, this.body);

	}
	display()
	{
			var dogpos=this.body.position;		
			push();
			translate(dogpos.x, dogpos.y-40);
			rectMode(CENTER);
			strokeWeight(4);
			stroke("black");
			fill("brown");
			//draw the rect for the dog
			image(dogImg,0 , 0, this.w, this.h);
			pop();
	}

}
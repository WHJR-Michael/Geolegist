class Wood{
	constructor(x,y,w,h)
	{
	// assign options to the wood plank
		this.x=x;
		this.y=y;
		this.w=w;
        this.h=h;
		var options = {
			restitution: 0.05
			
		}
		this.body=Bodies.rectangle(this.x, this.y, this.w, this.h, options);
		World.add(world, this.body);

	}
	display()
	{
			var woodpos=this.body.position;		
			push();
			translate(woodpos.x, woodpos.y);
			rectMode(CENTER);
			strokeWeight(4);
			stroke("black");
			fill("brown");
			//draw the rect for the wood plank
			rect(0, 0, this.w, this.h);
			pop();
	}

}
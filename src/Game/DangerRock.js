export default class DangerRock {
    constructor(args){
      this.position = args.position;
      this.xspeed = args.xspeed;
      this.yspeed = args.yspeed;
      this.color = args.color;
      this.radius = args.radius;
      this.size = args.size;
      this.delete = 0;
      this.screen = args.screen;
    }

    updatePosition() {
        this.position.x += this.xspeed;
        this.position.y += this.yspeed;
        if(this.position.y > this.screen.height || this.position.y < 0){
          this.delete = 1;
        }
    }

    isPointInSquare(point){
      if(point.x >= 1.5*(this.position.x - this.size) && point.x <= 1.5*(this.position.x + this.size) ){
        if(point.y >= 1.35*(this.position.y) && point.y <= 1.35*(this.position.y + 2*this.size)){
            return true;
        }
      }
      return false;
    }

    render(state) {
      const context = state.context;
      context.save();
      context.translate(this.position.x, this.position.y);
      context.strokeStyle = this.color;
      context.fillStyle = this.color;
      context.lineWidth = 1;
      context.beginPath();
      context.moveTo(-this.size, -this.size);
      context.lineTo(-this.size, this.size);
      context.lineTo(this.size, this.size);
      context.lineTo(this.size, -this.size);
      context.closePath();
      context.fill();
      context.stroke();
      context.restore();
    }
}

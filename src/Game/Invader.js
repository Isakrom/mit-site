export const Direction = {
      Left:  0,
      Right: 1,
   };

export default class Invader {
    constructor (args) {
      this.direction = Direction.Right;
      this.position = args.position;
      this.speed = args.speed;
      this.radius = args.radius;
      this.delete = false;
      this.onDie = args.onDie;
      this.counter = 0;
    }

    reverse() {
    if (this.direction === Direction.Right) {
            this.position.x -= 10;
        this.direction = Direction.Left;
    } else {
        this.direction = Direction.Right;
        this.position.x += 10;
        }
    }

    updatePosition() {
        if (this.direction === Direction.Right) {
        this.position.x += this.speed;
    } else {
        this.position.x -= this.speed;
        }
        this.counter += 1;
        if(counter == 25){
          this.counter = 0;
        }
    }

    render(state) {
        const context = state.context;
        context.save();
        context.translate(this.position.x, this.position.y);
        context.strokeStyle = '#F00';
        context.fillStyle = '#F00';
        context.lineWidth = 2;
        context.beginPath();
        context.moveTo(-5, 25);
        context.arc(0, 25, 5, 0, Math.PI);
        context.lineTo(5, 25);
        context.lineTo(5, 0);
        context.lineTo(15, 0);
        context.lineTo(15, -15);
        context.lineTo(-15, -15);
        context.lineTo(-15, 0);
        context.lineTo(-5, 0);
        context.closePath();
        context.fill();
        context.stroke();
        context.restore();
    }
}

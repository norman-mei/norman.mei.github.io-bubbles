function setup() {
    createCanvas(500, 400);
    bubble1 = {
      x: random(0, width),
      y: random(0, height),
      size: random(10, 30),
      color: {
        r: random(0, 255),
        g: random(0, 255),
        b: random(0, 255)
      }
    };
    bubble2 = {
      x: random(0, width),
      y: random(0, height),
      size: random(10, 30),
      color: {
        r: random(0, 255),
        g: random(0, 255),
        b: random(0, 255)
      }
    };
  }

  function draw() {
    background(0);

    fill(bubble1.color.r, bubble1.color.g, bubble1.color.b);
    circle(bubble1.x, bubble1.y, bubble1.size);
    bubble1.x += random(-2, 2);
    bubble1.y += random(-2, 2);

    fill(bubble2.color.r, bubble2.color.g, bubble2.color.b);
    circle(bubble2.x, bubble2.y, bubble2.size);
    bubble2.x += random(-2, 2);
    bubble2.y += random(-2, 2);
  }

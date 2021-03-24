const balls = document.getElementsByClassName('ball');

document.onmousemove = (event) => {
  const x = (event.clientX * 100) / window.innerWidth + '%';
  const y = (event.clientY * 100) / window.innerHeight + '%';

  for (let i = 0; i < 2; i++) {
      balls[i].style.left = x;
      balls[i].style.top = y;
      balls[i].transform = 'translate(-' + x + ',-' + y + ')';
  }

  
};


  const eye = document.createElement('div');
  eye.classList.add('eye');
  const ball = document.createElement('ball');
  ball.classList.add('ball');
  document.getElementsByClassName('eyes')[0].appendChild(eye);
  document.getElementsByClassName('eye')[1].appendChild(ball);





const carousel = options => {
 
  const _carousel = {
    paused: false,

    stopped: false,

    options: {
      speed: 7000,
      acceleration: 5,
      reverse: false,
      selector: ".c-carousel",
      slidesSelector: ".c-carousel__slides",
      leftArrowSelector: ".c-carousel__arrow_left",
      rightArrowSelector: ".c-carousel__arrow_right"
    },

    init(options = {}) {
      // Copy options to this.options
      for (let prop in options) {
        if (!options.hasOwnProperty(prop)) break;
        this.options[prop] = options[prop];
      }

      // Cache nodes
      const carousel = document.querySelector(
        options.selector || this.options.selector
      );
      const slides = (this._slides = carousel.querySelector(
        this.options.slidesSelector
      ));
      this._leftArrow = carousel.querySelector(this.options.leftArrowSelector);
      this._rightArrow = carousel.querySelector(
        this.options.rightArrowSelector
      );

      // Multiply speed value by the number of slides
      this.options.speed = this.options.speed * slides.children.length;

      // Set slides container width
      this.width = slides.offsetWidth;

      // Repeat elements
      slides.innerHTML = slides.innerHTML + slides.innerHTML + slides.innerHTML;

      this._registerEvents();
      this._animate();
    },

    _registerEvents() {
      const speed = this.options.speed;
      const reverse = this.options.reverse;

      this._rightArrow.addEventListener("mouseover", () => {
        this.options.speed = speed / this.options.acceleration;
        this.options.reverse = false;
      });
      this._rightArrow.addEventListener("mouseleave", () => {
        this.options.speed = speed;
        this.options.reverse = reverse;
      });
      this._leftArrow.addEventListener("mouseover", () => {
        this.options.speed = speed / this.options.acceleration;
        this.options.reverse = true;
      });
      this._leftArrow.addEventListener("mouseleave", () => {
        this.options.speed = speed;
        this.options.reverse = reverse;
      });

      // Pause when cursor is over carousel
      this._slides.addEventListener("mouseover", this.pause.bind(this));
      this._slides.addEventListener("mouseleave", this.start.bind(this));

      // Pause when cursor is over carousel
      window.addEventListener("resize", () => {
        this.width = this._slides.offsetWidth;
      });
    },

    pause() {
      this.paused = true;
    },

    start() {
      this.paused = false;
    },

    stop() {
      this.stopped = true;
    },

    _animate() {
      const slides = this._slides;
      const oneThird =
        slides.lastElementChild.getBoundingClientRect().right / 3;
      let framesCount = 0;
      let step = 0;
      let posX = 0;

      const animate = () => {
        if (!this.paused) {
          framesCount = this.options.speed * 60 / 1000;
          step = oneThird / framesCount;

          posX += this.options.reverse ? step : -step;

          slides.style.transform = `translateX(${posX}px)`;

          if (this.options.reverse) {
            if (posX >= this.width - oneThird) {
              posX = this.width - oneThird * 2;
            }
          } else {
            if (Math.abs(posX) >= oneThird * 2) {
              posX = -oneThird;
            }
          }
        }
        !this.stopped && requestAnimationFrame(animate);
      };
      animate();
    }
  };

  _carousel.init(options);

  return _carousel;
};


window.onload = () =>
carousel({
  selector: ".c-carousel"
}); 


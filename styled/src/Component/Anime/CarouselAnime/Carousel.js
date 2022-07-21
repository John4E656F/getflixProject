// Class version of the factory function below
class Carousel {
    constructor(container) {
      this.container = container;
      this.track = container.querySelector(".track");
      this.prev = container.querySelector(".prev");
      this.next = container.querySelector(".next");
      this.width = container.offsetWidth;
      this.index = 0;
    }
    
    getContainer() {
      return this.container;
    }
    
    getPrev() {
      return this.prev;
    }
    
    getNext() {
      return this.next;
    }
    
    moveBackward() {
      this.index--;
      this.next.classList.remove('hide');
      if (this.index === 0) {
        this.prev.classList.remove('show');
      }
      this.track.style.transform = `translateX(-${this.index * this.width}px)`;
    }
    
    moveForward() {
      this.index++;
      this.prev.classList.add('show');
  
      this.track.style.transform = `translateX(-${this.index * this.width}px)`;
      if (this.track.offsetWidth - (this.index * this.width) < this.width) {
        this.next.classList.add('hide');
      }
    }
    
    resizeCarousel() {
      this.width = this.getContainer().offsetWidth;
    }
  }
  
  
  // Create an array ([...]) from a Node List (querySelectorAll), containing all carousels on the page
  const carouselList = [...document.querySelectorAll('.carousel-container')];
  // Map over the above array and create a new Carousel object from each carousel; put these in carousels array
  const carousels = carouselList.map(container => new Carousel(container));
  
  for (let carousel of carousels) {
    // When we click the previous button, run the carousel's moveBackward function
    carousel.getPrev().addEventListener("click", function() { carousel.moveBackward()});
    // When we click the next button, run the carousel's moveForward function
    carousel.getNext().addEventListener("click", function() { carousel.moveForward()});
  }
  
  window.addEventListener('resize', () => {
    for (let carousel of carousels) {
      carousel.resizeCarousel();
    }
  })
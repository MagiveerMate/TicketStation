class FormSlider {
    constructor(signupSelector, loginSelector, sliderSelector, formSectionSelector) {
      this.signup = document.querySelector(signupSelector);
      this.login = document.querySelector(loginSelector);
      this.slider = document.querySelector(sliderSelector);
      this.formSection = document.querySelector(formSectionSelector);
  
      this.signup.addEventListener("click", () => {
        this.slider.classList.add("moveslider");
        this.formSection.classList.add("form-section-move");
      });
  
      this.login.addEventListener("click", () => {
        this.slider.classList.remove("moveslider");
        this.formSection.classList.remove("form-section-move");
      });
    }
  }
  
  // Create an instance of the FormSlider class
  const formSlider = new FormSlider(".signup", ".login", ".slider", ".form-section");
  
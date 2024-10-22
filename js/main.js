const testimonials = [
  {
    image: "images/testimonial.png",
    quote:
      "“A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy.”",
    name: "Mr. Williams",
    type: "Diabetes Patient",
  },
  {
    image: "images/checkup.png",
    quote: "“The best way to predict the future is to create it.”",
    name: "Ms. Johnson",
    type: "Heart Patient",
  },
  {
    image: "images/doctor.png",
    quote: "“In the middle of every difficulty lies opportunity.”",
    name: "Dr. Smith",
    type: "General Practitioner",
  },
];

let currentIndex = 0;
const updateTestimonial = () => {
  const testimonial = testimonials[currentIndex];
  document.getElementById("testimonial-image").src = testimonial.image;
  document.getElementById("testimonial-quote").textContent = testimonial.quote;
  document.getElementById("patient-name").textContent = testimonial.name;
  document.getElementById("patient-type").textContent = testimonial.type;
};

document.getElementById("prev-btn").addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
  updateTestimonial();
});

document.getElementById("next-btn").addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % testimonials.length;
  updateTestimonial();
});

document
  .getElementById("appointment-btn")
  .addEventListener("click", function () {
    const formContainer = document.getElementById("appointment-form");
    if (formContainer.classList.contains("hidden")) {
      formContainer.classList.remove("hidden");
      formContainer.style.display = "block";
    }
  });

document.getElementById("close-button").addEventListener("click", function () {
  const formContainer = document.getElementById("appointment-form");
  if (formContainer.classList.contains("hidden")) {
    formContainer.classList.remove("hidden");
    formContainer.style.display = "block";
  } else {
    formContainer.classList.add("hidden");
    formContainer.style.display = "none";
  }
});

const womenHealthPlan = {
  heading: "Women Health Checkup",
  description:
    "A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring.",
  ul: {
    li1: `<img class="checkup-plans-list__icon" src="images/Vector-6.svg" />
  Complete Blood Count with ESR`,
    li2: `<img class="checkup-plans-list__icon" src="images/Vector-6.svg" />
  Pap Smear with HPV DNA Test`,
    li3: `
  <img class="checkup-plans-list__icon" src="images/Vector-6.svg" />
  USG Abdomen with Pelvis, Mammography`,
  },
};

const cancerCheckupPlan = {
  heading: "Cancer Screening Checkup",
  description:
    "Cancer screening checkup involves a series of tests designed to detect cancer at its early stages, even before symptoms appear. Regular screening increases the chances of successful treatment and better outcomes.",
  ul: {
    li1: `<img class="checkup-plans-list__icon" src="images/Vector-6.svg" />
  Mammography with Breast Ultrasound`,
    li2: `<img class="checkup-plans-list__icon" src="images/Vector-6.svg" />
  Lipid Profile, Live Profile, kidney Profile`,
    li3: `
  <img class="checkup-plans-list__icon" src="images/Vector-6.svg" />
  Colonoscopy with Fecal Occult Blood Test (FOBT)`,
  },
};

const kidsVaccinePlan = {
  heading: "Kids Vaccines Checkup",
  description:
    "A kids vaccines checkup plan ensures that children receive timely immunizations to protect them from serious diseases like measles, polio, and whooping cough. Regular vaccination helps build immunity and prevents future health risks.",
  ul: {
    li1: `<img class="checkup-plans-list__icon" src="images/Vector-6.svg" />
  BCG Vaccine for Tuberculosis`,
    li2: `<img class="checkup-plans-list__icon" src="images/Vector-6.svg" />
  DTP Vaccine (Diphtheria, Tetanus, Pertussis)`,
    li3: `
  <img class="checkup-plans-list__icon" src="images/Vector-6.svg" />
  MMR Vaccine (Measles, Mumps, Rubella)`,
  },
};

document
  .getElementById("cancer-screening-btn")
  .addEventListener("click", function () {
    console.log("workeddd");
    document.getElementById("checkup-plans__heading2").textContent =
      cancerCheckupPlan.heading;
    document.getElementById("checkup-plans__text2").textContent =
      cancerCheckupPlan.description;
    document.getElementById("list-1-text").innerHTML = cancerCheckupPlan.ul.li1;
    document.getElementById("list-2-text").innerHTML = cancerCheckupPlan.ul.li2;
    document.getElementById("list-3-text").innerHTML = cancerCheckupPlan.ul.li3;
  });

document
  .getElementById("women-health-btn")
  .addEventListener("click", function () {
    document.getElementById("checkup-plans__heading2").textContent =
      womenHealthPlan.heading;
    document.getElementById("checkup-plans__text2").textContent =
      womenHealthPlan.description;
    document.getElementById("list-1-text").innerHTML = womenHealthPlan.ul.li1;
    document.getElementById("list-2-text").innerHTML = womenHealthPlan.ul.li2;
    document.getElementById("list-3-text").innerHTML = womenHealthPlan.ul.li3;
  });

document
  .getElementById("kids-vaccine-btn")
  .addEventListener("click", function () {
    document.getElementById("checkup-plans__heading2").textContent =
      kidsVaccinePlan.heading;
    document.getElementById("checkup-plans__text2").textContent =
      kidsVaccinePlan.description;
    document.getElementById("list-1-text").innerHTML = kidsVaccinePlan.ul.li1;
    document.getElementById("list-2-text").innerHTML = kidsVaccinePlan.ul.li2;
    document.getElementById("list-3-text").innerHTML = kidsVaccinePlan.ul.li3;
  });

const toggler = document.getElementById("nav-toggler");
const navList = document.getElementById("nav-list");

toggler.addEventListener("click", () => {
  console.log("click");
  navList.classList.toggle("show");
});

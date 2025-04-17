const counters = document.querySelectorAll(".counter");
        let started = false;
      
        const animateCounters = () => {
          counters.forEach(counter => {
            const updateCount = () => {
              const target = +counter.getAttribute("data-target");
              const current = +counter.innerText.replace(/,/g, "");
              const increment = target / 100;
      
              if (current < target) {
                const newVal = Math.ceil(current + increment);
                counter.innerText = newVal.toLocaleString();
                setTimeout(updateCount, 20);
              } else {
                counter.innerText = target.toLocaleString();
              }
            };
            updateCount();
          });
        };
      
        const observer = new IntersectionObserver(entries => {
          entries.forEach(entry => {
            if (entry.isIntersecting && !started) {
              started = true;
              animateCounters();
            }
          });
        });
      
        observer.observe(document.querySelector(".counting-section"));


// Initialize EmailJS (only once, usually at top)
emailjs.init("nlp0aFuAWej8-TFBJ"); // Replace with your actual public key

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("appointmentForm");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    let params = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      contact: document.getElementById("contact").value,
      option: document.getElementById("option").value,
    };

    const serviceID = "service_mz6ay8q";
    const templateID = "template_nijjfrn";

    emailjs.send(serviceID, templateID, params)
      .then((res) => {
        // Clear inputs
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("contact").value = "";
        document.getElementById("option").value = "";
        
        console.log(res);
        alert("Message sent successfully!");
      })
      .catch((err) => {
        console.error("Failed to send email:", err);
        alert("Failed to send message. Please try again.");
      });
  });
});


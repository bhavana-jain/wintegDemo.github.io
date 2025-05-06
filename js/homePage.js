document.addEventListener("DOMContentLoaded", function(event) {

    appendCorporateEle();
    renderTestimonials();  
    // removeAnimation();
    
    counter("lives-impact", 0, 10000, 5000);
    counter("success-story", 100, 1500, 500);
    counter("hr", 0, 16, 5000);
    counter("customer-delight", 0, 100, 3000);

    // Animate winteg logo on page scroll
    window.addEventListener('scroll', function(){
      const toAnimate = this.document.querySelectorAll('.lazy-load');
      if(this.scrollY > 0){
        document.getElementById('header').classList.add('scale-down');
      }
      else {
        document.getElementById('header').classList.remove('scale-down');
      }
    })
});

// Menu for mobile devices
function slideMenu(){
document.getElementById('menuLinks').classList.toggle('is-open');
}

// Append Corporate Ele
function appendCorporateEle () {
    let entities = ["Lorem Ipsum", "Lorem Ipsum", "Lorem Ipsum", "Lorem Ipsum", "Lorem Ipsum", "Lorem Ipsum"];
    entities.map(obj=>{
        let objectHtml = `<li>                           
                            <h4>${obj}</h4>
                          </li>`
        document.getElementById('clientEle').innerHTML+=objectHtml;
})
}


// Client Reviews
function renderTestimonials() {
    let testimonial = [
  {"name":"Rajesh", "position":"Human Resources", "org":"Valeo India Pvt. Ltd.", "review":"<p>We are very pleased with the services offered by WINTEG. This year they had conducted a series of “train the trainer” workshops for us.<p><p>The training was well received by the participants and the coverage and content of the workshop was designed in such a way that not only were the workshops effective but it also saved a lot of time for us. We wish team WINTEG all the best and many more success in the days to come.</p>"},
{"name":"Rajesh", "position":"Human Resources", "org":"Valeo India Pvt. Ltd.", "review":"<p>We are very pleased with the services offered by WINTEG. This year they had conducted a series of “train the trainer” workshops for us.<p><p>The training was well received by the participants and the coverage and content of the workshop was designed in such a way that not only were the workshops effective but it also saved a lot of time for us. We wish team WINTEG all the best and many more success in the days to come.</p>"},
{"name":"Rajesh", "position":"Human Resources", "org":"Valeo India Pvt. Ltd.", "review":"<p>We are very pleased with the services offered by WINTEG. This year they had conducted a series of “train the trainer” workshops for us.<p><p>The training was well received by the participants and the coverage and content of the workshop was designed in such a way that not only were the workshops effective but it also saved a lot of time for us. We wish team WINTEG all the best and many more success in the days to come.</p>"}]
testimonial.map(obj=>{
    let objectHtml = `<li>                           
                        <h4 class=\"name"\>${obj.name}</h4>
                        <p><strong>${obj.position}</strong> <br/> ${obj.org}</p>
                        <div class=\"review"\>${obj.review}</div>
                      </li>`
    document.getElementById('testimonials').innerHTML+=objectHtml;
})
}

// Counter Logic
function counter(id, start, end, duration) {
  let obj = document.getElementById(id),
   current = start,
   range = end - start,
   increment = end > start ? 1 : -1,
   step = Math.abs(Math.floor(duration / range)),
   timer = setInterval(() => {
    current += increment;
    obj.textContent = current;
    if (current == end) {
     clearInterval(timer);
    }
   }, step);
 }

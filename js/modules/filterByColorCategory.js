function filterByColorCategory(){
    const category = this.dataset.category;
    const menuItem = document.querySelector(`.courses-menu a[data-category="${category}"]`)
    const courses = document.querySelectorAll('.courses-section');
    courses.forEach((course) => {
        if(course.dataset.category === category){
            course.classList.add("show-courses");
        } else{
            course.classList.remove("show-courses");
        } 
    });
   
}

export default filterByColorCategory;
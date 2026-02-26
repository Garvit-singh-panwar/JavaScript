import { useState } from 'react';
import Card from './Card';

function Cards(props){
  
    const courses = props.courses;
    const category = props.category;

    const [likedCourses , setLikedCourses] = useState([]);

    function filterCourses(){
        let allCourses = [];
        if(category === "All"){
            Object.values(courses).forEach(Array => {
                Array.forEach(element =>{
                    allCourses.push(element);
                })
            });
            return allCourses;
        }
        else{
            return courses[category];
        }
    }

    return(
        <div className="flex flex-wrap justify-center gap-4 mb-4">
            {filterCourses().map(course =>{
                return(
                    <Card key={course.id} course={course}  likedCourses = {likedCourses}  setLikedCourses={ setLikedCourses} />
                )
            })}
        </div>
    )
}

export default Cards;
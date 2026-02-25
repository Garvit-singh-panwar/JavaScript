import './Cards.css';
import Card from './Card';

function Cards(props){
    let data = props.courses; // Ensure you define where 'data' comes from
    let category = props.category;

    function getCourses() {
        if (category === "All") {
            let allCourses = [];
            Object.values(data).forEach(array => {
                array.forEach(courseData => {
                    allCourses.push(courseData);
                });
            });
            return allCourses;
        } else {
            // Return the specific array for that category
            return data[category];
        }
    }

    return(
        <div>
            {getCourses().map((obj)=>{
                return(<Card {...obj}></Card>)
            })}
        </div>
    )
}

export default Cards;
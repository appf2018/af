'use strict';

import React, {Component} from 'react';
//axios import 
import axios from 'axios';

export default class AllCourse extends Component {
    constructor(props) {
        super(props);
        //defined course array state
        this.state = {courses: []};
    }
//fetch data using axios
    componentDidMount(){
        axios.get('http://localhost:3000/courses')
          .then(response => {
              console.log(response.data);
            //using setState we modify the above cousrs array state(asign data fetch from api) which is initialize in constructor
            //since intial state there is no cousres in array
            this.setState({ courses: response.data });
          })
          .catch(function (error) {
            console.log(error);
          })
      }

      //display array within array 
      //used two map functions
      //first one for outer loop(to access course details)
      //second one for inner loop(to access subject details)
      //some bootstrap styles applied(class not vaild in react => use className)
      //always need to wrap with outer div or appropriate tag(ex:div className="jumbotron")
      //just copy a given example(abourt.jsx) and modify your code
    render() {
        return <div className="jumbotron">
            {
                //in here now we have coures in our state and loop through the array
                this.state.courses.map(course=>(
                    <ul key={course.code} className="list-group list-group-flush">
                        <h4 className="text-success">{course.name}</h4>
                        {course.subject.map((sub) =>
                            <li key={sub._id} className="list-group-item">
                                {sub.name}  | {sub.amount} | {sub.description}
                            </li>
                        )}
                    </ul>
                ))
            }
        </div>;
    }
}

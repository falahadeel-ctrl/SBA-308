// The provided course information.
const CourseInfo = {
  id: 451,
  name: "Introduction to JavaScript"
};

// The provided assignment group.
const AssignmentGroup = {
  id: 12345,
  name: "Fundamentals of JavaScript",
  course_id: 451,
  group_weight: 25,
  assignments: [
    {
      id: 1,
      name: "Declare a Variable",
      due_at: "2023-01-25",
      points_possible: 50
    },
    {
      id: 2,
      name: "Write a Function",
      due_at: "2023-02-27",
      points_possible: 150
    },
    {
      id: 3,
      name: "Code the World",
      due_at: "3156-11-15",
      points_possible: 500
    }
  ]
};

// The provided learner submission data.
const LearnerSubmissions = [
  {
    learner_id: 125,
    assignment_id: 1,
    submission: {
      submitted_at: "2023-01-25",
      score: 47
    }
  },
  {
    learner_id: 125,
    assignment_id: 2,
    submission: {
      submitted_at: "2023-02-12",
      score: 150
    }
  },
  {
    learner_id: 125,
    assignment_id: 3,
    submission: {
      submitted_at: "2023-01-25",
      score: 400
    }
  },
  {
    learner_id: 132,
    assignment_id: 1,
    submission: {
      submitted_at: "2023-01-24",
      score: 39
    }
  },
  {
    learner_id: 132,
    assignment_id: 2,
    submission: {
      submitted_at: "2023-03-07",
      score: 140
    }
  }
];

function getLearnerData(course, ag, submissions) {
  // here, we would process this data to achieve the desired result.

  //avg
  //learner ID
  //assignment 1
  //assignment 2

  //LearnerSubmissions[i].assignment_id=LearnerSubmissions[i].submission["score"];
  //LearnerSubmissions[i].assignment_id=LearnerSubmissions[i].submission["score"];
  //LearnerSubmissions[i].assignment_id=LearnerSubmissions[i].submission["score"];
  //let total_score=+score_1+score_2+score_3;
  //let avg=total_score/points_possible;
  
  const result = [];
  const object = {};
//digging out data
  for(let i=0;i<submissions.length;i++){
let sub_learnerID = submissions[i].learner_id;
let sub_assignmentID = submissions[i].assignment_id;
let sub_score = submissions[i].submission.score;
//matching data
    for(let i=0;i<ag.assignments.length;i++){
      let max_score=ag.assignments[i].points_possible;

if(sub_assignmentID==ag.assignments[i].id){
};
        }
}


return result;
}



const result = getLearnerData(CourseInfo, AssignmentGroup, LearnerSubmissions);

console.log(result);

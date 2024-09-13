// src/components/Education.jsx
import React from 'react';
import '../styles/Education.css';

const Education = () => (
  <div>
    <h2>Education 🎓📚</h2>
    <h3>University of North Carolina at Chapel Hill</h3>
    <p><i>Bachelor of Science in Computer Science</i></p>
    <p>August 2022 - May 2026</p>
    <p>GPA: 3.73</p>
    <h4>Relevant Coursework: </h4>
    <p class="coursework">
      COMP 550: Foundations of Software Engineering - Formal specification and verification of programs. Techniques of algorithm analysis. Problem-solving paradigms. Survey of selected algorithms.
    </p>
    <p class="coursework">
      COMP 421: Files and Databases - Placement of data on secondary storage. File organization. Database history, practice, major models, system structure and design.
    </p>
    <p class="coursework">
      COMP 301: Foundations of Programming - Students will learn how to reason about how their code is structured, identify whether a given structure is effective in a given context, and look at ways of organizing units of code that support larger programs. In a nutshell, the primary goal of the course is to equip students with tools and techniques that will help them not only in later courses in the major but also in their careers afterwards.
    </p>
    <p class="coursework">
      COMP 283: Discrete Structures - Introduces discrete structures and the formal mathematics used to establish their properties and those of algorithms that work with them. Develops problem-solving skills through puzzles and applications central to computer science. 
    </p>
    <p class="coursework">
      COMP 211: Systems Fundamentals - The overarching goal is to bridge the gap between a students' knowledge of a high-level programming language (COMP 110) and computer organization (COMP 311).
    </p>
    <p class="coursework">
      COMP 210: Data Structures and Analysis - This course teaches students how to organize the data used in computer programs so that manipulation of that data can be done efficiently on large problems and large data instances. Rather than learning to use the data structures found in the libraries of programming languages, students will be learning how those libraries are constructed, and why the items that are included in them are there (and why some are excluded).
    </p>
    <p class="coursework">
      COMP 110: Introduces students to programming and data science from a computational perspective. With an emphasis on modern applications in society, students gain experience with problem decomposition, algorithms for data analysis, abstraction design, and ethics in computing.
    </p>
    <p class="coursework">
      MATH 347: Linear Algebra for Applications - Algebra of matrices with applications: determinants, solution of linear systems by Gaussian elimination, Gram-Schmidt procedure, and eigenvalues.
    </p>
    <p class="coursework">
      MATH 232: Calculus of Functions of One Variable II - Calculus of the elementary transcendental functions, techniques of integration, indeterminate forms, Taylor's formula, infinite series.
    </p>
     <p class="coursework">
      MATH 231: Calculus of Functions of One Variable I - Limits, derivatives, and integrals of functions of one variable.
    </p>

    <h3>DIS Copenhagen</h3>
    <p><i>Study Abroad</i></p>
    <p>May 2024 - June 2024</p>
    <h4>Course:</h4>
    <p class="coursework">COMP 311: Computer Organization - Introduction to computer organization and design. Students will be introduced to the conceptual design of a basic microprocessor, along with assembly programming. The course covers the fundamentals of computer hardware design, transistors and logic gates, progressing through basic combinational and sequential components, culminating in the conceptual design CPU.</p>
  </div>
);

export default Education;

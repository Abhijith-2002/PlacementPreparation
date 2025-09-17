import React from 'react';

const sections = [
  { id: 'dsa', label: 'DSA' },
  { id: 'dbms', label: 'DBMS' },
  { id: 'os', label: 'OS' },
  { id: 'oops', label: 'OOPS' },
  { id: 'system-design', label: 'System Design' },
  { id: 'cn', label: 'CN' },
  { id: 'aptitude', label: 'Aptitude' },
  { id: 'resume-tips', label: 'Resume Tips' },
  { id: 'interview-tips', label: 'Interview Tips' },
];

function Section({ id, title, children }) {
  return (
    <section id={id} className="container">
      <h2>{title}</h2>
      {children}
    </section>
  );
}

export default function App() {
  return (
    <>
      <nav>
        <a href="#home">Home</a>
        {sections.map(s => (
          <a key={s.id} href={`#${s.id}`}>{s.label}</a>
        ))}
      </nav>
      <div id="home" className="container">
        <h1>Placement Preparation Resources</h1>
        <p>
          Welcome! This site organizes the best resources and advice for acing your placements. Each section below covers a key topic with curated links and tips.
        </p>
      </div>
      <Section id="dsa" title="DSA">
        <ul>
          <li>
            If you are starting from scratch, complete the <a href="https://www.structy.net" target="_blank" rel="noopener noreferrer">Structy DSA course</a> (Python, free part, ~3 days).
          </li>
          <li>
            The language you choose is up to you, but don’t overcomplicate it. Recommended: Python &gt; C++ &gt; Java.
          </li>
          <li>
            Next, move on to either <a href="https://leetcode.com/problem-list/oizxjoit/" target="_blank" rel="noopener noreferrer">Blind 75</a> or <a href="https://seanprashad.com/leetcode-patterns/" target="_blank" rel="noopener noreferrer">Sean Prashad’s List</a>. Choose Blind 75 if you are running short on time.
          </li>
          <li>
            When doing a question, try to find the brute force approach first, then optimize it. This approach helps a lot during interviews.
          </li>
          <li>
            Revision is more important than the number of questions solved.
          </li>
          <li>
            During interviews, how well you explain the logic matters more than just code. Always write well-structured code.
          </li>
          <li>
            Go through <a href="https://seanprashad.com/leetcode-patterns/#tips" target="_blank" rel="noopener noreferrer">Sean Prashad’s tips</a> before every interview or coding assessment.
          </li>
        </ul>
      </Section>
      <Section id="dbms" title="DBMS">
        <ul>
          <li>
            Go through <a href="https://github.com/aman0046/LastMinuteRevision-DBMS" target="_blank" rel="noopener noreferrer">DBMS last minute notes</a>.
          </li>
          <li>
            Do <a href="https://leetcode.com/studyplan/top-sql-50/" target="_blank" rel="noopener noreferrer">SQL50</a> once you complete the notes.
          </li>
          <li>
            Practice designing and normalizing database schema, ER diagrams, etc.
          </li>
          <li>
            Refer frequently asked questions: <a href="https://www.geeksforgeeks.org/dbms/commonly-asked-dbms-interview-questions/" target="_blank" rel="noopener noreferrer">DBMS Interview Questions</a>
          </li>
        </ul>
      </Section>
      <Section id="os" title="OS">
        <ul>
          <li>
            Go through <a href="https://github.com/aman0046/LastMinuteRevision-OS" target="_blank" rel="noopener noreferrer">OS last minute notes</a>.
          </li>
          <li>
            Refer frequently asked questions: <a href="https://www.geeksforgeeks.org/operating-systems/operating-systems-interview-questions/" target="_blank" rel="noopener noreferrer">OS Interview Questions</a>
          </li>
        </ul>
      </Section>
      <Section id="oops" title="OOPS">
        <ul>
          <li>
            Go through <a href="https://github.com/aman0046/LastMinuteRevision-OOP" target="_blank" rel="noopener noreferrer">OOPS last minute notes</a>.
          </li>
          <li>
            Try to use the same language for DSA and OOPS.
          </li>
          <li>
            Refer frequently asked questions: <a href="https://www.geeksforgeeks.org/interview-prep/oops-interview-questions/" target="_blank" rel="noopener noreferrer">OOPS Interview Questions</a>
          </li>
          <li>
            Try doing some of these questions: System design interview questions, with solutions
          </li>
        </ul>
      </Section>
      <Section id="system-design" title="System Design">
        <ul>
          <li>
            <a href="https://github.com/donnemartin/system-design-primer" target="_blank" rel="noopener noreferrer">System Design Primer</a> is the best resource, but do it only if you have time.
          </li>
        </ul>
      </Section>
      <Section id="cn" title="CN">
        <ul>
          <li>
            Go through <a href="https://github.com/aman0046/LastMinuteRevision-CN" target="_blank" rel="noopener noreferrer">CN last minute notes</a>.
          </li>
        </ul>
      </Section>
      <Section id="aptitude" title="Aptitude">
        <ul>
          <li>
            Aptitude is the most important part, don’t underestimate it.
          </li>
          <li>
            I suggest <a href="https://www.careerride.com/online-aptitude-test.aspx" target="_blank" rel="noopener noreferrer">Careerride</a>. There are about 10 questions per topic—do them all. There are also short notes before each topic.
          </li>
        </ul>
      </Section>
      <Section id="resume-tips" title="Resume Tips">
        <ul>
          <li>
            Only mention the technical skills you know very well. Most technical interview questions will be based on the skills and projects you mention, so make sure you know them well.
          </li>
          <li>
            Be honest about your role in the project. Don’t mention full stack if you only did some backend work.
          </li>
          <li>
            Study your projects in depth. Quality over quantity—a lengthy resume is worthless if you can’t answer questions about it.
          </li>
        </ul>
      </Section>
      <Section id="interview-tips" title="Interview Tips">
        <ul>
          <li>
            In most interviews, you’ll be the one deciding the direction, as questions are often asked based on what you mention. Don’t mention anything you don’t know.
          </li>
          <li>
            Admit it if you don’t know something—don’t lie.
          </li>
          <li>
            When solving problems, explain the logic as you write code. Interviewers often give hints when you make mistakes.
          </li>
        </ul>
      </Section>
    </>
  );
}

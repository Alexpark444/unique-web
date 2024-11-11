// Updated data for lessons to support text, video, and quiz content
const lessons = {
  1: {
    type: "text",
    title: "Lesson 1: Introduction",
    video: "assets/sample-video.mp4",
    content:
      " Welcome to VideoX. I'm waheed mohammed, and I, along with video producer, James Donald, will be your host throughout this course. VideoX is geared towards educational professionals with little to no video experience. This course can be taken non-linearly. In other words, you don't need to start at the beginning and proceed to the end. Please feel free to jump around and focus on the sections that are most relevant for you in your own course development process. If you're a video professional, you'll find that this course revisits many topics you already know. For those with little video production experience, VideoX will teach you how to produce video content that will work best for your edX course. You will learn the four basic steps of video production for online courses, with a focus on video production for massive open online courses, or MOOCs. First, we will begin with pre-production, the planning stage for your course's video content, including video that will be used in your course's marketing and outreach efforts. After pre-production, we will then enter production, also known as the recording step. This is when you'll begin capturing your raw footage. After production, we will discuss post-production, also known as the editing step. Editing is where the raw media is transformed into finished video segments. The final step in the video creation process is delivery. Delivery of video content into the edX platform is simple. We will walk you through that process so that you and other members of your course team are prepared to make the most of the video content you've created. Once again, welcome to VideoX. Good luck!.",
  },
  2: {
    type: "text",
    title: "The Four Basic Steps of Video Creation",
    content: `
        
        <H3>The Four Basic Steps of Video Creation</H3>
        
        Throughout this course, we will be using terminology that is specific to video creation. This terminology is the industry standard for the four steps of video production, whether it be for a television series or a YouTube video of your cat. 
        <br><br>
        The four sequential steps of video creation are  Pre-Production, Production, Post-Production and Delivery. This course is broken up into these four steps.

        <p>
        
        1. <b>Pre-Production</b> is the planning step, and it’s the most important step when it comes to creating and delivering video in an efficient and timely manner to edX. Pre-Production involves accessibility, course segmentation, scripting, storyboarding, scheduling, time budgeting, instructor coaching and location scouting. Pre-Production in this course is split into two parts - Marketing and Course Content.

        </p>

        <p>

        2. <b>Production</b> is the recording step when raw video and audio media assets are created. Production can take place using any recording device, whether it be a phone, a computer or multiple cameras at once. This course will cover Do-It-Yourself, or DIY, recording tools as well as cameras, audio and lighting for larger setups.

        </p>

        <p>

        3. <b>Post-Production</b> is the editing step. During Post-Production, the raw media you recorded during Production is crafted into individual video segments. This step takes the most time, but can be managed if you have used your Pre-Produce phase correctly. VideoX will instruct you on the use of graphics, animations and third-party media in your video segment, as well as the use of color correction and audio mixing to refine your video.

        </P>

        <p>

        4. <b>Delivery</b> is the step when you upload your final video segments and transcripts to edX. VideoX will instruct you on how to use edX Studio’s Video Upload tool.

        In sequence, these four steps of video creation will enable you to effectively craft and deliver video content to edX. So let’s get started.
        </p>`,
  },
  3: {
    type: "quiz",
    title: "Quiz 1: Test Your Knowledge",
    questions: [
      {
        question:
          "Which of the four steps of video production is (typically) the most time intensive?",
        options: [
          "Pre-Production",
          "Production",
          "Post-production",
          "Delivery",
        ],
        answer: [0], // Index of the correct answer
      },
      {
        question:
          "Which of the four steps of video production is the recording stage?",
        options: [
          "Pre-Production",
          "Production",
          "Post-production",
          "Delivery",
        ],
        answer: [1],
      },
    ],
  },
  4: {
    type: "text",
    title: "How to Best Use Video",
    content: `<h3>How Best to Use Video</h3>
        <p>Video is but one powerful tool in your vast educator's kit. EdX's course authoring software called Studio provides many different instruments for teaching and assessment. <b> It’s important to determine when it’s best to use video versus an alternative method for delivering your content.</b></p>
        <br>

        <p>When a learner watches a video, two of five human senses (sight and sound) are being used. Because of this, you can <b>use video to convey lots of information, together in an efficient way.</b> Think about using video when text or visuals alone won't be as effective.</p>

        <ul> 

            <li> <b>Use video with a reflection activity:</b> Once the learner has that information, what do they do with it? How can you help the learner retain that knowledge? Include some structured reflection. One proven method is to add “knowledge checks” after videos to allow the learner to pause and reflect while key concepts are reinforced. This will allow learners an opportunity to make sure that they have retained the important information from the video before moving on. Remember that reflection aids retention.</li>
            <br>
            <br>
            <li> <b>Use video with text summaries:</b> Keep in mind that video does not work well in conveying reference material within a course. Imagine you are a student who wants a single piece of information located in the middle of a video. The transcript of the video will help, but ultimately, the effort to find the piece of information will prove frustrating to the edX learner. Therefore, it’s important to provide supplemental text summaries of reference information to alleviate potential learner frustration. Some students prefer learning from reading text than from watching videos.</li>
            <br>
            <br>
            <li> <b>Use video with visuals:</b> Simple graphics or diagrams can often help convey information better than any video could. Interactive exercises or assignments can also help students to gain knowledge as they apply information within a contextualized environment.</li>
            <li> <b>Use video to tell stories:</b> Videos are an outstanding medium for affecting a learner's emotion. Stories strike emotional chords, and emotions impact our memories, leading to better retention. </li>

        
        </ul>
        
        
        
        
        <p>In summary, video is the fastest way to convey lots of information efficiently to a learner. But, <b> video can also be the most time-inefficient tool depending on the information you want to convey.</b> Video takes much longer to create than text and graphics, and sometimes is not as effective a tool as interactive exercises at helping students gain knowledge in your course’s subject matter.</p>`,
  },

  5: {
    type: "quiz",
    title: "Quiz 2: Knowledge Check - Best Uses of Video",
    questions: [
      {
        question: `<h3>Which of the following are well-suited for video?</h3>
                    <p>Note: Make sure you select all of the correct options—there may be more than one!</p>`,
        options: [
          "When you have a lot of information to convey in a short period of time",
          "When you want students to get hands-on experience",
          "When you want to transport your students someplace",
          "When you can convey information with graphics or animations",
          "When you don't have that much information to convey",
        ],
        answer: [0, 2, 3], // Index of the correct answer
      },
    ],
  },

  6: {
    type: "text",
    title: "Ten Tips",
    content: `<h3>Here are ten helpful tips before you get started
        on the four steps of video production.</h3>

        <P> 1. never skip a step in the four steps of video production.
        Doing so might lead to significant inefficiencies in your video creation
        process.</p>
        <p> 2. before you start recording video,
        make sure to take the time to think about the modularization of your course content.
        Your course's video content will be the sum of many different video segments.
        Each video segment presents its own production timeline
        with its own challenges.</p>

        <p> 3 creating great video takes time.
        Make sure to leave yourself enough of it.
        As you begin the process,
        determine exactly how long it takes you to produce your first video segment.
        Use that information for planning moving forward.</p>

        <p> 4 your course's video segments should be between six and nine minutes in length.
        Research on MOOC video watching indicates that videos that exceed six to nine
        minutes in length result in significantly lower retention rates.
        If you believe your video segments will be longer than this,
        break them up into shorter parts.</p>

        <p> 5. before any recording session, check your gear by creating a test recording.
        A test recording can keep you from wasting time with malfunctioning equipment.</p>
        
        <p> 6.when recording, monitor your audio and video levels.
        Use headphones. </p>

        <p> 7. when recording,
        do test playbacks from the raw media while you're still actively recording.
        If anything is going wrong in your recording,
        it's better to adjust earlier than later.</p>

        <p> 8. after recording, always back up your raw media.
        There's nothing worse than accidentally deleting a video without a backup version. </p>

        <p> 9. when editing, use naming conventions and stick with them.
        It sometimes helps to give segments codes instead of titles.
        If you use titles, make sure to organize them so that they'll be easily sortable.</p>

        <p> 10. finally for delivery,
        upload completed video segments as they are completed.
        Do not upload your video files in a single, large batch.
        If you follow these tips, you will save yourself a lot of heartache and worry. </p>
        <b>Now, let's jump into the next section of this course, pre-production.</b>`,
  },

  7: {
    type: "quiz",
    title: "Quiz 3: Knowledge Check - pitfals",
    questions: [
      {
        question: `<h3>What are some common pitfalls in creating videos for edX?</h3>
                    <p>Select all the answers that match—there may be more than one!</p>`,
        options: [
          "Videos are under ten minutes in duration.",
          "The instructor does not have mastery of the content.",
          "Mistakes are not caught while the recording session is still ongoing.",
          "The camera equipment is not set up correctly before recording.",
          "There is too much time budgeted for creating video content.",
          "One of the four steps of video creation is skipped.",
        ],
        answer: [1, 2, 3, 5], // Index of the correct answer
      },
    ],
  },
};

let currentLesson = 1;
const totalLessons = Object.keys(lessons).length;

function showLesson(lessonId) {
  currentLesson = lessonId;
  const lesson = lessons[lessonId];
  const contentDiv = document.getElementById("content");

  if (lesson.type === "video") {
    contentDiv.innerHTML = `
          <h2>${lesson.title}</h2>
          <video width="640" height="360" controls>
              <source src="${lesson.video}" type="video/mp4">
              Your browser does not support the video tag.
          </video>
          <p>${lesson.content}</p>
      `;
  } else if (lesson.type === "text") {
    contentDiv.innerHTML = `
          <h2>${lesson.title}</h2>
          <p>${lesson.content}</p>
      `;
  } else if (lesson.type === "quiz") {
    renderQuiz(lesson.questions);
  }

  updateNavButtons();
}

function renderQuiz(questions) {
  const contentDiv = document.getElementById("content");
  let quizHTML = `<h2>${lessons[currentLesson].title}</h2>`;

  questions.forEach((q, index) => {
    quizHTML += `
            <div class="quiz-question">
                <p>${index + 1}. ${q.question}</p>
                ${q.options
                  .map(
                    (option, i) => `
                    <label>
                        <input type="checkbox" name="question${index}" value="${i}">
                        ${option}
                    </label>
                    <br>
                `
                  )
                  .join("")}
            </div>
        `;
  });

  quizHTML += `
        <button onclick="submitQuiz()">Submit Quiz</button>
        <div id="quiz-feedback"></div>
    `;

  contentDiv.innerHTML = quizHTML;
}

function submitQuiz() {
  const lesson = lessons[currentLesson];
  const questions = lesson.questions;
  let score = 0;
  let feedbackHTML = "<h3>Quiz Results:</h3>";

  questions.forEach((q, index) => {
    const selected = document.querySelectorAll(
      `input[name="question${index}"]:checked`
    );
    const selectedValues = Array.from(selected).map((input) =>
      parseInt(input.value)
    );
    const isCorrect = arraysEqual(selectedValues, q.answer);

    if (isCorrect) {
      score++;
      feedbackHTML += `<p>Question ${index + 1}: Correct ✅</p>`;
    } else {
      feedbackHTML += `<p>Question ${
        index + 1
      }: Incorrect ❌ (Correct Answer: ${q.answer
        .map((i) => q.options[i])
        .join(", ")})</p>`;
    }
  });

  feedbackHTML += `<p><strong>Your Score: ${score} out of ${questions.length}</strong></p>`;
  document.getElementById("quiz-feedback").innerHTML = feedbackHTML;
}

function arraysEqual(a, b) {
  return a.length === b.length && a.every((val, index) => val === b[index]);
}

function nextLesson() {
  if (currentLesson < totalLessons) {
    currentLesson++;
    showLesson(currentLesson);
  }
}

function previousLesson() {
  if (currentLesson > 1) {
    currentLesson--;
    showLesson(currentLesson);
  }
}

function updateNavButtons() {
  const prevNavBtn = document.getElementById("prevNavBtn");
  const nextNavBtn = document.getElementById("nextNavBtn");
  const mainPrevBtn = document.getElementById("mainPrevBtn");
  const mainNextBtn = document.getElementById("mainNextBtn");

  const atFirstLesson = currentLesson === 1;
  const atLastLesson = currentLesson === totalLessons;

  prevNavBtn.disabled = atFirstLesson;
  mainPrevBtn.disabled = atFirstLesson;

  nextNavBtn.innerText = atLastLesson ? "Finish" : "Next";
  mainNextBtn.innerText = atLastLesson ? "Finish" : "Next";

  nextNavBtn.disabled = atLastLesson;
  mainNextBtn.disabled = atLastLesson;
}

// Load the first lesson on page load
showLesson(currentLesson);

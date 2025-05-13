// This file contains all quiz questions and answers
const quizData = [
  // Q1 - Control Orientation
  {
    question: "How often do you celebrate yourself or your wins?",
    answers: [
      "Celebrate? I usually skip to what's next", // A=1
      "I downplay it so I don't seem full of myself", // B=2
      "I give myself a high five and then apologize to the air for being too much", // C=3
      "I celebrate like I'm throwing a party for my soul" // D=4
    ],
    domain: "Control Orientation"
  },
  // Q2 - Image Maintenance (Ego Grip)
  {
    question: "How often do you feel proud of who you are becoming?",
    answers: [
      "Proud? I mostly feel like I'm stumbling in slow motion, hoping no one's watching", // A=1
      "I'm proud for about 3 minutes, then start Googling why I don't feel enough", // B=2
      "I'm still arriving—but damn, I'd want to be friends with who I'm becoming", // C=3
      "I feel proud—this is exactly who I always knew I could be" // D=4
    ],
    domain: "Image Maintenance (Ego Grip)"
  },
  // Q3 - Intimacy Capacity
  {
    question: "How often do you feel safe being your full, honest self with others?",
    answers: [
      "I'm entirely myself... in group chats with no one else in them", // A=1
      "I test the waters but rarely feel genuinely safe", // B=2
      "I can be real with a few people, but I still hold back the parts that feel too tender", // C=3
      "I feel safe enough to be all of me—and that's non-negotiable" // D=4
    ],
    domain: "Intimacy Capacity"
  },
  // Q4 - Intimacy Capacity
  {
    question: "How do you usually feel in your closest relationships?",
    answers: [
      "Like I'm too much or not enough—sometimes both", // A=1
      "I try to show up, but half the time it feels like we're tuned to different radio stations", // B=2
      "Emotionally intimate, but still ask if they like me every 3 days", // C=3
      "I feel safe, accepted, and entirely free to be myself" // D=4
    ],
    domain: "Intimacy Capacity"
  },
  // Q5 - Control Orientation
  {
    question: "How do you usually handle conflict or confrontation?",
    answers: [
      "I avoid it like it's a haunted house—I'd rather disappear", // A=1
      "I write a monologue in my head, rehearse it for 2 hours, then send a meme instead", // B=2
      "I bring things up when I can, but I overthink every word", // C=3
      "I show up for myself when I need to, even if it's uncomfortable" // D=4
    ],
    domain: "Control Orientation"
  },
  // Q6 - Intimacy Capacity
  {
    question: "How do you feel about your ability to say \"no\" to others?",
    answers: [
      "I say yes when I want to say no—just to avoid tension", // A=1
      "The only times I say no are when my plants are the only ones listening—and even then, I apologize after", // B=2
      "I can say no when I need to, but it still makes me uncomfortable", // C=3
      "I always say no when I need to, and it feels like self-respect" // D=4
    ],
    domain: "Intimacy Capacity"
  },
  // Q7 - Emotional Avoidance and Repression
  {
    question: "How do you handle disappointment or setbacks?",
    answers: [
      "I avoid it until it's too much to handle—then I'm all over the place", // A=1
      "I try to manage it, but I usually spiral into frustration", // B=2
      "I write dramatic poetry in my head, then eat snacks I don't even like", // C=3
      "I process it with compassion and learn from it every time" // D=4
    ],
    domain: "Emotional Avoidance and Repression"
  },
  // Q8 - Control Orientation
  {
    question: "How do you feel about the risks you take in life?",
    answers: [
      "I avoid them unless there's absolutely no other option", // A=1
      "I take risks—as long as they're reversible, refundable, and come with a safety net", // B=2
      "I still crave deeper roots, but I take risks when I feel ready", // C=3
      "I take bold steps that challenge me and align with my growth" // D=4
    ],
    domain: "Control Orientation"
  },
  // Q9 - Control Orientation
  {
    question: "How do you feel about change in your life?",
    answers: [
      "I resist it with everything I've got", // A=1
      "I love change—unless it's in my routine, my relationships, or the location of my favorite mug", // B=2
      "I try to embrace it, but it still throws me off at times", // C=3
      "I see it as growth—even if it's messy" // D=4
    ],
    domain: "Control Orientation"
  },
  // Q10 - Control Orientation
  {
    question: "How do you feel about the future?",
    answers: [
      "I try not to think about it—it's too overwhelming", // A=1
      "I think about the future just enough to panic and then scroll through memes until it goes away", // B=2
      "I think it holds good things, even if I'm still scared", // C=3
      "I feel grounded and excited, like I'm creating something meaningful" // D=4
    ],
    domain: "Control Orientation"
  },
  // Q11 - Self-Deception vs. Self-Honesty
  {
    question: "How do you feel about the decisions you make?",
    answers: [
      "I'm always second-guessing or regretting them", // A=1
      "I try to make the right ones, but I tend to overanalyze them", // B=2
      "I usually feel fine, then immediately text three friends to double-check reality", // C=3
      "I feel confident—I almost always know what the right choice is for me" // D=4
    ],
    domain: "Self-Deception vs. Self-Honesty"
  },
  // Q12 - Intimacy Capacity
  {
    question: "How do you feel about the relationships you currently have?",
    answers: [
      "I often feel alone, even when I'm with others", // A=1
      "I have people, but sometimes I still feel like I'm the extra in someone else's movie", // B=2
      "I have meaningful connections, but I still long for more depth", // C=3
      "I feel deeply seen, supported, and connected" // D=4
    ],
    domain: "Intimacy Capacity"
  },
  // Q13 - Control Orientation
  {
    question: "How do you feel about the way you manage your time?",
    answers: [
      "I usually avoid thinking about it until it's a mess", // A=1
      "I manage time mostly by reacting to what screams loudest", // B=2
      "I manage it decently, though I still crave more ease", // C=3
      "I'm always intentional with my time—it reflects what I care about" // D=4
    ],
    domain: "Control Orientation"
  },
  // Q14 - Image Maintenance (Ego Grip)
  {
    question: "How do you feel about your personal growth?",
    answers: [
      "I avoid self-work unless life forces me into it", // A=1
      "I've read the book, underlined everything, and still haven't done the exercises", // B=2
      "I'm making progress and becoming more self-aware", // C=3
      "I actively invest in my growth—it excites and empowers me" // D=4
    ],
    domain: "Image Maintenance (Ego Grip)"
  },
  // Q15 - Image Maintenance (Ego Grip)
  {
    question: "How do you treat your body physically—food, rest, exercise?",
    answers: [
      "I mostly ignore it unless it starts yelling at me", // A=1
      "I try... but my old habits keep showing up like exes with opinions", // B=2
      "I treat it like a garden—some days I water it well, other days I forget", // C=3
      "I care for it like a temple—rest, high-vibe food, and movement" // D=4
    ],
    domain: "Image Maintenance (Ego Grip)"
  },
  // Q16 - Self-Deception vs. Self-Honesty
  {
    question: "How do you speak your truth in everyday life?",
    answers: [
      "I stay quiet and hope people understand me without asking", // A=1
      "I sometimes speak up—but only if it feels really safe", // B=2
      "I speak up when it matters, even if my voice shakes", // C=3
      "I always speak my truth, even if there are confetti and fireworks involved" // D=4
    ],
    domain: "Self-Deception vs. Self-Honesty"
  },
  // Q17 - Emotional Avoidance and Repression
  {
    question: "How do you hold yourself when you're struggling?",
    answers: [
      "I criticize or try to fix myself as fast as I can", // A=1
      "I try to slow down, but I still feel like a mess", // B=2
      "I'm learning to hold space for myself—with care that's still finding its footing", // C=3
      "I always offer myself love and empathy—no matter how messy I am" // D=4
    ],
    domain: "Emotional Avoidance and Repression"
  },
  // Q18 - Intimacy Capacity
  {
    question: "How do you relate to your boundaries?",
    answers: [
      "I usually only notice my boundaries after they've already been crossed", // A=1
      "I try to set them—then immediately second-guess myself", // B=2
      "I try to say what I need, even if it still feels shaky", // C=3
      "I set clear boundaries, built on hard-earned experience and rooted in self-respect" // D=4
    ],
    domain: "Intimacy Capacity"
  },
  // Q19 - Emotional Avoidance and Repression
  {
    question: "How do you treat yourself when you're feeling small or insecure?",
    answers: [
      "I spiral, self-judge, and then give myself a TED Talk in the mirror", // A=1
      "I slap on a smile, keep busy, and hope no one notices the storm", // B=2
      "I try to remind myself this is part of being human", // C=3
      "I offer myself the kind of support I'd give someone I love" // D=4
    ],
    domain: "Emotional Avoidance and Repression"
  },
  // Q20 - Emotional Avoidance and Repression
  {
    question: "How do you feel about being seen—really seen—for who you are?",
    answers: [
      "It feels like standing naked in a spotlight... with a room full of people holding comment cards", // A=1
      "Sometimes I let myself be seen, but I still wear armor just in case", // B=2
      "I show up mostly as I am—even if I still feel exposed", // C=3
      "Being seen or not doesn't shake me—I trust the home I've built inside" // D=4
    ],
    domain: "Emotional Avoidance and Repression"
  },
  // Q21 - Intimacy Capacity
  {
    question: "How do you feel about your ability to express love?",
    answers: [
      "I overthink it and hold back so I won't get hurt", // A=1
      "I try, but I still feel clumsy and unsure if it's landing", // B=2
      "I express it when I can, but I still crave deeper connection", // C=3
      "I express love openly and fully—in my own true way" // D=4
    ],
    domain: "Intimacy Capacity"
  },
  // Q22 - Emotional Avoidance and Repression
  {
    question: "How do you feel when you're alone?",
    answers: [
      "I scramble to fill the silence with anything I can find", // A=1
      "I get antsy and find myself texting people just to have connection", // B=2
      "I'm getting better at being with myself, but sometimes it still feels like waiting", // C=3
      "I feel whole and at peace—alone time is sacred" // D=4
    ],
    domain: "Emotional Avoidance and Repression"
  },
  // Q23 - Self-Deception vs. Self-Honesty
  {
    question: "How do you feel about your capacity to stay grounded when life gets chaotic?",
    answers: [
      "I usually get swept away and lose my center completely", // A=1
      "I try to stay grounded, but I often find myself spinning", // B=2
      "I'm getting better at finding my breath when I need it", // C=3
      "I have a deep trust in myself, even when life feels like a storm" // D=4
    ],
    domain: "Self-Deception vs. Self-Honesty"
  },
  // Q24 - Intimacy Capacity
  {
    question: "How do you show up in the world?",
    answers: [
      "I try to be whatever version of me I think people want", // A=1
      "I dip my toe in authenticity, but keep most of me hidden", // B=2
      "I show up as me, but sometimes still worry what others think", // C=3
      "I show up fully as myself—with deep integrity and presence" // D=4
    ],
    domain: "Intimacy Capacity"
  },
  // Q25 - Self-Deception vs. Self-Honesty
  {
    question: "How aligned do you feel with how you spend your days?",
    answers: [
      "Most days feel like I'm just trying to get through them", // A=1
      "I'm trying to find my way, but still feel a bit lost", // B=2
      "I'm starting to find some alignment, though not every day", // C=3
      "Most days feel like they're flowing from my deepest values" // D=4
    ],
    domain: "Self-Deception vs. Self-Honesty"
  },
  // Q26 - Self-Deception vs. Self-Honesty
  {
    question: "How do you feel about your own inner wisdom?",
    answers: [
      "What inner wisdom? Mine seems to be on permanent vacation", // A=1
      "I hear whispers of it, but often get drowned out by doubt", // B=2
      "I'm getting clearer, though sometimes still doubt what I hear", // C=3
      "I trust my inner voice above all other voices" // D=4
    ],
    domain: "Self-Deception vs. Self-Honesty"
  },
  // Q27 - Image Maintenance (Ego Grip)
  {
    question: "How do you embody your most authentic self?",
    answers: [
      "I'm still trying to figure out who that even is", // A=1
      "I show glimpses of my real self, but only when it feels safe", // B=2
      "I'm becoming more and more real, though I still have my masks", // C=3
      "I live as my whole self—honestly, vulnerably, and powerfully" // D=4
    ],
    domain: "Image Maintenance (Ego Grip)"
  },
  // Q28 - Control Orientation
  {
    question: "How do you respond when life doesn't go as planned?",
    answers: [
      "I usually spiral or shut down completely", // A=1
      "I try to adapt, but it usually throws me for a loop", // B=2
      "I'm getting better at finding the lesson, even when it hurts", // C=3
      "I welcome the detours—they often lead to something even better" // D=4
    ],
    domain: "Control Orientation"
  },
  // Q29 - Image Maintenance (Ego Grip)
  {
    question: "How do you feel about asking for help when you need it?",
    answers: [
      "I'd rather suffer alone than admit I need support", // A=1
      "I hesitate, procrastinate, and usually wait until I'm drowning", // B=2
      "I'm learning to reach out, though it still takes courage", // C=3
      "I ask for exactly what I need—it feels like strength, not weakness" // D=4
    ],
    domain: "Image Maintenance (Ego Grip)"
  },
  // Q30 - Self-Deception vs. Self-Honesty
  {
    question: "How would you describe your relationship with yourself right now?",
    answers: [
      "We're barely on speaking terms most days", // A=1
      "We're working on it, but still have trust issues", // B=2
      "We're becoming friends, with occasional disagreements", // C=3
      "We're deeply in love—I am my own best companion" // D=4
    ],
    domain: "Self-Deception vs. Self-Honesty"
  }
];
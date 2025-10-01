// Quiz Application Script - Updated Reflection System with Reordered Questions

// Question to Category Mapping (30 questions mapped to 6 categories)
// NOTE: These indices refer to the NEW question order
const categoryMapping = {
    "Self-Relationship": [0, 1, 2, 3, 4, 6, 28], // Q1(old 30), Q2(old 26), Q3(old 2), Q4(old 19), Q5(old 11), Q7(old 17), Q29(old 15)
    "Self-Awareness": [5, 7, 10, 24, 25, 29], // Q6(old 25), Q8(old 10), Q11(old 9), Q25(old 14), Q26(old 27), Q30(old 29)
    "Interpersonal Connection": [11, 12, 13, 14, 15], // Q12(old 4), Q13(old 12), Q14(old 3), Q15(old 21), Q16(old 24)
    "Authentic Expression": [16, 17, 18, 19, 20], // Q17(old 6), Q18(old 5), Q19(old 20), Q20(old 16), Q21(old 1)
    "Resilience & Growth": [21, 22, 23, 26], // Q22(old 7), Q23(old 22), Q24(old 23), Q27(old 28)
    "Agency & Forward Movement": [8, 9, 27] // Q9(old 8), Q10(old 13), Q28(old 18)
};

// Maximum possible scores for each category
const maxScores = {
    "Self-Relationship": 28, // 7 questions * 4 points max
    "Self-Awareness": 24, // 6 questions * 4 points max
    "Interpersonal Connection": 20, // 5 questions * 4 points max
    "Authentic Expression": 20, // 5 questions * 4 points max
    "Resilience & Growth": 16, // 4 questions * 4 points max
    "Agency & Forward Movement": 12 // 3 questions * 4 points max
};

// Quiz questions and answers - REORDERED
const quizData = [
    // Q1 (was Q30) - Self-Relationship
    {
        question: "How do you usually feel when you're completely alone?",
        options: [
            "I feel anxious and avoid it at all costs",
            "I get lost in screens and busywork - solitude still feels heavy",
            "It's getting easier - I actually enjoy my own company",
            "It's when I feel freest and most connected to myself"
        ]
    },
    // Q2 (was Q26) - Agency & Forward Movement
    {
        question: "How do you relate to your emotions?",
        options: [
            "I try to ignore them until they go away or explode",
            "I acknowledge them, but I still struggle to just be with them",
            "I'm learning to listen to them and give them space",
            "I welcome them all - they're like wise messengers"
        ]
    },
    // Q3 (was Q2) - Self-Relationship
    {
        question: "How often do you feel proud of who you are becoming?",
        options: [
            "Proud? I mostly feel like I'm stumbling in slow motion, hoping no one's watching",
            "I'm proud for about 3 minutes, then start Googling 'Why don't I ever feel enough?'",
            "I feel proud sometimes, but still doubt myself regularly",
            "I feel proud - this is exactly who I always knew I could be"
        ]
    },
    // Q4 (was Q19) - Self-Relationship
    {
        question: "How do you treat yourself when you're feeling small or insecure?",
        options: [
            "I spiral, self-judge, and then give myself a TED Talk in the mirror",
            "I slap on a smile, keep busy, and hope no one notices the storm",
            "I try to remind myself this is part of being human",
            "I offer myself the kind of support I'd give someone I love"
        ]
    },
    // Q5 (was Q11) - Self-Relationship
    {
        question: "How do you feel about the decisions you make?",
        options: [
            "I'm always second-guessing or regretting them",
            "I try to make the right ones, but I tend to overanalyze them",
            "I usually feel fine, then immediately text three friends to double-check reality",
            "I feel confident - I almost always know what the right choice is for me"
        ]
    },
    // Q6 (was Q25) - Self-Awareness
    {
        question: "How aware are you of your own patterns and triggers?",
        options: [
            "I usually only see them after they've already taken over",
            "I can see them in hindsight, but not always in the moment",
            "I'm starting to recognize them as they're happening",
            "I'm deeply aware and rarely caught off guard by them"
        ]
    },
    // Q7 (was Q17) - Self-Relationship
    {
        question: "How do you hold yourself when you're struggling?",
        options: [
            "I criticize or try to fix myself as fast as I can",
            "I try to slow down, but I still feel like a mess",
            "I'm learning to hold space for myself - with care that's still finding its footing",
            "I always offer myself love and empathy - no matter how messy I am"
        ]
    },
    // PAUSE 1 after Q7
    
    // Q8 (was Q10) - Self-Awareness
    {
        question: "How do you feel about the future?",
        options: [
            "I try not to think about it - it's too overwhelming",
            "I worry about it constantly but feel powerless to plan",
            "I think it holds good things, even if I'm still scared",
            "I feel grounded and excited, like I'm creating something meaningful"
        ]
    },
    // Q9 (was Q8) - Agency & Forward Movement
    {
        question: "How do you feel about the risks you take in life?",
        options: [
            "I avoid them unless there's absolutely no other option",
            "I take risks - as long as they're reversible, refundable, and come with a safety net",
            "I still crave deeper roots, but I take risks when I feel ready",
            "I take bold steps that challenge me and align with my growth"
        ]
    },
    // Q10 (was Q13) - Agency & Forward Movement
    {
        question: "How do you feel about the way you manage your time?",
        options: [
            "I usually avoid thinking about it until it's a mess",
            "I manage time mostly by reacting to what screams loudest",
            "I manage it decently, though I still crave more ease",
            "I'm always intentional with my time - it reflects what I care about"
        ]
    },
    // Q11 (was Q9) - Self-Awareness
    {
        question: "How do you feel about change in your life?",
        options: [
            "I resist it with everything I've got",
            "I accept change intellectually but struggle with it emotionally",
            "I try to embrace it, but it still throws me off at times",
            "I see it as growth - even if it's messy"
        ]
    },
    // Q12 (was Q4) - Interpersonal Connection
    {
        question: "How do you usually feel in your closest relationships?",
        options: [
            "Like I'm too much or not enough - sometimes both",
            "I try to show up, but half the time it feels like we're tuned to different radio stations",
            "Emotionally intimate, but still ask if they like me every 3 days",
            "I feel safe, accepted, and entirely free to be myself"
        ]
    },
    // Q13 (was Q12) - Interpersonal Connection
    {
        question: "How do you feel about the relationships you currently have?",
        options: [
            "I often feel alone, even when I'm with others",
            "I have people, but sometimes I still feel like I'm the extra in someone else's movie",
            "I have meaningful connections, but I still long for more depth",
            "I feel deeply seen, supported, and connected"
        ]
    },
    // Q14 (was Q3) - Interpersonal Connection
    {
        question: "How often do you feel safe being your full, honest self with others?",
        options: [
            "I'm entirely myself... in group chats with no one else in them",
            "I test the waters but rarely feel genuinely safe",
            "I can be real with a few people, but I still hold back the parts that feel too tender",
            "I feel safe enough to be all of me - and that's non-negotiable"
        ]
    },
    // PAUSE 2 after Q14
    
    // Q15 (was Q21) - Interpersonal Connection
     {
        question: "How do you feel about your ability to express love?",
        options: [
            "I overthink it and hold back so I won't get hurt",
            "I try, but I still feel clumsy and unsure if it's landing",
            "I express it when I can, but I still crave deeper connection",
            "I express love openly and fully - in my own true way"
        ]
    },
    // Q16 (was Q24) - Interpersonal Connection
    {
        question: "How do you usually feel in social situations?",
        options: [
            "Anxious - I wonder if I said the wrong thing the entire time",
            "I show up but feel like I need a manual for being human",
            "I'm comfortable with my close people, but larger groups still make me nervous",
            "I feel fully at ease - in my body and with others"
        ]
    },
    // Q17 (was Q6) - Authentic Expression
    {
        question: "How do you feel about your ability to say \"no\" to others?",
        options: [
            "I say yes when I want to say no - just to avoid tension",
            "I only say 'no' when nobody's listening - then I still apologize",
            "I can say no when I need to, but it still makes me uncomfortable",
            "I always say no when I need to, and it feels like self-respect"
        ]
    },
    // Q18 (was Q5) - Authentic Expression
    {
        question: "How do you usually handle conflict or confrontation?",
        options: [
            "I avoid it completely - I'd rather disappear",
            "I write a monologue in my head, rehearse it for 2 hours, then send a meme instead",
            "I bring things up when I can, but I overthink every word",
            "I show up for myself when I need to, even if it's uncomfortable"
        ]
    },
    // Q19 (was Q20) - Authentic Expression
    {
        question: "How do you feel about being seen - really seen - for who you are?",
        options: [
            "It feels like standing naked in a spotlight... with a room full of people holding comment cards",
            "Sometimes I let myself be seen, but I still wear armor just in case",
            "I show up mostly as I am - even if I still feel exposed",
            "Being seen or not doesn't shake me - I trust the home I've built inside"
        ]
    },
    // Q20 (was Q16) - Authentic Expression
    {
        question: "How do you speak your truth in everyday life?",
        options: [
            "I stay quiet and hope people understand me without asking",
            "I sometimes speak up - but only if it feels really safe",
            "I speak up when it matters, even if my voice shakes",
            "I always speak my truth, even if there are confetti and fireworks involved"
        ]
    },
    // Q21 (was Q1) - Authentic Expression
    {
        question: "How often do you celebrate yourself or your wins?",
        options: [
            "Celebrate? I usually skip to what's next",
            "I downplay it so I don't seem full of myself",
            "I celebrate for a second, then wonder if I should've done better",
            "I celebrate like I'm throwing a party for my soul"
        ]
    },
    // PAUSE 3 after Q21
    
    // Q22 (was Q7) - Resilience & Growth
    {
        question: "How do you handle disappointment or setbacks?",
        options: [
            "I avoid it until it's too much to handle - then I'm all over the place",
            "I try to manage it, but I usually spiral into frustration",
            "I feel it, then immediately stress-bake something I won't eat",
            "I process it with compassion and learn from it every time"
        ]
    },
    // Q23 (was Q22) - Resilience & Growth
    {
        question: "How do you usually respond to failure?",
        options: [
            "I panic-delete everything and then doubt my whole existence",
            "I try to move on quickly, but the sting lingers",
            "I give myself grace and try to learn from it",
            "I see failure as part of my growth - it's not personal"
        ]
    },
    // Q24 (was Q23) - Resilience & Growth
    {
        question: "How do you handle criticism or feedback?",
        options: [
            "I immediately spiral - it echoes the inner voice that's been criticizing me for years",
            "I act cool, but I replay it for a week",
            "I try to see what's true without beating myself up",
            "I receive it with gratitude - without identifying with it"
        ]
    },
    // Q25 (was Q14) - Self-Awareness
    {
        question: "How do you feel about your personal growth?",
        options: [
            "I avoid self-work unless life forces me into it",
            "I do some self-work but give up when it gets uncomfortable",
            "I'm making progress and becoming more self-aware",
            "I actively invest in my growth - it excites and empowers me"
        ]
    },
    // Q26 (was Q27) - Self-Awareness
    {
        question: "How do you feel about the pace of your growth?",
        options: [
            "I feel stuck in the same patterns and stories",
            "I'm making some progress, but not as much as I'd like",
            "I'm growing steadily, learning from my experiences",
            "I'm expanding in all the ways that matter to me"
        ]
    },
    // PAUSE 4 after Q26
    
    // Q27 (was Q28) - Resilience & Growth
    {
        question: "How do you feel about your ability to receive help?",
        options: [
            "I refuse it until I absolutely can't do it alone",
            "I'll accept it, but I still feel like I'm failing",
            "I'm learning to receive support - but it still makes me squirm",
            "I receive it with grace, knowing we're meant to support each other"
        ]
    },
    // Q28 (was Q18) - Agency & Forward Movement
    {
        question: "How do you relate to your boundaries?",
        options: [
            "I usually only notice my boundaries after they've already been crossed",
            "I try to set them - then immediately second-guess myself",
            "I try to say what I need, even if it still feels shaky",
            "I set clear boundaries, built on hard-earned experience and rooted in self-respect"
        ]
    },
    // Q29 (was Q15) - Self-Relationship
    {
        question: "How do you treat your body physically - food, rest, exercise?",
        options: [
            "I mostly ignore it unless it starts yelling at me",
            "I try... but my old habits keep showing up like exes with opinions",
            "I treat it like a garden - some days I water it well, other days I forget",
            "I care for it like a temple - rest, high-vibe food, and movement"
        ]
    },
    // Q30 (was Q29) - Self-Awareness
    {
        question: "How do you relate to your past?",
        options: [
            "I spend a lot of my life haunted by it",
            "I try to move forward, but I still react from my old stories",
            "I'm mostly at peace with it, though some areas still feel tender",
            "I've made peace with all of it - it's like a sacred part of my story"
        ]
    }
];

// Pause screen content
const pauseScreens = [
    {
        quote: "Authenticity is the daily practice of letting go of who we think we're supposed to be and embracing who we are.",
        author: "Brené Brown",
        image: "images/authenticity.png"
    },
    {
        quote: "The real voyage of discovery consists not in seeking new landscapes, but in having new eyes.",
        author: "Marcel Proust",
        image: "images/connection.png"
    },
    {
        quote: "Gratitude turns what we have into enough, and more. It turns denial into acceptance, chaos into order, confusion into clarity.",
        author: "Melody Beattie",
        image: "images/gratitude.png"
    },
    {
        quote: "The purpose of life is not to be happy. It is to be useful, to be honorable, to be compassionate, to have it make some difference that you have lived and lived well.",
        author: "Ralph Waldo Emerson",
        image: "images/life-love.png"
    }
];

// All 33 Reflections
const reflections = {
    balanced: {
        low: `Right now, life feels like you're barely keeping your head above water. It's not just one area that's hard - it's everything at once. You're managing instead of living, surviving instead of thriving. Here's what's actually happening: there's a single fear running underneath all of this, forcing you to abandon yourself in every direction. Think of it like a tree with roots so tangled that no branch can grow freely - the problem isn't in the branches, it's in what's underground. The pattern is systemic, which means the solution is too. **What is the one single fear that is forcing you to abandon yourself in every area of your life?**`,
        
        mid: `You understand what you need to do. You've read the books, listened to the podcasts, nodded along to the insights. You know the concepts intellectually, but something stops you from actually living them. Here's the gap: you're trying to "be better" instead of trusting what you already know. Think of it like someone who's learned to swim in theory but refuses to get in the water because they're waiting to be "ready enough." You're stuck in the preparation phase, rehearsing a life you're not yet living. The knowledge is there - the embodiment isn't. **What if you stopped 'trying to be better' and simply decided to trust what you already know, just for today?**`,
        
        high: `You've done the inner work. You know yourself, you hold yourself well, you show up authentically, and you move through difficulty with grace. The foundation is solid - genuinely solid. Here's what this moment is asking of you: now that your inner world is integrated, what are you going to build in your outer world? Think of it like an architect who's spent years mastering their craft but hasn't yet designed the building they were meant to create. The skills are there, the readiness is there. The question isn't about healing anymore - it's about contribution. **Now that your inner foundation is solid, what are you uniquely positioned to build, create, or contribute to the world?**`
    },
    
    paradox: {
        "Self-Relationship_Self-Awareness": `You've built a loving relationship with yourself, and that's real. You know how to be kind to yourself, and that matters. But here's what's also true: the same compassion that helps you accept yourself has made you reluctant to look clearly at your patterns. Think of it like someone who loves their home so much they stop noticing the cracks in the foundation. Your self-love is protecting you from self-honesty. The kindness is real, but it's also become a way to avoid seeing what needs to change. **What truth about yourself are you protecting yourself from by staying in unconditional acceptance?**`,
        
        "Self-Relationship_Interpersonal Connection": `You treat yourself well - with care, patience, and understanding. That's a strength most people never develop. But here's the paradox: the same self-sufficiency that helps you hold yourself has made you less willing to reach for others. Think of it like building a beautiful home and then never inviting anyone inside because you've made it so comfortable alone. Your ability to be your own sanctuary has become a reason not to need anyone else. The self-reliance is real, but it's also become isolation. **What are you actually protecting yourself from by not letting people into your inner world?**`,
        
        "Self-Relationship_Authentic Expression": `You know how to hold yourself with gentleness, and that's not nothing. You've learned to accept yourself as you are. But here's what's happening underneath: the same acceptance that keeps you from self-judgment also keeps you from self-assertion. Think of it like a musician who's learned to love their voice but never sings in front of anyone. You're kind to yourself in private, but you still hide in public. The self-compassion is genuine, but it hasn't translated into the courage to be seen. **What are you actually afraid will happen if you stop performing and just show up as you are?**`,
        
        "Self-Relationship_Resilience & Growth": `You've cultivated real tenderness with yourself - you know how to be gentle when things are hard. That's rare and valuable. But here's the hidden cost: the same self-compassion that helps you through difficulty has also made you avoid difficulty altogether. Think of it like a parent who loves their child so much they never let them fall, and the child never learns to walk. Your kindness toward yourself has become permission to stay small. The gentleness is real, but it's also keeping you from growing. **What are you actually protecting yourself from by refusing to let yourself struggle?**`,
        
        "Self-Relationship_Agency & Forward Movement": `You've built a deep, compassionate relationship with yourself, and that's real strength. You know how to hold yourself with kindness, and that matters. But here's what's also happening: the same self-acceptance that helps you be gentle with yourself has quietly become permission to stay exactly where you are. Think of it like a gardener who loves their garden so much they refuse to prune anything, fearing they'll harm what's already beautiful. The garden stays safe, but it stops growing. Your self-love is genuine, but it's also become your reason not to push forward. **What are you actually protecting yourself from by keeping your life small and safe?**`,
        
        "Self-Awareness_Self-Relationship": `You see yourself clearly - your patterns, your triggers, your defenses. That level of insight is rare. But here's the paradox: the same awareness that helps you understand yourself has turned into relentless self-analysis instead of self-compassion. Think of it like a doctor who can diagnose every illness but refuses to let the body rest and heal. You know what's wrong, but you won't stop examining it long enough to actually care for yourself. The clarity is real, but it's become a weapon you turn inward. **What are you actually protecting yourself from by staying in your head instead of dropping into your heart?**`,
        
        "Self-Awareness_Interpersonal Connection": `You understand yourself deeply - you know your patterns, you see your triggers, you recognize your defenses. That's powerful. But here's what's also true: the same self-awareness that gives you clarity about yourself has made you hyper-aware of others' patterns too, and now you struggle to just be with people without analyzing them. Think of it like watching a movie but only seeing the camera angles and editing cuts - you've lost the ability to just experience the story. Your insight is real, but it's become a barrier to genuine connection. **What are you actually protecting yourself from by staying in observer mode instead of participant mode?**`,
        
        "Self-Awareness_Authentic Expression": `You know yourself well - you see your patterns, your fears, your defenses with unusual clarity. That self-awareness is valuable. But here's the hidden cost: the same insight that helps you understand yourself has made you overthink every word before you speak it. Think of it like a writer who edits every sentence before finishing a single paragraph - the awareness kills the spontaneity. You know yourself so well that you've lost access to being yourself. The clarity is real, but it's become paralysis. **What are you actually protecting yourself from by needing to understand everything before you express anything?**`,
        
        "Self-Awareness_Resilience & Growth": `You see your patterns clearly - you know what triggers you, you understand your defenses, you recognize when you're repeating old stories. That awareness is real. But here's what's also happening: the same clarity that helps you see yourself has trapped you in endless analysis instead of action. Think of it like someone who knows exactly why they're afraid of water but never learns to swim. You understand the problem thoroughly, but understanding hasn't translated into change. The insight is genuine, but it's become a substitute for growth. **What are you actually protecting yourself from by staying in analysis instead of taking action?**`,
        
        "Self-Awareness_Agency & Forward Movement": `You understand yourself deeply - your patterns, your history, your wounds. That level of self-knowledge is rare and valuable. But here's the paradox: the same awareness that gives you insight has also given you explanations for why you can't move forward. Think of it like someone who knows exactly how their car broke down but never actually fixes it - the diagnosis becomes the destination. Your self-awareness is real, but it's become your justification for staying stuck. The clarity hasn't freed you, it's contained you. **What are you actually protecting yourself from by understanding everything but changing nothing?**`,
        
        "Interpersonal Connection_Self-Relationship": `You're deeply connected to others - you show up for your people, you create real intimacy, you know how to be present in relationships. That's rare. But here's what's happening underneath: the same capacity that helps you attune to others has made you lose attunement with yourself. Think of it like a translator who's so focused on conveying everyone else's meaning that they forget their own language. You know how to hold space for others, but you've stopped holding space for yourself. The connection is real, but you've disappeared into it. **What are you actually protecting yourself from by pouring into everyone else instead of turning toward yourself?**`,
        
        "Interpersonal Connection_Self-Awareness": `Your relationships are rich - you connect deeply, you show up authentically, people feel seen by you. That relational capacity is a gift. But here's the hidden cost: the same presence that helps you attune to others has made you stop paying attention to your own patterns and triggers. Think of it like a lighthouse keeper so focused on guiding ships that they never notice their own foundation is crumbling. You're so attuned outward that you've lost sight inward. The connection is genuine, but you've gone blind to yourself. **What are you actually protecting yourself from by staying focused on others instead of examining your own inner landscape?**`,
        
        "Interpersonal Connection_Authentic Expression": `You build real connection - people feel safe with you, your relationships have depth, you know how to create intimacy. That matters. But here's what's also true: the same relational attunement that helps you connect has made you a chameleon. Think of it like a mirror that reflects everyone perfectly but has no image of its own. You're so good at meeting people where they are that you've stopped showing up as who you are. The connection is real, but you've disappeared into it. **What are you actually protecting yourself from by being everything to everyone and nothing to yourself?**`,
        
        "Interpersonal Connection_Resilience & Growth": `Your relationships are meaningful - you show up for people, you create genuine connection, you know how to be present. That relational capacity is real strength. But here's the paradox: the same ability that helps you connect with others has made you avoid the discomfort of growth. Think of it like someone who builds deep friendships but never takes the solo journey that would actually change them. You seek comfort in connection instead of confronting what needs to shift. The intimacy is genuine, but it's become your way of staying the same. **What are you actually protecting yourself from by seeking comfort in others instead of facing your own transformation?**`,
        
        "Interpersonal Connection_Agency & Forward Movement": `You're deeply connected to others - your relationships matter, people feel your presence, you create real intimacy. That's valuable. But here's what's also happening: the same capacity that helps you show up for others has become a way to avoid showing up for yourself. Think of it like someone who's always helping others move but never actually moves their own life forward. Your relationships are rich, but your own direction is unclear. The connection is real, but it's become your distraction. **What are you actually protecting yourself from by investing in everyone else's life instead of building your own?**`,
        
        "Authentic Expression_Self-Relationship": `You show up authentically - you speak your truth, you don't perform for others, you're willing to be seen. That courage is real. But here's the paradox: the same boldness that helps you express yourself has made you harsh with yourself when you fall short. Think of it like an artist who paints with total honesty but then destroys every piece that doesn't meet their impossible standard. You demand authenticity from yourself without offering compassion when you're messy. The expression is genuine, but you've turned it into self-punishment. **What are you actually protecting yourself from by refusing to hold yourself gently?**`,
        
        "Authentic Expression_Self-Awareness": `You express yourself authentically - you speak your truth, you show up as you are, you don't hide. That's courage most people never develop. But here's what's also true: the same willingness to be seen has made you skip the step of actually seeing yourself first. Think of it like someone who shares their diary publicly but never reads it themselves. You're transparent with others, but you're opaque to yourself. The authenticity is real, but it's unreflective. **What are you actually protecting yourself from by expressing everything without examining anything?**`,
        
        "Authentic Expression_Interpersonal Connection": `You show up as yourself - you speak your truth, you don't perform, you're willing to be seen. That authenticity is valuable. But here's the hidden cost: the same commitment to being real has made you unwilling to meet people where they are. Think of it like someone who only speaks their native language and expects everyone else to learn it. You're authentic, but you're not attuned. The expression is genuine, but it's become disconnection disguised as honesty. **What are you actually protecting yourself from by demanding others accept you as you are without extending the same acceptance to them?**`,
        
        "Authentic Expression_Resilience & Growth": `You're authentic - you speak your truth, you show up as you are, you don't hide behind personas. That transparency is real. But here's what's also happening: the same commitment to being yourself has made you rigid about who that self is. Think of it like someone who declares "this is who I am" and then refuses to grow beyond it. You've confused authenticity with permanence. The honesty is genuine, but it's become your reason not to evolve. **What are you actually protecting yourself from by staying loyal to a version of yourself that no longer serves you?**`,
        
        "Authentic Expression_Agency & Forward Movement": `You're willing to be seen - you speak your truth, you show up authentically, you don't perform. That courage matters. But here's the paradox: the same authenticity that helps you express yourself has become a substitute for action. Think of it like someone who shares their dreams publicly but never actually builds them. You're honest about who you are, but you're not moving toward who you could become. The expression is real, but it's replaced momentum with transparency. **What are you actually protecting yourself from by talking about your life instead of changing it?**`,
        
        "Resilience & Growth_Self-Relationship": `You metabolize difficulty well - you learn from failure, you bounce back from setbacks, you keep growing. That resilience is powerful. But here's what's also true: the same strength that helps you handle hardship has made you unnecessarily hard on yourself. Think of it like a blacksmith who's so used to the heat of the forge they don't notice they're burning their own hands. You can endure anything, but you've forgotten how to be gentle with yourself. The resilience is real, but it's become self-abandonment. **What are you actually protecting yourself from by refusing to slow down and care for yourself?**`,
        
        "Resilience & Growth_Self-Awareness": `You grow through everything - you learn from mistakes, you bounce back from failure, you keep moving forward. That capacity for growth is real. But here's the paradox: the same resilience that helps you keep going has made you skip over actually understanding why you keep needing to bounce back. Think of it like someone who's great at healing broken bones but never asks why they keep falling. You recover quickly, but you don't stop to see the pattern. The growth is genuine, but it's reactive instead of reflective. **What are you actually protecting yourself from by always moving forward instead of pausing to understand yourself?**`,
        
        "Resilience & Growth_Interpersonal Connection": `You handle difficulty with grace - you learn from failure, you grow through hardship, you keep moving forward. That strength is real. But here's what's also happening: the same resilience that helps you face challenges has made you believe you should face them alone. Think of it like a mountain climber who's so capable they refuse to ever climb with a partner. Your ability to survive anything has become your reason not to need anyone. The growth is genuine, but it's isolated. **What are you actually protecting yourself from by proving you can do it all alone?**`,
        
        "Resilience & Growth_Authentic Expression": `You learn from everything - you metabolize failure, you grow through difficulty, you turn setbacks into wisdom. That capacity for growth is valuable. But here's the hidden cost: the same resilience that helps you keep going has made you perform strength instead of express vulnerability. Think of it like someone who's learned to walk through fire but never admits it burns. You grow through hardship, but you won't let anyone see you struggling. The resilience is real, but it's become a mask. **What are you actually protecting yourself from by always showing growth instead of sometimes showing pain?**`,
        
        "Resilience & Growth_Agency & Forward Movement": `You're resilient - you learn from setbacks, you bounce back from failure, you grow through difficulty. That capacity to metabolize hardship is real strength. But here's the paradox: the same resilience that helps you survive anything has made you reactive instead of proactive. Think of it like a firefighter who's excellent at putting out fires but never builds anything fireproof. You recover well, but you're not creating a life that requires less recovery. The growth is genuine, but it's responsive, not directional. **What are you actually protecting yourself from by constantly adapting instead of actually choosing your direction?**`,
        
        "Agency & Forward Movement_Self-Relationship": `You move forward - you take risks, you make things happen, you don't wait for permission. That agency is powerful. But here's what's also true: the same drive that helps you create momentum has made you abandon yourself in the process. Think of it like a runner so focused on the finish line they don't notice they're injured. You're moving fast, but you're leaving yourself behind. The agency is real, but it's become self-abandonment disguised as ambition. **What are you actually protecting yourself from by refusing to slow down and check in with yourself?**`,
        
        "Agency & Forward Movement_Self-Awareness": `You take action - you make decisions, you move forward, you create momentum. That sense of agency is real. But here's the paradox: the same drive that helps you move forward has made you skip the step of understanding yourself first. Think of it like driving fast with no map - you're covering distance, but you don't know if you're going the right direction. You act decisively, but you're not reflective. The agency is genuine, but it's unexamined. **What are you actually protecting yourself from by staying in motion instead of pausing to see yourself clearly?**`,
        
        "Agency & Forward Movement_Interpersonal Connection": `You create momentum - you take risks, you make things happen, you drive your life forward. That sense of agency is valuable. But here's what's also happening: the same independence that helps you act has made you unwilling to slow down for connection. Think of it like a ship captain so focused on reaching the destination they never dock to let passengers board. You're moving forward, but you're moving alone. The agency is real, but it's become isolation in motion. **What are you actually protecting yourself from by building a life that doesn't need anyone else in it?**`,
        
        "Agency & Forward Movement_Authentic Expression": `You take action - you make decisions, you create momentum, you don't wait for permission. That agency matters. But here's the hidden cost: the same drive that helps you move forward has made you perform capability instead of express truth. Think of it like someone building an empire but never saying they're exhausted. You're competent and moving, but you're not honest about the cost. The agency is real, but it's become performance. **What are you actually protecting yourself from by always showing strength instead of sometimes showing struggle?**`,
        
        "Agency & Forward Movement_Resilience & Growth": `You drive your life forward - you take initiative, you create momentum, you make things happen. That sense of agency is powerful. But here's the paradox: the same control that helps you steer your life has made you rigid about your direction. Think of it like a captain who's so committed to the planned route they miss the storm ahead. You're decisive and moving, but you're not flexible. The agency is genuine, but it's become stubbornness disguised as clarity. **What are you actually protecting yourself from by refusing to let life teach you something different than what you already decided?**`
    }
};

// DOM elements
const progressBar = document.getElementById('progress-bar');
const progressText = document.getElementById('progress-text');
const quizContainer = document.getElementById('quiz-container');
const pauseContainer = document.getElementById('pause-container');
const resultsContainer = document.getElementById('results-container');
const questionText = document.getElementById('question-text');
const answerOptions = document.getElementById('answer-options');
const backButton = document.getElementById('back-btn');
const pauseQuote = document.getElementById('pause-quote');
const pauseImage = document.getElementById('pause-image');
const continueButton = document.getElementById('continue-btn');
const reflectionText = document.getElementById('reflection-text');

// Quiz state
let currentQuestionIndex = 0;
let userResponses = [];
let pausePoints = [7, 14, 21, 26]; // Questions after which to show pause screens

// Initialize the quiz
function initQuiz() {
    if (backButton) {
        backButton.addEventListener('click', goToPreviousQuestion);
    }
    if (continueButton) {
        continueButton.addEventListener('click', continuePastPause);
    }
    
    const continueJourneyBtn = document.getElementById('continue-journey-btn');
    if (continueJourneyBtn) {
        continueJourneyBtn.addEventListener('click', function() {
            window.location.href = 'form.html';
        });
    }
    
    showQuestion(0);
    updateProgressBar();
}

function showQuestion(index) {
    const currentQuestion = quizData[index];
    questionText.textContent = currentQuestion.question;
    answerOptions.innerHTML = '';
    
    currentQuestion.options.forEach((option, i) => {
        const button = document.createElement('button');
        button.textContent = option;
        button.classList.add('answer-button');
        button.setAttribute('aria-label', `Option ${i + 1}: ${option}`);
        
        if (userResponses[index] === i) {
            button.classList.add('selected-persistent');
        }
        
        button.addEventListener('click', () => selectAnswer(i));
        answerOptions.appendChild(button);
    });
    
    if (index > 0) {
        backButton.classList.remove('hidden');
    } else {
        backButton.classList.add('hidden');
    }
    
    pauseContainer.classList.add('hidden');
    resultsContainer.classList.add('hidden');
    quizContainer.classList.remove('hidden');
}

function selectAnswer(optionIndex) {
    userResponses[currentQuestionIndex] = optionIndex;
    
    const buttons = document.querySelectorAll('.answer-button');
    buttons.forEach((button, i) => {
        if (i === optionIndex) {
            button.classList.add('selected-briefly');
        } else {
            button.classList.remove('selected-briefly');
        }
    });
    
    setTimeout(() => {
        if (pausePoints.includes(currentQuestionIndex)) {
            showPauseScreen(pausePoints.indexOf(currentQuestionIndex));
        } else if (currentQuestionIndex === quizData.length - 1) {
            showResults();
        } else {
            goToNextQuestion();
        }
    }, 300);
}

function showPauseScreen(pauseIndex) {
    pauseQuote.textContent = pauseScreens[pauseIndex].quote;
    document.getElementById('pause-author').textContent = "- " + pauseScreens[pauseIndex].author;
    pauseImage.src = pauseScreens[pauseIndex].image;
    
    quizContainer.classList.add('hidden');
    pauseContainer.classList.remove('hidden');
    resultsContainer.classList.add('hidden');
}

function continuePastPause() {
    goToNextQuestion();
}

function goToNextQuestion() {
    if (currentQuestionIndex < quizData.length - 1) {
        currentQuestionIndex++;
        showQuestion(currentQuestionIndex);
        updateProgressBar();
    } else {
        showResults();
    }
}

function goToPreviousQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        showQuestion(currentQuestionIndex);
        updateProgressBar();
    }
}

function updateProgressBar() {
    const progress = ((currentQuestionIndex) / quizData.length) * 100;
    progressBar.style.width = `${progress}%`;
    progressBar.setAttribute('aria-valuenow', progress);
    progressText.textContent = `${currentQuestionIndex} of ${quizData.length}`;
}

function showResults() {
    generateReflection();
    
    quizContainer.classList.add('hidden');
    pauseContainer.classList.add('hidden');
    
    const loadingContainer = document.getElementById('loading-container');
    loadingContainer.classList.remove('hidden');
    
    setTimeout(() => {
        loadingContainer.classList.add('hidden');
        resultsContainer.classList.remove('hidden');
        window.scrollTo(0, 0);
    }, 5000);
    
    progressBar.style.width = '100%';
    progressBar.setAttribute('aria-valuenow', 100);
    progressText.textContent = `30 of 30`;
}

function calculateCategoryScores() {
    const categoryScores = {
        "Self-Relationship": 0,
        "Self-Awareness": 0,
        "Interpersonal Connection": 0,
        "Authentic Expression": 0,
        "Resilience & Growth": 0,
        "Agency & Forward Movement": 0
    };
    
    for (const [category, questionIndices] of Object.entries(categoryMapping)) {
        let rawScore = 0;
        questionIndices.forEach(qIndex => {
            if (userResponses[qIndex] !== undefined) {
                rawScore += (userResponses[qIndex] + 1);
            }
        });
        
        const maxScore = maxScores[category];
        categoryScores[category] = (rawScore / maxScore) * 100;
    }
    
    return categoryScores;
}

function isBalancedProfile(categoryScores) {
    const scores = Object.values(categoryScores);
    const minScore = Math.min(...scores);
    const maxScore = Math.max(...scores);
    const spread = maxScore - minScore;
    
    if (spread > 15) {
        return null;
    }
    
    const allLow = scores.every(score => score >= 0 && score <= 40);
    const allMid = scores.every(score => score >= 41 && score <= 70);
    const allHigh = scores.every(score => score >= 71 && score <= 100);
    
    if (allLow) return 'low';
    if (allMid) return 'mid';
    if (allHigh) return 'high';
    
    return null;
}

function generateReflection() {
    const categoryScores = calculateCategoryScores();
    const balancedType = isBalancedProfile(categoryScores);
    
    if (balancedType) {
        reflectionText.innerHTML = reflections.balanced[balancedType].replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
        localStorage.setItem('userReflectionLevel', `Balanced-${balancedType}`);
        return;
    }
    
    let highestCategory = null;
    let lowestCategory = null;
    let highestScore = -1;
    let lowestScore = 101;
    
    for (const [category, score] of Object.entries(categoryScores)) {
        if (score > highestScore) {
            highestScore = score;
            highestCategory = category;
        }
        if (score < lowestScore) {
            lowestScore = score;
            lowestCategory = category;
        }
    }
    
    const paradoxKey = `${highestCategory}_${lowestCategory}`;
    const reflection = reflections.paradox[paradoxKey];
    
    if (reflection) {
        reflectionText.innerHTML = reflection.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
        localStorage.setItem('userReflectionLevel', paradoxKey);
    } else {
        reflectionText.innerHTML = reflections.balanced.mid.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
        localStorage.setItem('userReflectionLevel', 'Balanced-mid');
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const emailInput = document.getElementById('user-email');
    const submitButton = document.getElementById('cta-submit-btn');
    const emailError = document.getElementById('email-error');
    const form = document.getElementById('mc-embedded-subscribe-form');
    
    if (emailInput && submitButton && emailError && form) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        
        emailInput.addEventListener('input', function() {
            if (emailRegex.test(emailInput.value)) {
                emailError.classList.add('hidden');
                submitButton.disabled = false;
            } else {
                emailError.classList.remove('hidden');
                submitButton.disabled = true;
            }
        });
        
        form.addEventListener('submit', function(e) {
            setTimeout(function() {
                window.location.href = "https://ilovemylife.me/welcome";
            }, 500);
        });
    }
});

window.addEventListener('DOMContentLoaded', function() {
    if (document.getElementById('quiz-container')) {
        initQuiz();
    }
});

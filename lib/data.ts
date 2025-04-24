export type Mood = {
  id: string
  name: string
  emoji: string
  description: string
  color: string
}

export type Roast = {
  id: string
  moodId: string
  text: string
}

export type Distraction = {
  id: string
  moodId: string
  text: string
  type: "absurd" | "chaotic" | "wholesome"
}

export type PlaylistSuggestion = {
  moodId: string
  name: string
  tracks: {
    title: string
    artist: string
  }[]
}

export const moods: Mood[] = [
  {
    id: "clown-energy",
    name: "Clown Energy",
    emoji: "🤡",
    description: "You're one notification away from putting on a red nose and honking at your problems.",
    color: "bg-red-500",
  },
  {
    id: "bored-to-death",
    name: "Bored to Death",
    emoji: "💀",
    description: "So bored you're considering counting ceiling tiles as a hobby.",
    color: "bg-gray-500",
  },
  {
    id: "peak-desperate",
    name: "Peak Desperate",
    emoji: "😩",
    description: "You've hit rock bottom and started digging. Impressive.",
    color: "bg-purple-500",
  },
  {
    id: "existential-dread",
    name: "Existential Dread",
    emoji: "🌌",
    description: "Staring into the void and the void is definitely ghosting you.",
    color: "bg-indigo-800",
  },
  {
    id: "chaotic-neutral",
    name: "Chaotic Neutral",
    emoji: "🌪️",
    description: "Ready to either save the world or burn it down. Flip a coin.",
    color: "bg-amber-500",
  },
  {
    id: "main-character",
    name: "Main Character",
    emoji: "💫",
    description: "Walking down the street with imaginary cameras following you.",
    color: "bg-pink-500",
  },
  {
    id: "ghost-mode",
    name: "Ghost Mode",
    emoji: "👻",
    description: "You've left everyone on read so long they're planning your funeral.",
    color: "bg-blue-300",
  },
  {
    id: "trash-panda",
    name: "Trash Panda",
    emoji: "🦝",
    description: "Surviving on snacks and chaos, thriving in your natural habitat: mess.",
    color: "bg-stone-600",
  },
  {
    id: "galaxy-brain",
    name: "Galaxy Brain",
    emoji: "🧠",
    description: "Either you're having brilliant thoughts or it's just the caffeine.",
    color: "bg-violet-600",
  },
  {
    id: "emotional-damage",
    name: "Emotional Damage",
    emoji: "💔",
    description: "Your feelings have feelings and they're all filing complaints.",
    color: "bg-red-600",
  },
  {
    id: "zero-motivation",
    name: "Zero Motivation",
    emoji: "🦥",
    description: "Moving is overrated. Breathing is enough productivity for today.",
    color: "bg-green-700",
  },
  {
    id: "unhinged",
    name: "Unhinged",
    emoji: "🔥",
    description: "One minor inconvenience away from a villain origin story.",
    color: "bg-orange-600",
  },
]

export const roasts: Roast[] = [
  {
    id: "1",
    moodId: "clown-energy",
    text: "Ah, Clown Energy. When your life is such a circus that even the actual clowns are taking notes. At least you're entertaining yourself while the rest of us watch in secondhand embarrassment.",
  },
  {
    id: "2",
    moodId: "clown-energy",
    text: "Clown Energy? More like 'I'm coping with my problems by turning them into a comedy special that nobody asked for.' Bold strategy.",
  },
  {
    id: "3",
    moodId: "bored-to-death",
    text: "Bored to Death? Wow, your life must be so hard having absolutely nothing interesting happening. Have you tried, I don't know, developing a personality?",
  },
  {
    id: "4",
    moodId: "bored-to-death",
    text: "Bored to Death is just code for 'I have the attention span of a goldfish and the creativity of a blank wall.' Maybe try being interesting first?",
  },
  {
    id: "5",
    moodId: "peak-desperate",
    text: "Peak Desperate, huh? When you're so lonely you're getting relationship advice from your food delivery app. 'No, I don't want extra sauce, I want extra love!'",
  },
  {
    id: "6",
    moodId: "peak-desperate",
    text: "Peak Desperate is when you're refreshing your Instagram notifications like it's an IV drip of serotonin. The algorithm isn't your friend, bestie.",
  },
  {
    id: "7",
    moodId: "existential-dread",
    text: "Existential Dread? How original. Nothing says 'I'm deep' like staring at your ceiling fan and wondering about your purpose at 3 AM on a Tuesday.",
  },
  {
    id: "8",
    moodId: "existential-dread",
    text: "Ah, Existential Dread - when you realize you're just a speck in the universe but still manage to make it all about you. Impressive narcissism!",
  },
  {
    id: "9",
    moodId: "chaotic-neutral",
    text: "Chaotic Neutral is just spicy boring. You're not unpredictable, you're just indecisive with extra drama.",
  },
  {
    id: "10",
    moodId: "chaotic-neutral",
    text: "Chaotic Neutral? Let me guess, you think being random is a personality trait. Potato unicorn banana, am I right? So quirky.",
  },
  {
    id: "11",
    moodId: "main-character",
    text: "Main Character syndrome? Hate to break it to you, but in everyone else's movie, you're just an extra getting coffee in the background.",
  },
  {
    id: "12",
    moodId: "main-character",
    text: "Main Character energy is just 'attention-seeking' with better lighting and a soundtrack. The world isn't your movie set, but go off I guess.",
  },
  {
    id: "13",
    moodId: "ghost-mode",
    text: "Ghost Mode activated because actual communication is too scary? Groundbreaking. Your read receipts are the only relationship you're committed to.",
  },
  {
    id: "14",
    moodId: "ghost-mode",
    text: "Ghost Mode: When you're so afraid of rejection that you reject everyone first. Psychology 101, but make it toxic!",
  },
  {
    id: "15",
    moodId: "trash-panda",
    text: "Trash Panda mood? Your room probably looks like a raccoon's dream and your diet is basically 'whatever doesn't fight back.' Self-care is more than just surviving, you know.",
  },
  {
    id: "16",
    moodId: "trash-panda",
    text: "Trash Panda energy is just glorified laziness with a cute animal mascot. Your chaos isn't quirky, it's concerning.",
  },
  {
    id: "17",
    moodId: "galaxy-brain",
    text: "Galaxy Brain, huh? Is that what we're calling 'I read half a Wikipedia article and now I'm an expert'? Fascinating.",
  },
  {
    id: "18",
    moodId: "galaxy-brain",
    text: "Galaxy Brain but you still can't figure out how to fold a fitted sheet or maintain a sleep schedule. Priorities!",
  },
  {
    id: "19",
    moodId: "emotional-damage",
    text: "Emotional Damage? Let me guess, someone left you on read and now you're writing sad poetry about it. Shakespeare is quaking.",
  },
  {
    id: "20",
    moodId: "emotional-damage",
    text: "Emotional Damage is just the adult version of 'I fell and need a Band-Aid' but the Band-Aid is scrolling TikTok for 6 hours straight.",
  },
  {
    id: "21",
    moodId: "zero-motivation",
    text: "Zero Motivation: When even existing feels like a chore. Congratulations on breathing today, real overachiever energy!",
  },
  {
    id: "22",
    moodId: "zero-motivation",
    text: "Zero Motivation but infinite excuses. Your to-do list from 2019 called, it's still waiting for you to start.",
  },
  {
    id: "23",
    moodId: "unhinged",
    text: "Unhinged? More like 'I need attention so I'm acting like a caffeinated squirrel on TikTok.' We get it, you're quirky.",
  },
  {
    id: "24",
    moodId: "unhinged",
    text: "Unhinged is just a fancy way of saying 'I have zero impulse control and I'm proud of it.' Your chaos isn't cute, it's concerning.",
  },
]

export const distractions: Distraction[] = [
  {
    id: "1",
    moodId: "clown-energy",
    text: "Text your oldest contact a meme with zero context and see if they respond.",
    type: "absurd",
  },
  {
    id: "2",
    moodId: "clown-energy",
    text: "Put on the most ridiculous outfit you own and go grocery shopping like it's normal.",
    type: "chaotic",
  },
  {
    id: "3",
    moodId: "clown-energy",
    text: "Learn a magic trick and practice until you can do it perfectly.",
    type: "wholesome",
  },
  {
    id: "4",
    moodId: "bored-to-death",
    text: "Rearrange your furniture at 2 AM. Nothing says excitement like stubbing your toe in the dark.",
    type: "chaotic",
  },
  {
    id: "5",
    moodId: "bored-to-death",
    text: "Go to a public place and pretend you're a tourist from another country.",
    type: "absurd",
  },
  {
    id: "6",
    moodId: "bored-to-death",
    text: "Watch a documentary about something you know nothing about.",
    type: "wholesome",
  },
  {
    id: "7",
    moodId: "peak-desperate",
    text: "Write a dramatic love letter to your favorite snack food.",
    type: "absurd",
  },
  {
    id: "8",
    moodId: "peak-desperate",
    text: "Create a dating profile for your houseplant and swipe through apps for its perfect match.",
    type: "chaotic",
  },
  {
    id: "9",
    moodId: "peak-desperate",
    text: "Call an old friend you haven't spoken to in a while. They probably miss you too.",
    type: "wholesome",
  },
  {
    id: "10",
    moodId: "existential-dread",
    text: "Have an existential debate with your bathroom mirror. Bonus points if you lose the argument.",
    type: "absurd",
  },
  {
    id: "11",
    moodId: "existential-dread",
    text: "Write down your life story as if it's a movie synopsis. Make it sound epic.",
    type: "chaotic",
  },
  {
    id: "12",
    moodId: "existential-dread",
    text: "Plant something and commit to keeping it alive. Growth is a nice metaphor, isn't it?",
    type: "wholesome",
  },
  {
    id: "13",
    moodId: "chaotic-neutral",
    text: "Eat breakfast food for dinner and dinner food for breakfast tomorrow.",
    type: "absurd",
  },
  {
    id: "14",
    moodId: "chaotic-neutral",
    text: "Respond to all texts today only using song lyrics.",
    type: "chaotic",
  },
  {
    id: "15",
    moodId: "chaotic-neutral",
    text: "Make a playlist of songs that tell the story of your life so far.",
    type: "wholesome",
  },
  {
    id: "16",
    moodId: "main-character",
    text: "Create a soundtrack for your day and dramatically lip-sync while doing mundane tasks.",
    type: "absurd",
  },
  {
    id: "17",
    moodId: "main-character",
    text: "Film a day in your life as if you're in a documentary. Narrate everything dramatically.",
    type: "chaotic",
  },
  {
    id: "18",
    moodId: "main-character",
    text: "Do one thing today that future you will thank you for.",
    type: "wholesome",
  },
  {
    id: "19",
    moodId: "ghost-mode",
    text: "Send a message to someone you ghosted with just the ghost emoji and nothing else.",
    type: "absurd",
  },
  {
    id: "20",
    moodId: "ghost-mode",
    text: "Reply to all your unread messages with excuses so ridiculous nobody could be mad.",
    type: "chaotic",
  },
  {
    id: "21",
    moodId: "ghost-mode",
    text: "Reach out to someone you care about but haven't talked to in a while.",
    type: "wholesome",
  },
  {
    id: "22",
    moodId: "trash-panda",
    text: "Clean one small area of your space while dancing to music that's way too intense for the task.",
    type: "absurd",
  },
  {
    id: "23",
    moodId: "trash-panda",
    text: "Organize your belongings by color instead of function and see how long you can live like that.",
    type: "chaotic",
  },
  {
    id: "24",
    moodId: "trash-panda",
    text: "Set a 20-minute timer and clean as much as you can. You'd be surprised what you can accomplish.",
    type: "wholesome",
  },
  {
    id: "25",
    moodId: "galaxy-brain",
    text: "Try to explain your favorite movie plot to a pet or inanimate object.",
    type: "absurd",
  },
  {
    id: "26",
    moodId: "galaxy-brain",
    text: "Write down your most complex thought, then try to explain it using only emojis.",
    type: "chaotic",
  },
  {
    id: "27",
    moodId: "galaxy-brain",
    text: "Learn five new facts about a topic you're interested in.",
    type: "wholesome",
  },
  {
    id: "28",
    moodId: "emotional-damage",
    text: "Write a breakup letter to the thing causing you emotional damage.",
    type: "absurd",
  },
  {
    id: "29",
    moodId: "emotional-damage",
    text: "Create a dramatic playlist called 'My Villain Origin Story' and listen to it while doing chores.",
    type: "chaotic",
  },
  {
    id: "30",
    moodId: "emotional-damage",
    text: "Write down three things you like about yourself that have nothing to do with other people's opinions.",
    type: "wholesome",
  },
  {
    id: "31",
    moodId: "zero-motivation",
    text: "Set your alarm with the most annoying sound possible and put it across the room.",
    type: "absurd",
  },
  {
    id: "32",
    moodId: "zero-motivation",
    text: "Do the easiest task on your to-do list while pretending you're in a high-stakes movie montage.",
    type: "chaotic",
  },
  {
    id: "33",
    moodId: "zero-motivation",
    text: "Break down one task into the smallest possible steps and just do the first one.",
    type: "wholesome",
  },
  {
    id: "34",
    moodId: "unhinged",
    text: "Send a voice message to a friend where you laugh maniacally for 10 seconds, then say 'sorry, wrong chat' and never explain.",
    type: "absurd",
  },
  {
    id: "35",
    moodId: "unhinged",
    text: "Write a strongly worded letter to an inanimate object that has wronged you.",
    type: "chaotic",
  },
  {
    id: "36",
    moodId: "unhinged",
    text: "Channel that chaotic energy into a creative project - draw, write, or build something.",
    type: "wholesome",
  },
]

export const playlists: PlaylistSuggestion[] = [
  {
    moodId: "clown-energy",
    name: "Circus of My Own Making",
    tracks: [
      { title: "Circus", artist: "Britney Spears" },
      { title: "Clown", artist: "Emeli Sandé" },
      { title: "Send In The Clowns", artist: "Frank Sinatra" },
      { title: "Smile", artist: "Lily Allen" },
      { title: "The Show Must Go On", artist: "Queen" },
    ],
  },
  {
    moodId: "bored-to-death",
    name: "Soundtrack to Staring at Walls",
    tracks: [
      { title: "Bored", artist: "Billie Eilish" },
      { title: "Boredom", artist: "Tyler, The Creator" },
      { title: "Tired of Being Alone", artist: "Al Green" },
      { title: "Waiting Room", artist: "Phoebe Bridgers" },
      { title: "Time", artist: "Pink Floyd" },
    ],
  },
  {
    moodId: "peak-desperate",
    name: "Down Bad: The Musical",
    tracks: [
      { title: "Somebody To Love", artist: "Queen" },
      { title: "Lonely", artist: "Justin Bieber" },
      { title: "Please Notice", artist: "mxmtoon" },
      { title: "Dancing With Myself", artist: "Billy Idol" },
      { title: "Mr. Lonely", artist: "Bobby Vinton" },
    ],
  },
  {
    moodId: "existential-dread",
    name: "Void Staring Back: Greatest Hits",
    tracks: [
      { title: "Everybody Wants To Rule The World", artist: "Tears For Fears" },
      { title: "Exit Music (For a Film)", artist: "Radiohead" },
      { title: "How To Disappear Completely", artist: "Radiohead" },
      { title: "Dust in the Wind", artist: "Kansas" },
      { title: "The Sound of Silence", artist: "Simon & Garfunkel" },
    ],
  },
  {
    moodId: "chaotic-neutral",
    name: "Organized Chaos: The Mixtape",
    tracks: [
      { title: "Crazy", artist: "Gnarls Barkley" },
      { title: "Basket Case", artist: "Green Day" },
      { title: "Paranoid", artist: "Black Sabbath" },
      { title: "Psycho Killer", artist: "Talking Heads" },
      { title: "Disorder", artist: "Joy Division" },
    ],
  },
  {
    moodId: "main-character",
    name: "Main Character Energy: The Soundtrack",
    tracks: [
      { title: "Main Character", artist: "Taylor Swift" },
      { title: "I'm The Main Character", artist: "Ashnikko" },
      { title: "Feeling Myself", artist: "Nicki Minaj ft. Beyoncé" },
      { title: "Boss Bitch", artist: "Doja Cat" },
      { title: "Don't Stop Me Now", artist: "Queen" },
    ],
  },
  {
    moodId: "ghost-mode",
    name: "Songs to Ignore Texts To",
    tracks: [
      { title: "Ghost", artist: "Justin Bieber" },
      { title: "Ghostin", artist: "Ariana Grande" },
      { title: "When The Party's Over", artist: "Billie Eilish" },
      { title: "Leave Me Alone", artist: "Michael Jackson" },
      { title: "Missing U", artist: "Robyn" },
    ],
  },
  {
    moodId: "trash-panda",
    name: "Dumpster Fire Disco",
    tracks: [
      { title: "Trash", artist: "Tyler, The Creator" },
      { title: "Garbage", artist: "Tyler, The Creator" },
      { title: "Hot Mess", artist: "Cobra Starship" },
      { title: "Mess Around", artist: "Cage The Elephant" },
      { title: "Dirty Laundry", artist: "All Time Low" },
    ],
  },
  {
    moodId: "galaxy-brain",
    name: "Big Brain Beats",
    tracks: [
      { title: "Brainwashed", artist: "While She Sleeps" },
      { title: "Brain Damage", artist: "Pink Floyd" },
      { title: "Thought Contagion", artist: "Muse" },
      { title: "Thinkin Bout You", artist: "Frank Ocean" },
      { title: "Mind Games", artist: "John Lennon" },
    ],
  },
  {
    moodId: "emotional-damage",
    name: "Emotional Damage: The Album",
    tracks: [
      { title: "Emotional", artist: "Diana Ross" },
      { title: "Liability", artist: "Lorde" },
      { title: "Hurt", artist: "Johnny Cash" },
      { title: "Tears Dry On Their Own", artist: "Amy Winehouse" },
      { title: "All By Myself", artist: "Celine Dion" },
    ],
  },
  {
    moodId: "zero-motivation",
    name: "Songs to Do Nothing To",
    tracks: [
      { title: "Lazy", artist: "Bruno Mars" },
      { title: "I Don't Want To Do Anything", artist: "Liana Flores" },
      { title: "Comfortably Numb", artist: "Pink Floyd" },
      { title: "Tired", artist: "Alan Walker" },
      { title: "Wake Me Up When September Ends", artist: "Green Day" },
    ],
  },
  {
    moodId: "unhinged",
    name: "Completely Unhinged: A Collection",
    tracks: [
      { title: "Psycho", artist: "Muse" },
      { title: "Crazy Train", artist: "Ozzy Osbourne" },
      { title: "Disturbia", artist: "Rihanna" },
      { title: "Lose Yourself", artist: "Eminem" },
      { title: "Manic", artist: "Coleman Hell" },
    ],
  },
]


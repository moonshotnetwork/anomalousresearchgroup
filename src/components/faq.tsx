import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Faq() {
  return (
    <div
      id="FAQ"
      className="mx-6 mt-60 flex flex-col items-center justify-center text-xl md:mx-40"
    >
      <h1 className="mb-10 text-center text-4xl md:text-left filter-[url(#glitchfilter)]">
        Frequently Asked Questions
      </h1>
      <Accordion type="single" collapsible className="w-full text-left filter-[url(#glitchfilter)]">
        <AccordionItem value="item-1">
          <AccordionTrigger>What do you do, anyway?</AccordionTrigger>
          <AccordionContent className="text-lg block sicko:hidden">
            We research, contain, and in some extreme cases neutralize phenomena that cannot be explained by natural means that threaten our way of life, in order to protect and serve the American people.
          </AccordionContent>
          <AccordionContent className="text-lg hidden sicko:block">
            We hopelessly thrash against our limitations instead of accepting our place. We tie a rope around the necks of the things around us and assure them it is a leash, and when that rope snaps oh the righteous fury that will ensue. We also have an on site Burger They.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>
            So are you ghost hunters?
          </AccordionTrigger>
          <AccordionContent className="text-lg">
            We're not just ghost hunters. We specialize in the tracking and containment of all sorts of harmful phenomena.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>I think I saw a fucked up guy, what should I do?</AccordionTrigger>
          <AccordionContent className="text-lg">
            Please contact us via our <a href="https://forms.gle/e9PbqPwQA1bJNxW2A">Tip Line</a> page.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger>I made contact with an anomaly and am now experiencing anomalous effects, what should I do?</AccordionTrigger>
          <AccordionContent className="text-lg">
            Please contact us via our <a href="https://forms.gle/e9PbqPwQA1bJNxW2A">Tip Line</a> page.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-5">
          <AccordionTrigger>How do I get a job with you?</AccordionTrigger>
          <AccordionContent className="text-lg">
            Check out our <a href="/Careers" className="hover:underline">Careers page</a> for current openings in your area!
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-6" className="hidden sicko:block">
          <AccordionTrigger>What happens if there's a containment breach?</AccordionTrigger>
          <AccordionContent className="lg:text-lg md:text-sm flex flex-col lg:ml-12 ml-2 text-xs -indent-2 lg:-indent-6">
            <span>[07/16/2025] JODI MASSON -&gt; RYDER DANIELS</span>
            <span>[2:15 PM] MASSON: Hi, Ryder! Got a sec?</span>
            <span>[2:19 PM] DANIELS: Jodi I promise I'm working on the latest 33ASMR breach, there's just a lot of them. </span>
            <span>[2:21 PM] MASSON: Yeah, yeah, no worries no worries! I mean, a little worries, but I know you're working on it.</span>
            <span>[2:21 PM] MASSON: I actually wanted to ask you about something else.</span>
            <span>[2:22 PM] DANIELS: What's up?</span>
            <span>[2:22 PM] MASSON: It looks like the filters flagged some kind of unusual activity on your profile and I just wanted to confirm that was all intended.</span>
            <span>[2:24 PM] DANIELS: Ah right that.</span>
            <span>[2:25 PM] MASSON: That?</span>
            <span>[2:27 PM] DANIELS: Somehow one of the motherfuckers in L5 has been using my account to contact people outside. I've pulled 3 all nighters this week trying to update it's containment.</span>
            <span>[2:28 PM] MASSON: ??????????????? Ok, bad.</span>
            <span>[2:28 PM] DANIELS: Yeah not good.</span>
            <span>[2:29 PM] DANIELS: There will be a full incident report once me and River have an answer.</span>
            <span>[2:30 PM] MASSON: Ha! Well, that seems like a pickle.</span>
            <span>[2:30 PM] MASSON: Out of curiosity, when were you planning on looping IT in on this security vulnerability?</span>
            <span>[2:32 PM] DANIELS: Containment is my dept we should be able to handle this.</span>
            <span>[2:33 PM] MASSON: How many people have access to your account right now, Ryder?</span>
            <span>[2:34 PM] DANIELS: ...12-20 depending on the day</span>
            <span>[2:35 PM] MASSON: Okay. So that's not great.</span>
            <span>[2:35 PM] DANIELS: That is worse when you put it that way yes.</span>
            <span>[2:35 PM] MASSON: Follow-up question. Have you taken any mundane security measures to try to mitigate that?</span>
            <span>[2:37 PM] DANIELS: Don't make me reset my password it took me so long to find one I can remember.</span>
            <span>[2:38 PM] MASSON: So. That's a no.</span>
            <span>[2:39 PM] DANIELS: 26 CHARACTERS! NO DICTIONARY WORDS!</span>
            <span>[2:40 PM] MASSON: 12-20 security leaks, Ryder!</span>
            <span>[2:44 PM] DANIELS: They didn't see anything important! Just some N3 clearance files.</span>
            <span>[2:48 PM] MASSON: That number should be zero files, Ryder. That's 12-20 people ARGroup has to track down and damage control.</span>
            <span>[2:55 PM] DANIELS: We don't even know they're real people. This entity likes to play mind games.</span>
            <span>[2:55 PM] MASSON: Change your password. I am not asking.</span>
            <span>[2:56 PM] DANIELS: There goes my afternoon.</span>
            <span>[2:57 PM] MASSON: Maybe you can take it out of your 33ASMR complaining time?</span>
            <span>[2:57 PM] MASSON: Lol.</span>
            <span>[2:58 PM] DANIELS: You give me a good answer as to what a "Blue Americano" is supposed to taste like and we'll talk.</span>
            <span>[2:58 PM] MASSON: I have no clue what you're talking about and I never will. </span>
            <span>[2:59 PM] DANIELS: It's better that way.</span>
            <span>[3:00 PM] MASSON: Okay well good luck. I'm going to start trying to track down anyone who got access when they shouldn't have. That's going to be my afternoon.</span>
            <span>[4:12 PM] DANIELS: Done. </span>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-7" className="hidden sicko:block">
          <AccordionTrigger>What happens if someone gets fired?</AccordionTrigger>
          <AccordionContent className="lg:text-lg md:text-sm flex flex-col lg:ml-12 ml-2 text-xs -indent-2 lg:-indent-6">
            <span className="font-bold lg:text-xl md:text-sm text-sm mb-3 md:mb-6">Help Tickets / Archives & Storage / AS-259</span>
            
            <span className="mb-6">[HELP] [AS] Terminated Employee Login Still Active</span>
            
            <span>Assignee: Jodi Masson</span>
            <span>Reporter: Jakob Sauter</span>
            <span className="mb-3 md:mb-6">Watchers: Eula Ewing</span>
            
            <span>Priority: Urgent</span>
            <span className="mb-3 md:mb-6">Status: Waiting for Support</span>
            
            <span className="font-bold lg:text-xl md:text-sm text-sm mb-3 md:mb-6">Description:</span>
            
            <span className="mb-3 md:mb-6">Hi guys, as you may know Jennifer Blecher’s employment with us was terminated recently due to a breach of anomaly containment procedures. It looks like her login is still active in the system as of 7/10. I know you are all very busy, but could I possibly get one of you to close out her account when you have a free minute?</span>
            
            <span className="mb-3 md:mb-6">Thanks!</span>
            
            <span className="font-bold lg:text-xl md:text-sm text-sm mb-3 md:mb-6">Comments:</span>
            
            <span className="mb-3 md:mb-6">Jakob Sauter - 7.18.2025</span>
            
            <span className="mb-3 md:mb-6">Hey everyone, just adding Dpt. Director Ewing as a watcher on this, I see there’s been no movement since I submitted the ticket. I know you have a larger IT breach you are dealing with, but this is important and should only take a second, hopefully. Let me know if there’s anything I can do to help.</span>
            
            <span className="mb-3 md:mb-6">Eula Ewing - 7.23.2025</span>
            
            <span>Any update on this ticket? Jodi it says you were assigned to this yesterday but it looks like Blecher’s account is still with us.</span>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-8" className="hidden sicko:block">
          <AccordionTrigger>How seriously do you take security?</AccordionTrigger>
          <AccordionContent className="lg:text-lg md:text-sm flex flex-col lg:ml-12 ml-2 text-xs -indent-2 lg:-indent-6">
            <span className="font-bold lg:text-xl md:text-sm text-sm mb-3 md:mb-6">Help Tickets / Replication / REP-690</span>

            <span className="mb-3 md:mb-6">[HELP] [REP] Possible 64NTMR Instance</span>

            <span>Assignee: Ellis Ortega</span>
            <span className="mb-3 md:mb-6">Reporter: Fletcher Keyes</span>

            <span>Priority: Urgent</span>
            <span className="mb-3 md:mb-6">Status: Closed</span>

            <span className="font-bold lg:text-xl md:text-sm text-sm mb-3 md:mb-6">Description:</span>

            <span className="mb-3 md:mb-6">The computer in my personal office has been playing sounds abruptly throughout the day that sound like a man speaking in weird low tones? Have not interacted with 64NTMR in recent memory but seems like it could have breached containment and spread to the network. Please look into.</span>

            <span className="font-bold lg:text-xl md:text-sm text-sm mb-3 md:mb-6">Comments:</span>

            <span className="mb-3 md:mb-6">Ellis Ortega - 6.7.2025</span>

            <span>Closing this ticket after investigation, @Fletcher Keyes you have a virus on your computer that is inconsistently playing audio from the trailer of The Dark Knight. The “man speaking in weird low tones” is the Joker, as played by Heath Ledger. IT has been brought in for a malware scan.</span>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-9" className="hidden sicko:block">
          <AccordionTrigger>What type of company culture do you strive for?</AccordionTrigger>
          <AccordionContent className="lg:text-lg md:text-sm flex flex-col lg:ml-12 ml-2 text-xs -indent-2 lg:-indent-6">
            <span className="font-bold lg:text-xl md:text-sm text-sm mb-3 md:mb-6">Help Tickets / Memetics / MEME-381</span>

            <span className="mb-3 md:mb-6">[HELP] [MEME] 33ASMR Clearance Level</span>

            <span>Assignee: Ellis Ortega, Eula Ewing</span>
            <span className="mb-3 md:mb-6">Reporter: Mina Lamb</span>

            <span>Priority: Urgent</span>
            <span className="mb-3 md:mb-6">Status: Waiting For Support</span>

            <span className="font-bold lg:text-xl md:text-sm text-sm mb-3 md:mb-6">Description:</span>

            <span className="mb-3 md:mb-6">Seriously, we need to up the fucking clearance level on this thing my researchers are losing so so much time just watching it and getting mad and talking about how mad they are. Containment and storage are your departments, literally, so put your heads together and figure this shit out before I lose my mind. I will submit this again if I have to, STOP IGNORING ME</span>

            <span className="font-bold lg:text-xl md:text-sm text-sm mb-3 md:mb-6">Comments:</span>

            <span className="mb-3 md:mb-6">Ellis Ortega - 7.23.2025</span>

            <span className="mb-3 md:mb-6">A little busy with the NTMR breach currently, but let’s circle back in a week or so! Setting a reminder on my calendar.</span>

            <span className="mb-3 md:mb-6">Mina Lamb - 7.23.2025</span>

            <span>Fuck you fguck you fuck you</span>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-9" className="hidden sicko:block">
          <AccordionTrigger>What benefits do you provide for your employees?</AccordionTrigger>
          <AccordionContent className="lg:text-lg md:text-sm flex flex-col lg:ml-12 ml-2 text-xs -indent-2 lg:-indent-6">
            <span className="font-bold lg:text-xl md:text-sm text-sm mb-3 md:mb-6">Help Tickets / Replication / REP-651</span>

            <span className="mb-3 md:mb-6">[HELP] [REP] Order</span>
            
            <span>Assignee: Unassigned</span>
            <span className="mb-3 md:mb-6">Reporter: Fletcher Keyes</span>
            
            <span>Priority: Urgent</span>
            <span className="mb-3 md:mb-6">Status: Closed</span>
            
            <span className="font-bold lg:text-xl md:text-sm text-sm mb-3 md:mb-6">Description:</span>
            
            <span className="mb-3 md:mb-6">One double cheesburger with the toppings- that's pickles. onions. mustard. ketchup. Letrtuce. cheddar cheese on that bad boy</span>
            
            <span className="mb-3 md:mb-6">Can I get a side of fries, wait, large fry. Make it a large fry.</span>
            
            <span className="mb-3 md:mb-6">I'll take another large dr pepper, no ice- please do not make this a meal these are a la carte they are separated.</span>
            
            <span className="mb-3 md:mb-6">The next desk over is splitting a pineapple and hot pepper pizza. NOT HAWAIIAN. They are vegitarians. I want it handtossed with the little dusty shit on the bottom of the za.  They'll get a 2 liter of fanta. that clown drink</span>
            
            <span className="mb-3 md:mb-6">Finally, boss is ordering a Greek salad but disassembled. What does that mean: great question. Separate containers with lettuce. Feta cheese. Tomatoes. Red onions kalamata olives (LOAD THOSE THE FUCK UP) and cucumber. No dressing. Wanna eat that bad boy dry</span>
            
            <span className="mb-3 md:mb-6">Thanks, bill it to the house.</span>
            
            <span className="font-bold lg:text-xl md:text-sm text-sm mb-3 md:mb-6">Comments:</span>
            
            <span className="mb-3 md:mb-6">Jodi Masson - 7.3.2025</span>
            
            <span>This is not the Burger They app. Closing this ticket.</span>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-10" className="hidden sicko:block">
          <AccordionTrigger>How do you ensure the safety of your employees?</AccordionTrigger>
          <AccordionContent className="lg:text-lg md:text-sm flex flex-col lg:ml-12 ml-2 text-xs -indent-2 lg:-indent-6">
            <span className="font-bold lg:text-xl md:text-sm text-sm mb-3 md:mb-6">Help Tickets / Containment Development / CON-280</span>
            
            <span className="mb-3 md:mb-6">[HELP] [MEME] 12RAWR Containment Bweach</span>
            
            <span>Assignee: Mina Lamb</span>
            <span className="mb-3 md:mb-6">Reporter: Ryder Daniels</span>
            
            <span>Priority: Urgent</span>
            <span className="mb-3 md:mb-6">Status: Closed</span>
            
            <span className="font-bold lg:text-xl md:text-sm text-sm mb-3 md:mb-6">Description:</span>
            
            <span className="mb-3 md:mb-6">12RAWR has bweached cuwwent containment awnd aww condev empwoyees wequiwe anti-memetic depwogwamming uwgentwy.</span>
            
            <span className="font-bold lg:text-xl md:text-sm text-sm mb-3 md:mb-6">Comments:</span>
            
            <span className="mb-3 md:mb-6">Mina Lamb - 4.17.2025</span>
            
            <span>I’ll be right down. As funny as this is every time, we gotta chat about upping this thing’s conprocs</span>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}

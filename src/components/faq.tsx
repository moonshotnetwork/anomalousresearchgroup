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
      <h1 className="mb-10 text-center text-4xl md:text-left">
        Frequently Asked Questions
      </h1>
      <Accordion type="single" collapsible className="w-full text-left">
        <AccordionItem value="item-1">
          <AccordionTrigger>What do you do, anyway?</AccordionTrigger>
          <AccordionContent className="text-lg">
            We research, contain, and in some extreme cases neutralize phenomena that cannot be explained by natural means that threaten our way of life, in order to protect and serve the American people.
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
            Please contact us via our Tip Line page.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger>I made contact with an anomaly and am now experiencing anomalous effects, what should I do?</AccordionTrigger>
          <AccordionContent className="text-lg">
            Please contact us via our Tip Line page.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-5">
          <AccordionTrigger>How do I get a job with you?</AccordionTrigger>
          <AccordionContent className="text-lg">
            Check out our <a href="/Careers" className="hover:underline">Careers page</a> for current openings in your area!
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}

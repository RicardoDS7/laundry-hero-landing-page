
export interface LaundrySteps {
    title: string,
    step: string,
    description: string,
}
export const LAUNDRY_STEPS: LaundrySteps[] = [
    {
      title: "Book it & bag it",
      step: "Step 1",
      description: "Pack your laundry and schedule a pick-up when it suits you.",
    },
    {
      title: "Cleaned with care, locally",
      step: "Step 2",
      description: "We collect your laundry & carefully clean it at our local facilities.",
    },
    {
      title: "Free delivery, fresh results.",
      step: "Step 3",
      description: "Relax while we clean and deliver your items fresh to your doorstep.",
    },
    
  ];

// FAQ 
export interface FAQProps {
    question: string,
    answer: string,
}
export const FAQs: FAQProps[] = [
    {
      question: "How do I schedule a laundry pickup?",
      answer: "You can schedule a pickup by selecting your preferred time and date through our app or website. Once booked, you'll receive a confirmation notification.",
    },
    {
      question: "What should I do to prepare my laundry for pickup?",
      answer: "Simply place your laundry in a bag and have it ready for pickup at the scheduled time. We'll provide laundry bags on your first order if needed.",
    },
    {
      question: "How long does it take to get my laundry back?",
      answer: "Our standard turnaround time is 24-48 hours, depending on your selected service. Expedited options are available for an additional fee.",
    },
    {
      question: "Can I track my laundry during the process?",
      answer: "Yes, you can track the status of your order, from pickup to delivery, through our app or website in real time.",
    },
    {
      question: "What happens if I’m not available for pickup or delivery?",
      answer: "If you’re unavailable, you can reschedule through the app. If our driver cannot reach you, they will leave a notification and attempt to contact you.",
    },
    {
        question: "Do you provide dry cleaning services?",
        answer: "Yes, we offer dry cleaning services in addition to wash-and-fold and ironing. You can select your preferred service when placing an order.",
    },
    {
    question: "What types of payment methods do you accept?",
    answer: "We accept major credit and debit cards, mobile payments, and online payment methods through our secure app or website.",
    },
    {
    question: "Are there any items you do not accept for cleaning?",
    answer: "Yes, we do not accept items like heavily soiled garments, hazardous materials, or items requiring special care beyond our service scope. Please check our guidelines for more details.",
    },
  ];
  
  
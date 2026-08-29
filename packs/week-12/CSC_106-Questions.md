# CSC_106 — Week 12 Question Set (sit 7 days later)

*Sit this during Saturday catch-up in Week 13, not this week. Notes closed.*

## Section A — Multiple choice (12)

**1.** WebAssembly is best described as:
a) A binary instruction format designed for web browsers
b) A JavaScript framework for building single-page applications
c) A cloud service that runs functions in response to events
d) A markup language for structuring accessible content

**2.** WebAssembly code is produced by compiling from which languages, according to the deck?
a) HTML, CSS and JavaScript
b) Python, Ruby and PHP
c) C++, Rust or TypeScript
d) SQL, XML and JSON

**3.** A web application needs to execute untrusted third-party code without letting it touch the rest of the system. Which WebAssembly advantage covers this, and how?
a) Cross-Platform Compatibility — all major browsers support it
b) Security — Wasm runs in a sandboxed environment
c) Speed and Performance — near-native execution
d) Serverless Computing — the provider isolates the function

**4.** Which set correctly names the three key concepts of serverless architecture?
a) Scalability, Cost-Efficiency, Faster Development
b) Perceivable, Operable, Robust
c) Supervised, Unsupervised, Deep
d) Functions as a Service, Event-Driven, Stateless

**5.** The mid-lesson answer names two challenges a startup should weigh against serverless benefits. They are:
a) Bias and interoperability
b) Cold starts and vendor lock-in
c) Retrofitting and regulatory compliance
d) Technological gaps and manual scaling

**6.** A company needs a scheduled job that generates weekly reports and emails them out. In the deck's list, this is the serverless use case called:
a) Background Jobs
b) Real-Time Data Processing
c) APIs and Microservices
d) IoT and Edge Computing

**7.** A retailer feeds an algorithm a pile of customer records with no labels, and it groups them into market segments. This is:
a) Supervised learning
b) Computer vision
c) Natural language processing
d) Unsupervised learning

**8.** Deep learning is defined in the deck as:
a) Any AI system that outperforms a human at a task
b) Training algorithms on labelled data to make classifications
c) A subset of ML using neural networks with many layers
d) Enabling computers to understand and generate human language

**9.** Which pairing of ML framework to description matches the deck?
a) TensorFlow — an open-source ML framework developed by Google
b) PyTorch — a cloud platform offering pre-built ML models
c) Scikit-Learn — Microsoft's cloud-based model deployment service
d) Google Cloud AI Platform — a Python library for general ML tasks

**10.** A hospital wants its AI diagnosis model to explain *why* it reached a conclusion, so clinicians can trust and audit it. Which future trend is this?
a) Edge AI
b) Quantum Machine Learning
c) AI for Healthcare and Life Sciences
d) Explainable AI (XAI)

**11.** A developer structures a page with semantic HTML so it keeps working with future assistive technologies. Which WCAG principle does this serve?
a) Perceivable
b) Robust
c) Operable
d) Understandable

**12.** Which technology in a Progressive Web App provides offline access, resource caching and push notifications?
a) Responsive design
b) Progressive enhancement
c) Service workers
d) WebAssembly modules

## Section B — Short answer (3)

**13.** You are building a browser-based video editor that applies real-time filters. Explain how WebAssembly benefits this project, name **two** of its three stated advantages with the deck's example for each, and name **two** other Wasm use cases the deck lists.

**14.** Distinguish **artificial intelligence**, **machine learning** and **deep learning** as the deck defines them. Then name **three** web applications of ML/AI from the deck, each with its named real-world example.

**15.** A university is redesigning its student portal for accessibility. State the difference between **accessibility** and **inclusivity**, list the **four** WCAG principles with one example each, and name **three** assistive tools or technologies the deck identifies.

---

## Answers

**Section A**

1. **a** — WebAssembly (Wasm) is a binary instruction format designed for web browsers, allowing high-performance execution of code on web pages.

2. **c** — Wasm is compiled from other languages, specifically C++, Rust or TypeScript, into a binary format the browser executes directly.

3. **b** — the Security advantage: Wasm runs in a sandboxed environment, and the deck's own example is running untrusted code safely within a web application.

4. **d** — FaaS (the core, code executed in response to events), Event-Driven, and Stateless; option A lists benefits, not key concepts.

5. **b** — the mid-lesson answer states cold starts and vendor lock-in are the challenges, but the benefits outweigh them for a startup.

6. **a** — Background Jobs covers scheduled or asynchronous tasks; the deck's example is generating weekly reports and sending them via email.

7. **d** — unsupervised learning trains on unlabelled data to discover patterns or groupings; the deck's example is clustering customer data to identify market segments.

8. **c** — deep learning is a subset of ML that uses neural networks with many layers; the example is a deep neural network for image recognition.

9. **a** — TensorFlow is Google's open-source ML framework. PyTorch is the open-source framework focused on flexibility and dynamic computation; Scikit-Learn is the Python ML library; Google Cloud AI Platform offers pre-built models and infrastructure.

10. **d** — Explainable AI makes models more interpretable and transparent to improve trust and accountability; Edge AI is about low-latency processing near the data.

11. **b** — Robust means designing to work with current and future technologies for longevity; the deck's example is exactly "using semantic HTML to structure content".

12. **c** — service workers enable offline access, cache resources for faster loading, and deliver push notifications even when the app is not open.

**Section B**

**13.** Compiling the heavy video-processing code to Wasm gives near-native performance in the browser, which is what real-time filters and effects require — the mid-lesson answer cites background blurring and AR overlays in a video conferencing app. Advantages (any two): *Speed and Performance* — near-native, suited to computationally intensive tasks like gaming, simulations and video editing, e.g. running a physics simulation in the browser; *Cross-Platform Compatibility* — supported by all major browsers, e.g. a web app working seamlessly on desktop and mobile; *Security* — sandboxed execution, e.g. running untrusted code safely. Other use cases (any two): gaming ("Cut the Rope" ported to Wasm), video and image processing (an online photo editor), AR/VR (a virtual museum tour), scientific simulations (climate change modelling), serverless computing (processing user-uploaded images).

**14.** *Artificial Intelligence* is the broader concept of creating machines or software that perform tasks normally requiring human intelligence, including problem-solving and decision-making. *Machine Learning* is a subset of AI focused on training computer systems to learn from data and make predictions or decisions. *Deep Learning* is a subset of ML that uses neural networks with many layers to analyse and process data. Applications (any three): Personalisation — Netflix recommending films from viewing history; Search Engines — Google's RankBrain refining results by understanding user intent; Chatbots and Virtual Assistants — Amazon's Alexa answering questions and controlling smart devices; Content Generation — GPT-3 producing human-like text such as news articles and product descriptions; Fraud Detection — banks identifying unusual spending patterns in online transactions.

**15.** Web accessibility is the practice of ensuring websites, web applications and content are usable by people with disabilities; inclusivity goes beyond accessibility, designing and developing web technologies to include all users regardless of their abilities or disabilities. WCAG principles: *Perceivable* — information and UI components presented so all users can perceive them, e.g. alternative text for images for screen reader users; *Operable* — users can navigate and interact using various input methods including keyboard and voice, e.g. all interactive elements keyboard accessible; *Understandable* — content clear and easy to understand, e.g. plain language; *Robust* — works with current and future technologies, e.g. semantic HTML. Tools (any three): screen readers converting text and visuals to speech or Braille; voice recognition software; keyboard navigation; closed captions and subtitles for audio content; colour contrast tools.

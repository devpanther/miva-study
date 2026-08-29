# CSC_106 — Week 12

*Introduction to Web Technologies · Week 12 (23 – 29 Nov 2026)*

**Topic: Future Trends of Web Technologies.** Four trends in the slide deck — WebAssembly, Serverless Architecture, ML/AI on the Web, Web Accessibility and Inclusivity — plus **PWAs**, which only the summary sheet covers. This is a terminology-and-examples deck: memorise the named tools, vendors and worked examples.

## Most likely to be examined
1. **WebAssembly (Wasm)** — a **binary instruction format** for browsers; compiled from **C++, Rust, TypeScript**; near-native speed.
2. **Wasm's three advantages** — Speed/Performance, Cross-Platform Compatibility, Security (**sandboxed**).
3. **Serverless key concepts** — **FaaS** (Functions as a Service), **Event-Driven**, **Stateless**; challenges = **cold starts, vendor lock-in**.
4. **ML types** — Supervised (labelled) vs Unsupervised (unlabelled) vs Deep Learning vs NLP vs Computer Vision, each with its example.
5. **ML frameworks and their owners** — TensorFlow (Google), PyTorch, Scikit-Learn, Microsoft Azure ML, Google Cloud AI Platform.
6. **The four WCAG principles (POUR)** — Perceivable, Operable, Understandable, Robust + the example each.
7. **A11Y** — numeronym for **accessibility**; **WCAG** = Web Content Accessibility Guidelines.
8. **PWA** — Progressive Web App; **service workers**, progressive enhancement; Twitter Lite, Flipkart, Starbucks, Trivago.

## WebAssembly (Wasm)
Binary instruction format designed for web browsers, allowing high-performance execution of code on web pages. JavaScript has performance limitations; Wasm addresses them. Code is **compiled from C++, Rust or TypeScript** into a binary the browser executes directly.
- **Speed and Performance** — near-native; suits gaming, simulations, video editing. *Example: a physics simulation in the browser.*
- **Cross-Platform Compatibility** — supported by all major browsers. *Example: one web app working on desktop and mobile.*
- **Security** — runs in a **sandboxed environment**. *Example: running untrusted code safely.*

**Use cases:** Gaming (*"Cut the Rope"* ported to Wasm) · Video and Image Processing (online photo editor with filters/effects) · AR and VR (virtual museum tour in the browser) · Scientific Simulations (climate-change simulation in an educational tool) · Serverless Computing (processing user-uploaded images).

## Serverless Architecture
Cloud computing paradigm where **the cloud provider manages the infrastructure**, so developers only write code.
- **Key concepts:** **FaaS** — code executed in response to events (the core); **Event-Driven** — responds to HTTP requests, database changes, file uploads; **Stateless** — no server-specific state kept between invocations.
- **Benefits:** Scalability (e-commerce holiday traffic surge) · Cost-Efficiency, pay only for compute actually used (a start-up avoiding server provisioning) · Faster Development (rapidly deploying a support chatbot) · Automatic Scaling (IoT app processing sensor data from thousands of devices).
- **Use cases:** Web Applications (a CMS using serverless functions for auth and storage) · APIs and Microservices (serverless API serving a mobile app's user profiles) · Real-Time Data Processing (analysing social media trends) · IoT and Edge Computing (smart home monitoring) · Background Jobs (generating weekly reports and emailing them).
- **Challenges (from the mid-lesson answer):** **cold starts** and **vendor lock-in**; traditional servers give control but need manual scaling and cost more.

## Machine Learning and AI on the Web
**AI** = creating machines/software that perform tasks normally requiring human intelligence (problem-solving, decision-making). **ML** = a *subset* of AI, training systems to learn from data and make predictions or decisions.

| Type | Definition | Deck's example |
|---|---|---|
| **Supervised Learning** | trained on **labelled** data to predict/classify | spam filter classifying emails |
| **Unsupervised Learning** | trained on **unlabelled** data to find patterns/groupings | clustering customers into market segments |
| **Deep Learning** | subset of ML; **neural networks with many layers** | deep neural net for image recognition |
| **NLP** | computers understand, interpret and generate human language | a chatbot answering user queries |
| **Computer Vision** | interpreting visual information from images/video | facial recognition in a security system |

**Applications:** Personalisation (**Netflix** recommendations) · Search Engines (**Google's RankBrain**) · Chatbots and Virtual Assistants (**Amazon's Alexa**) · Content Generation (**GPT-3**) · Fraud Detection (banks spotting unusual spending patterns).
**Frameworks/tools:** **TensorFlow** (open-source, by **Google**) · **PyTorch** (flexibility, dynamic computation) · **Scikit-Learn** (Python library) · **Microsoft Azure ML** (cloud platform) · **Google Cloud AI Platform** (pre-built models + infrastructure).
**Challenges:** Data Privacy and Ethics · Bias and Fairness · Scalability · Interoperability · Cybersecurity.
**Future trends:** **Edge AI** (AI closer to where data is generated, low latency) · **Explainable AI (XAI)** (interpretable, transparent, trustworthy) · AI for AR and VR · AI for Healthcare and Life Sciences · **Quantum Machine Learning**.

## Web Accessibility and Inclusivity
- **Web accessibility** — ensuring sites, apps and content are **usable by people with disabilities**. **Inclusivity** goes *beyond* accessibility: designing for **all users regardless of ability**.
- **Disabilities** covered: visual, auditory, motor, cognitive. **WCAG** = Web Content Accessibility Guidelines (guidelines + success criteria). **A11Y** = numeronym for "accessibility".
- **Four principles (POUR):** **Perceivable** — presented so all users can perceive it (*alt text for screen readers*) · **Operable** — navigable by various inputs incl. keyboard and voice (*all interactive elements keyboard accessible*) · **Understandable** — clear and easy (*plain language*) · **Robust** — works with current and future technologies (*semantic HTML*).
- **Tools/technologies:** **Screen readers** (text/visuals → speech or **Braille**) · **Voice recognition software** · **Keyboard navigation** · **Closed captions and subtitles** (deaf/hard-of-hearing) · **Colour contrast tools**.
- **Challenges:** Technological Gaps (devices, browsers, assistive tech) · Awareness and Education · **Retrofitting vs Inclusive Design** · Regulatory Compliance (**ADA** in the US, **Web Accessibility Directive** in Europe) · Testing and User Feedback with disabled users.
- **Emerging trends:** **AI-Powered Accessibility Tools** (auto-generating image descriptions) · **Voice User Interfaces (VUIs)** · **AR and VR Accessibility** · **Inclusive Design Systems** · **Global Collaboration**.

## Progressive Web Apps (summary sheet only)
**PWAs** combine the strengths of web and mobile apps. Built on **progressive enhancement** — they work for everyone, from basic browsers to advanced devices. **Service workers** give **offline access, resource caching for faster loading, and push notifications**. **Responsive design** adapts to screen sizes and orientations. Benefits: improved user experience, broadened accessibility, **reduced development costs**, enhanced performance. **Real-world PWAs: Twitter Lite, Flipkart, Starbucks, Trivago.** Case study: an e-commerce PWA using service workers, push notifications, responsive design, offline access and background synchronisation to raise engagement and conversions.

## Commonly confused
- **AI vs ML vs Deep Learning** — AI is the broad concept; ML is a **subset of AI** that learns from data; Deep Learning is a **subset of ML** using many-layered neural networks.
- **Supervised vs Unsupervised** — labelled data to predict/classify (spam filter) vs unlabelled data to discover patterns (customer clustering). Clustering is always unsupervised.
- **NLP vs Computer Vision** — language (chatbots) vs visual information (facial recognition).
- **WebAssembly vs JavaScript** — Wasm is a **compiled binary** format from C++/Rust/TypeScript with near-native speed; JS is the interpreted language whose performance limits Wasm exists to fix. Wasm complements JS, it does not replace it.
- **Serverless vs "no servers"** — servers still exist; the **provider manages them**. And note *serverless is also listed as a Wasm use case* (running functions in the browser).
- **FaaS vs Event-Driven vs Stateless** — what runs (functions on events) vs what triggers it (HTTP requests, DB changes, file uploads) vs what it must not keep (per-server state between invocations).
- **Accessibility vs Inclusivity** — usable by people **with disabilities** vs designed for **all users regardless of ability**.
- **Perceivable vs Operable vs Robust** — alt text (perceive) vs keyboard/voice operation (interact) vs semantic HTML/future technologies (longevity).
- **Retrofitting vs Inclusive Design** — bolting accessibility onto an existing site vs building it in from the start.
- **Edge AI vs Explainable AI** — low-latency processing near the data source vs making models interpretable and transparent.
- **PWA vs native mobile app** — a PWA is a *web* app delivering an app-like experience (offline, push notifications) via service workers, at lower development cost than a native app.

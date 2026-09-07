# Tuesday — CSC_106 fast-hour check

*Future trends applied: Wasm, serverless behaviour, ML types, accessible markup and PWAs.*
*12 questions, straight after the hour. Score out of 12.*

**1.** ```html
<img src="sales.png">
```
A screen reader announces only "image". Which change makes the chart perceivable to that user?
A. `<img src="sales.png" width="400">`
B. `<img src="sales.png" alt="Sales rose 20% in May">`
C. `<img src="sales.png" class="chart">`
D. `<div><img src="sales.png"></div>`

**2.** A screen reader is pronouncing an English page with French pronunciation rules. Which attribute on the `<html>` element fixes this?
A. `dir="ltr"`
B. `charset="utf-8"`
C. `lang="en"`
D. `title="English"`

**3.** One compiled WebAssembly build of a game runs unchanged in Chrome on a Windows laptop and in Safari on an iPhone. Which Wasm advantage is this?
A. Cross-platform compatibility
B. Speed and performance
C. Security through sandboxing
D. Statelessness

**4.** A serverless function runs automatically each time a photo is uploaded to cloud storage and produces a thumbnail. Which serverless concept describes what starts the function?
A. Stateless
B. Cold start
C. Event-driven
D. Vendor lock-in

**5.** A serverless function runs 20,000 times in a month and each run takes 200 ms. Billing is ₦0.50 per second of compute used. What is the month's bill?
A. ₦10,000
B. ₦2,000
C. ₦200
D. ₦4,000

**6.** A start-up built its whole backend on one cloud provider's proprietary function triggers and storage APIs, and now finds that moving to another provider means rewriting most of it. Which serverless challenge is this?
A. Cold starts
B. Vendor lock-in
C. Statelessness
D. Interoperability

**7.** A model is trained on 10,000 emails, each already marked as spam or not spam, and then sorts new mail. Which type of machine learning is this?
A. Unsupervised learning
B. Computer vision
C. Supervised learning
D. Natural language processing

**8.** A progressive web app rearranges its layout when the phone is turned from portrait to landscape. Which PWA feature is at work?
A. Service workers
B. Push notifications
C. Progressive enhancement
D. Responsive design

**9.** A blind student has each web page read aloud, or sent to a Braille display. Which assistive technology is this?
A. Voice recognition software
B. A screen reader
C. A colour contrast tool
D. Keyboard navigation

**10.** A smart doorbell classifies motion on the device itself instead of sending video to the cloud, so that it reacts with almost no delay. Which AI trend is this?
A. Explainable AI
B. Quantum machine learning
C. Edge AI
D. Deep learning

**11.** Of artificial intelligence, machine learning and deep learning, which is the broadest category that contains the other two?
A. Machine learning
B. Deep learning
C. Natural language processing
D. Artificial intelligence

**12.** What is a Progressive Web App (PWA)?
A. A web app that uses service workers and progressive enhancement to behave like an installed app, with offline access and push notifications
B. A mobile app compiled separately for Android and iOS from one code base
C. A website that upgrades itself to WebAssembly on capable browsers
D. A serverless function that renders web pages on demand

---

## Answers

**1. B** — *Alternative text and the Perceivable principle.* A screen reader cannot see the picture; it reads the alt attribute instead. Giving the image a meaningful alt text is the named example of the Perceivable principle: information presented so that every user can perceive it.

width changes only the layout; class is a styling hook that assistive technology ignores; wrapping the image in a div adds structure but still gives the reader nothing to say.

**2. C** — *Declaring the page language for assistive technology.* Assistive technology picks its pronunciation rules from the document's language, declared with lang on the root element: `<html lang="en">`. Without it the reader falls back to its own default language.

dir sets the text direction, left-to-right or right-to-left; charset belongs to a meta tag and names the character encoding, not the language; title is a tooltip and does not affect speech rules.

**3. A** — *The three advantages of WebAssembly.* All major browsers support WebAssembly, so a single binary runs on desktop and mobile alike. That is the cross-platform compatibility advantage, whose named example is one web app working on both.

Speed is the near-native execution advantage; sandboxing is the security advantage that lets untrusted code run safely; statelessness is a serverless concept, not a Wasm one.

**4. C** — *Event-driven execution in serverless architecture.* The upload is an event, and the function runs in response to it. Event-driven is the concept covering what triggers a function: HTTP requests, database changes and file uploads.

Stateless describes what the function must not keep between runs; a cold start is the delay when a function has been idle; vendor lock-in is a challenge about being tied to one provider.

**5. B** — *Pay-per-use cost of serverless compute.* Total compute time is 20,000 × 0.2 s = 4,000 s. At ₦0.50 per second that is 4,000 × 0.5 = ₦2,000. Paying only for the seconds actually used is the cost-efficiency benefit.

₦10,000 charges a full second per run; ₦4,000 is the number of seconds, with the rate forgotten; ₦200 treats 200 ms as 0.02 s.

**6. B** — *Vendor lock-in as a serverless challenge.* Depending on one provider's proprietary services so that leaving means rewriting is vendor lock-in, one of the two named serverless challenges.

Cold starts are the other challenge, about latency after idleness; statelessness is a key concept, not a challenge; interoperability is listed among the challenges of ML and AI on the web, not of serverless.

**7. C** — *Supervised versus unsupervised learning.* The training data carries labels (spam, not spam) and the model learns to predict the label for new items. Learning from labelled data to classify is supervised learning, and the spam filter is its standard example.

Unsupervised learning uses unlabelled data to find groupings, such as clustering customers; computer vision interprets images and video; NLP is about understanding and generating language, and while emails are text, the defining feature here is the labels.

**8. D** — *Responsive design in a PWA.* Adapting the layout to the screen size and orientation is responsive design.

Service workers provide offline access, caching and push notifications; push notifications are messages delivered when the app is not open; progressive enhancement means the app works on basic browsers and gains features on capable ones.

**9. B** — *Assistive tools and who each serves.* A screen reader converts the text and visual content of a page into speech or Braille output, which is exactly what a blind user needs.

Voice recognition takes speech as input from the user; a colour contrast tool checks that text stands out from its background for low-vision users; keyboard navigation serves users who cannot use a mouse.

**10. C** — *Edge AI among the future trends.* Running the model close to where the data is generated, on the device rather than in the cloud, for low latency is Edge AI.

Explainable AI is about making a model's reasoning transparent; quantum machine learning is about using quantum computers for training; deep learning names the kind of model, not where it runs.

**11. D** — *AI, ML and deep learning as nested categories.* AI is the broad idea of machines doing tasks that need human intelligence. Machine learning is a subset of AI that learns from data, and deep learning is a subset of machine learning that uses many-layered neural networks. So AI contains both.

ML sits inside AI; deep learning is the narrowest of the three; NLP is a field within AI alongside computer vision, not the container of the others.

**12. A** — *Definition of a Progressive Web App.* A PWA is a web application that combines the reach of the web with the feel of a mobile app: service workers give offline access, caching and push notifications, and progressive enhancement means it works for every browser and improves on advanced devices. Twitter Lite and Flipkart are named examples.

Separately compiled native apps are what a PWA avoids, which is where the cost saving comes from; WebAssembly is unrelated to PWAs; serverless functions run on the provider's servers, not in the user's browser.

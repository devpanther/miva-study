# Tuesday — CSC_106 fast-hour check

*HTML document structure, images, hyperlinks, lists and tables, and form attributes.*
*Five questions, straight after the fast hour. Recall only. Score out of 5.*

**1.** Which element holds meta-information and is not visible to the user?
A. <body>
B. <head>
C. <header>
D. <html>

**2.** Which attribute gives the file an <img> element displays?
A. href
B. alt
C. src
D. action

**3.** Which form attribute gives the URL where the data is sent?
A. method
B. enctype
C. target
D. action

**4.** Inside a definition list, which element holds the definition itself?
A. <dd>
B. <dt>
C. <td>
D. <th>

**5.** Which form attribute is required when the form handles file uploads?
A. multiple
B. enctype
C. pattern
D. required

## Answers

**1. B** — <head> carries meta, title, link and script and renders nothing. <header> is a visible semantic element inside <body>, and <html> is the root element containing both.

**2. C** — src names the source file to embed on <img> and <script>; href gives a link destination on <a> and <link>; alt is the alternative text; action belongs to <form>.

**3. D** — action names the URL, usually a server-side script. method picks GET or POST, enctype matters for file uploads, and target chooses the window.

**4. A** — <dl> contains <dt> for the term and <dd> for its definition. <td> and <th> are table data and table header cells inside <tr>.

**5. B** — enctype="multipart/form-data" is needed to handle uploads on the server. multiple allows several selections, pattern sets a regular expression, and required forces a field to be filled.

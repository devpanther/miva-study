# Tuesday — CSC_106 fast-hour check

*Building a page: document structure, links, images, tables and working forms.*
*12 questions, straight after the hour. Score out of 12.*

**1.** ```html
<table>
  <tr><th>Item</th><th>Qty</th><th>Price</th></tr>
  <tr><td>Pen</td><td>2</td><td>100</td></tr>
  <tr><td>Book</td><td>1</td><td>900</td></tr>
</table>
```
How many rows does this render, and how many of its cells are header cells?
A. 2 rows, 3 header cells
B. 3 rows, 9 header cells
C. 3 rows, 3 header cells
D. 9 rows, 3 header cells

**2.** Clicking the link on line 1 does not scroll the page. Which line has the bug, and what is the fix?

```html
1  <a href="#fees">Jump to fees</a>
2  <p>Lots of text here.</p>
3  <h2 name="fees">Fees</h2>
```
A. Line 1: href should be "fees.html"
B. Line 3: the target needs id="fees"
C. Line 1: href should be "#fees.html"
D. Line 3: the heading should be an <a> element

**3.** index.html and team.html sit in the same folder at https://shop.ng/. On index.html, which href makes an internal link to team.html?
A. https://team.html
B. #team.html
C. www.shop.ng
D. team.html

**4.** ```html
<form action="/search" method="GET">
  <input type="text" name="q" value="css">
  <input type="number" name="page" value="2">
  <button type="submit">Go</button>
</form>
```
The user submits without changing anything. What does the address bar show?
A. /search?q=css&page=2
B. /search/css/2
C. /search, with q and page in the request body
D. /search#q=css&page=2

**5.** ```html
<input type="radio" name="size" value="s"> Small
<input type="radio" name="size" value="m"> Medium
<input type="radio" name="size" value="l"> Large
<input type="radio" name="colour" value="red"> Red
<input type="radio" name="colour" value="blue"> Blue
```
What is the largest number of these buttons that can be selected at the same time?
A. 1
B. 2
C. 5
D. 3

**6.** `<input type="text" name="code" pattern="[A-Z]{3}[0-9]{4}" required>`

Which entry passes the browser's validation?
A. AB12345
B. 1234ABC
C. ABC1234
D. ABC123

**7.** `<input type="number" name="age" min="18" max="60">`

Which of these values does the browser refuse to submit?
A. 18
B. 60
C. 45
D. 17

**8.** ```html
<form action="/upload" method="POST">
  <input type="file" name="cv">
  <button type="submit">Send</button>
</form>
```
The server receives the file's name but none of its contents. What is missing?
A. enctype="multipart/form-data" on the <form>
B. method="GET" instead of POST
C. multiple on the <input>
D. type="upload" instead of file

**9.** ```html
<ol>
  <li>Wake</li>
  <li>Code</li>
</ol>
<ul>
  <li>Sleep</li>
</ul>
```
What does this render?
A. Bulleted Wake and Code, then 1. Sleep
B. 1. Wake, 2. Code, then a bulleted Sleep
C. 1. Wake, 2. Code, 3. Sleep
D. Bulleted Wake, Code and Sleep

**10.** `<img href="logo.png" alt="Company logo">`

The image does not appear; only the text Company logo shows. What is the fix?
A. Replace alt with title
B. Add target="_blank"
C. Replace href with src
D. Wrap the tag in <a>

**11.** On a form input, what is the difference between the name and id attributes?
A. name is sent with the form data; id uniquely identifies the element for labels and scripts
B. id is sent with the form data; name is only for styling
C. They are interchangeable; either one is submitted
D. name sets the default value; id sets the placeholder

**12.** What is anchor text?
A. The URL held in the href attribute
B. The id of the element a link jumps to
C. The text shown in the browser's title bar
D. The visible, clickable part of a hyperlink

---

## Answers

**1. C** — *Reading table structure from tr, th and td.* Each `<tr>` is one row, so three rows. Header cells are `<th>`: the first row holds three of them; the other six cells are `<td>` data cells.

2 rows forgets that the header row is a row; 9 header cells counts every cell as a header; 9 rows counts cells instead of rows.

**2. B** — *Same-page links with href="#id".* A same-page link `href="#fees"` jumps to the element whose id is fees. Line 3 uses name instead of id, so no element matches and nothing happens; changing it to `<h2 id="fees">` fixes it.

fees.html would load a separate file rather than a section; #fees.html looks for an id of fees.html, which does not exist; the target does not have to be an `<a>`, any element with the id will do.

**3. D** — *Relative URLs for internal links.* An internal link within the same site uses a relative URL: from https://shop.ng/index.html, `href="team.html"` resolves to https://shop.ng/team.html.

https://team.html treats team.html as a host name, a different site that does not exist; #team.html is a same-page anchor looking for an id; www.shop.ng has no scheme, so it is read as a relative path to a file called www.shop.ng.

**4. A** — *GET form submission builds a query string.* With method GET the browser appends each control's name=value pair to the action URL as query parameters, after a ? and joined by &: /search?q=css&page=2.

/search/css/2 turns the values into path segments, which GET never does; data in the request body is what POST does; a # begins a fragment, which the server never receives.

**5. B** — *Radio button groups share a name.* Radio buttons that share a name form one mutually exclusive group, so only one can be chosen per group. There are two groups, size and colour, so at most two buttons are selected at once.

1 treats all five as one group; 5 treats them like checkboxes, which allow any number; 3 is the number of size options, not of groups.

**6. C** — *Validation with the pattern attribute.* The pattern demands exactly three capital letters followed by exactly four digits, and it must match the whole value: ABC1234 does.

AB12345 has two letters and five digits; 1234ABC has the digits before the letters, the wrong order; ABC123 has only three digits.

**7. D** — *Numeric limits with min and max.* min and max bound the value of a numeric input inclusively, so anything from 18 to 60 is accepted and 17 is refused.

18 and 60 sit exactly on the limits, which are allowed; 45 is inside the range.

**8. A** — *File uploads need multipart/form-data.* File uploads need the form body encoded as multipart/form-data; without `enctype="multipart/form-data"` the browser sends only the file name as text.

GET puts data in the URL and cannot carry a file at all; multiple only lets the user pick several files; there is no input type upload, file is the correct type.

**9. B** — *Rendering ordered and unordered lists.* `<ol>` is an ordered list, so its items are numbered 1 and 2; `<ul>` is an unordered list, so Sleep gets a bullet. The numbering does not continue into the second list because it is a separate list.

Bullets then a number swaps ol and ul; 1, 2, 3 treats the two lists as one ordered list; all bullets ignores the ol.

**10. C** — *src on img versus href on a.* `<img>` takes its file from the src attribute; href belongs to `<a>` and `<link>`. With no src the browser has nothing to load and falls back to the alt text.

title would only add a tooltip; target and `<a>` affect where a link opens, and there is no link here.

**11. A** — *name versus id on form controls.* When the form is submitted each control contributes name=value, so name is what the server sees. id is a unique identifier on the page, used by `<label for="...">` and by JavaScript to find the element; it is not submitted.

id is never sent as the field name; the two are not interchangeable; the default value is the value attribute and the hint text is placeholder.

**12. D** — *Definition of anchor text.* Anchor text is the content between `<a>` and `</a>`: the words the user sees and clicks, which should describe where the link leads.

The URL is the destination given by href; the id belongs to the target of a same-page link; the title bar text comes from `<title>` in the head.

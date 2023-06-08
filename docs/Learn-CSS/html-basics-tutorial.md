---
sidebar_position: 1
---

# HTML Basics Tutorial

HTML (Hypertext Markup Language) is the standard markup language used for creating web pages. It provides the structure and content of a webpage. In this tutorial, we will cover some of the basic HTML elements and their usage.

## Prerequisites

Before we begin, make sure you have a text editor and a web browser installed on your computer. Any text editor like Notepad, Sublime Text, or Visual Studio Code will work fine. You can use any web browser such as Google Chrome, Mozilla Firefox, or Microsoft Edge.

## Creating an HTML Document

To create an HTML document, follow these steps:

1. Open your text editor and create a new file.
2. Save the file with a `.html` extension, for example, `index.html`.

## Structure of an HTML Document

Every HTML document has a specific structure. Here is an example of a basic HTML document structure:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Page Title</title>
  </head>
  <body>
    <!-- Content goes here -->
  </body>
</html>
```

Let's break down the structure:

- `<!DOCTYPE html>`: This declaration specifies that the document is an HTML5 document.
- `<html>`: The root element of an HTML page.
- `<head>`: Contains meta-information about the HTML document, such as the title.
- `<title>`: Defines the title of the document, which appears in the browser's title bar or tab.
- `<body>`: Contains the visible content of the webpage.

## Adding Headings

Headings are used to define the structure and hierarchy of the content on a webpage. HTML provides six levels of headings, from `<h1>` (the highest level) to `<h6>` (the lowest level). Here's an example:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>My Webpage</title>
  </head>
  <body>
    <h1>Welcome to My Webpage</h1>
    <h2>About Me</h2>
    <h3>Education</h3>
    <h4>Skills</h4>
    <h5>Contact</h5>
    <h6>Footer</h6>
  </body>
</html>
```

## Adding Paragraphs

Paragraphs are used to structure text content. Use the `<p>` element to create paragraphs. Here's an example:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>My Webpage</title>
  </head>
  <body>
    <h1>Welcome to My Webpage</h1>
    <p>This is the first paragraph.</p>
    <p>This is the second paragraph.</p>
  </body>
</html>
```

## Adding Links

Links allow users to navigate between different web pages. The `<a>` element is used to create links. Here's an example:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>My Webpage</title>
  </head>
  <body>
    <h1>Welcome to My Webpage</h1>
    <p>Visit my favorite website: <a href="https://example.com">Example</a></p>
  </body>
</html>
```

## Adding Images

Images can be included in HTML using the `<img>` element. Here's an example:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>My Webpage</title>
  </head>
  <body>
    <h1>Welcome to My Webpage</h1>
    <img
      src="image.jpg"
      alt="Description

 of the image"
    />
  </body>
</html>
```

Make sure to replace `"image.jpg"` with the actual path or URL of your image.

## Conclusion

Congratulations! You've learned some of the basics of HTML. This tutorial covered creating an HTML document, adding headings, paragraphs, links, and images. There is a lot more to explore in HTML, including styling and layout with CSS, and interactivity with JavaScript. Keep practicing and experimenting to become proficient in HTML development.

<!-- # Create a Page

Add **Markdown or React** files to `src/pages` to create a **standalone page**:

- `src/pages/index.js` → `localhost:3000/`
- `src/pages/foo.md` → `localhost:3000/foo`
- `src/pages/foo/bar.js` → `localhost:3000/foo/bar`

## Create your first React Page

Create a file at `src/pages/my-react-page.js`:

```jsx title="src/pages/my-react-page.js"
import React from 'react';
import Layout from '@theme/Layout';

export default function MyReactPage() {
  return (
    <Layout>
      <h1>My React page</h1>
      <p>This is a React page</p>
    </Layout>
  );
}
```

A new page is now available at [http://localhost:3000/my-react-page](http://localhost:3000/my-react-page).

## Create your first Markdown Page

Create a file at `src/pages/my-markdown-page.md`:

```mdx title="src/pages/my-markdown-page.md"
# My Markdown page

This is a Markdown page
```

A new page is now available at [http://localhost:3000/my-markdown-page](http://localhost:3000/my-markdown-page). -->

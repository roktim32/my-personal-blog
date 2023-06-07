---
sidebar_position: 2
---

# HTML Forms Tutorial

HTML forms are essential for collecting user input on a webpage. Forms allow users to enter data, make selections, and submit it to a server for further processing. In this tutorial, we will cover the basics of creating forms in HTML.

## Prerequisites

Before we begin, ensure that you have a text editor and a web browser installed on your computer. Any text editor like Notepad, Sublime Text, or Visual Studio Code will work fine. You can use any web browser such as Google Chrome, Mozilla Firefox, or Microsoft Edge.

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

## Creating a Form

To create a form, you need to use the `<form>` element. This element serves as a container for all form-related elements. Here's an example:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Form Example</title>
  </head>
  <body>
    <h1>Contact Form</h1>
    <form>
      <!-- Form elements go here -->
    </form>
  </body>
</html>
```

## Adding Input Fields

Input fields allow users to enter data. There are various types of input fields available in HTML, such as text fields, checkboxes, radio buttons, and more. Here are a few examples:

### Text Field

```html
<input type="text" name="name" placeholder="Enter your name" />
```

### Checkbox

```html
<input type="checkbox" name="agree" value="yes" /> I agree to the terms and
conditions
```

### Radio Buttons

```html
<input type="radio" name="gender" value="male" /> Male
<input type="radio" name="gender" value="female" /> Female
```

### Select Dropdown

```html
<select name="country">
  <option value="usa">USA</option>
  <option value="canada">Canada</option>
  <option value="uk">UK</option>
</select>
```

## Adding a Submit Button

To allow users to submit the form, you need to add a submit button. Use the `<input>` element with the `type="submit"` attribute. Here's an example:

```html
<input type="submit" value="Submit" />
```

## Handling Form Submission

To handle form submission, you typically need to specify the `action` attribute on the `<form>` element. The `action` attribute defines the URL or script that will process the form data. Here's an example:

```html
<form action="submit.php" method="post">
  <!-- Form elements go here -->
  <input type="submit" value="Submit" />
</form>
```

In the above example, the form will be submitted to the `submit.php

` script using the HTTP POST method.

## Conclusion

You've learned the basics of creating HTML forms! This tutorial covered creating an HTML document, structuring the document, creating a form, adding input fields, and handling form submission. Forms are an essential part of web development for gathering user input and interacting with users. Keep exploring and experimenting with forms to enhance your web development skills.

<!-- # Create a Document

Documents are **groups of pages** connected through:

- a **sidebar**
- **previous/next navigation**
- **versioning**

## Create your first Doc

Create a Markdown file at `docs/hello.md`:

```md title="docs/hello.md"
# Hello

This is my **first Docusaurus document**!
```

A new document is now available at [http://localhost:3000/docs/hello](http://localhost:3000/docs/hello).

## Configure the Sidebar

Docusaurus automatically **creates a sidebar** from the `docs` folder.

Add metadata to customize the sidebar label and position:

```md title="docs/hello.md" {1-4}
---
sidebar_label: 'Hi!'
sidebar_position: 3
---

# Hello

This is my **first Docusaurus document**!
```

It is also possible to create your sidebar explicitly in `sidebars.js`:

```js title="sidebars.js"
module.exports = {
  tutorialSidebar: [
    'intro',
    // highlight-next-line
    'hello',
    {
      type: 'category',
      label: 'Tutorial',
      items: ['tutorial-basics/create-a-document'],
    },
  ],
};
``` -->

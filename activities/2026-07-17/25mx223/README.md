# Mission Deloitte 2 – Dynamic JSON Form Generator

## Problem Statement

Build a dynamic JSON-driven form generator using React/Next.js that renders nested questionnaires for consulting clients. The application should validate user inputs and support conditional rendering of fields based on previous responses.


## Requirements

- Generate forms dynamically from a JSON schema.
- Support nested sections and questions.
- Validate fields such as required inputs and age restrictions.
- Render conditional fields based on user responses.
- Display validation errors before submission.


## Proposed Solution

The application reads a JSON schema and renders each field dynamically.

A recursive rendering function is used to process nested sections. Each field type (text, number, checkbox, dropdown) is mapped to its corresponding React component.

Conditional logic determines whether a field should be displayed. For example, if the "Employed" checkbox is selected, the "Company Name" field becomes visible.

Validation rules defined in the schema are checked before submission.


## Architecture

JSON Schema
      │
      ▼
Form Renderer
      │
      ▼
React Components
      │
      ▼
State Management
      │
      ▼
Validation Engine
      │
      ▼
Submitted Data


## Design Decisions

- JSON-driven architecture makes the form configurable without changing code.
- Recursive rendering supports unlimited nesting.
- Validation rules are stored in the schema.
- Conditional rendering improves user experience.


## Time Complexity

Rendering:
O(n)

Validation:
O(n)

Space Complexity:
O(n)

where n is the total number of fields.

## Trade-offs

Advantages

- Easy to maintain
- Highly reusable
- Scalable
- Supports complex forms

Disadvantages

- Slightly slower for extremely large schemas
- Recursive rendering increases stack depth for deeply nested forms

## Technologies

- React / Next.js
- JavaScript
- JSON Schema

# JS Profiling Talk, 2024

## Overview

This repository contains the code examples I used in the JS Profiling Talk I gave for my colleagues at Т—Ж.

There are 4 main examples, each demonstrating different aspects of React performance optimization:

1. `todo-list` has no performance issues, used to explain the profile flamegraph
2. `image-gallery` illustrates issues caused by poor DOM manipulation practices and inefficient algorithms
3. `chart` demonstrates layout thrashing by forced reflows
4. `data-viewer` showcases performance issues caused by memory leaks

### Branches

- `main` branch contains examples with performance issues
- `final` branch has the examples that have been fixed

## Run the Examples

Run the script:

```sh
git clone https://github.com/vpukhanov/js-profiling-talk
cd js-profiling-talk
npm install
npm start
```

Then open http://localhost:8080 in your browser

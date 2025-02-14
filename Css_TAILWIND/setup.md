## How to setup tailwaind Css

step 1: Run the following commands

```
npm install -D tailwindcss
npx tailwindcss init
```

Step 2: Update tailwind.config.js file to include this line:

```
content: ["*.html"],
```

Step 3: create src/input.css to include:

```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

Step 4: Include the src/output.css file to your html

Step 5: Run the following command. (1. if included in package.json scripts.)(else use second one)

```
npm run build
npx tailwindcss -i ./src/input.css -o ./src/output.css --watch


```
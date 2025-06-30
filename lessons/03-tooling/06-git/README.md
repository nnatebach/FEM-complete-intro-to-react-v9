# 06. Git

Docs: [https://git-scm.com/docs/gitignore](https://git-scm.com/docs/gitignore)

Learn more about Git at
- Everything You'll Need to Know About Git: [https://frontendmasters.com/courses/everything-git/](https://frontendmasters.com/courses/everything-git/)
- Git In-depth: [https://frontendmasters.com/courses/git-in-depth/](https://frontendmasters.com/courses/git-in-depth/)

- VS Code relies heavily on your git ignore being useful
    
    .gitignore tells git which files (or patterns) it should ignore
    
    **.gitignore**
    
    ```bash
    .DS_Store
    node_modules/
    dist/
    .env
    coverage/
    .vscode
    ```
    
    Explanation:
    
    - **.DS_Store**: a hidden file created by macOS's Finder application in directories you browse. It stores folder-specific metadata, such as icon positions, view options, and other visual preferences.
    - **node_modules**: It is like a cache for the external modules that your project depends upon. When you `npm install` them, they are downloaded from the web and copied into the *node_modules* folder and Node.js is trained to look for them there when you import them (without a specific path).
    - **dist** (short for "distribution"): a directory commonly used in many projects, especially in web development, to store the final, production-ready version of your application or assets. It usually contains the compiled, minified, and optimized files that can be directly served to the end user.
    - **env**: a simple text file that is used **to store environment variables for your application**. This file is typically placed in the root directory of your project and is often added to your project's **.gitignore** file to ensure that sensitive information is not accidentally committed to your version control system.
    - **coverage** (more specifically, code coverage or test coverage): a metric that quantifies the extent to which your application's code is executed when running your test suite. It provides insight into how much of your codebase is being exercised by your tests, helping to identify areas that might be inadequately tested.
    Read more: [**How to get test coverage from Jest while testing React.js App?**](https://stackoverflow.com/questions/28283371/how-to-get-test-coverage-from-jest-while-testing-react-js-app)
    - **.vscode**: it serves as an important component for configuring and customizing the Visual Studio Code (VS Code) editor for web development projects.
    Read more at
    - [**What is a VS Code workspace?](https://code.visualstudio.com/docs/editing/workspaces/workspaces)
    - [What is the significance of the ".vscode" folder in the provided starting code?](https://eitca.org/web-development/eitc-wd-jsf-javascript-fundamentals/getting-started-eitc-wd-jsf-javascript-fundamentals/syntax-and-features/examination-review-syntax-and-features/what-is-the-significance-of-the-vscode-folder-in-the-provided-starting-code/#:~:text=vscode%22%20folder%20is%20the%20%22settings,line%20height%2C%20and%20indentation%20style.)**

- Bonus:
    
    The leading `.` kind of means "hide this folder". It comes from *nix operating systems where by default if you name a file or folder `.anything` it'll get hidden.
# EMACSeract

**EMACSeract** is a VS Code extension that reintroduces essential Emacs-style editing commands—one thoughtful, high-speed keystroke at a time. If you've ever reached for `M-z` or `M-SPC` and been met with despair, this extension is for you.

---

## ✨ Features

### 🔤 Zap to Char (`Alt+Z`)

Delete everything from the cursor up to and including the next occurrence of a character.
Fast, intuitive, and extremely satisfying—just like in Emacs.

> Example:
> `The quick brown |fox jumps over` → press `Alt+Z`, then `j` →
> `The quick brown j|umps over`

---

### 🔧 Shrink Surrounding Spaces (`Alt+Space`)

Collapse multiple spaces or tabs around the cursor into a single space.
Perfect for cleaning up messy, misaligned text.

> Example:
> `One     two    three` → cursor on "two" → press `Alt+Space` →
> `One two three`

---

## 🚀 Installation

1. Clone or download this repository
2. Run:

   ```bash
   npm install  
   npm run build
   ```
3. Package it using:

   ```bash
   vsce package
   ```
4. In VS Code:
   Open the Command Palette → `Extensions: Install from VSIX...`

---

## 🌟 Philosophy

EMACSeract is for developers who:

* Love Emacs muscle memory
* Live in VS Code now
* Miss tiny tools that made them feel like editing gods

We're not rewriting Emacs—we're *stealing its best spells.*

---

## 🧙 Logo Lore

The EMACSeract wizard wears sunglasses because he's here to *zap*, not ask questions.

---

## 🪪 License

MIT

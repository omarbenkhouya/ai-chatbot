# Git Setup & Push Instructions

This document explains how to push your project to GitHub.

## Prerequisites

- Git installed on your system
- GitHub account created
- Repository created on GitHub (empty, no README)

## Step-by-Step Instructions

### 1. Initialize Git Repository

```bash
cd chatbot-app
git init
```

### 2. Add All Files

```bash
git add .
```

### 3. Verify Files to Commit

Check what will be committed (make sure `.env` is NOT in the list):

```bash
git status
```

You should see files like:
- ✅ `.env.example`
- ✅ `src/`
- ✅ `public/`
- ✅ `README.md`
- ✅ `package.json`
- ❌ `.env` (should NOT appear - it's ignored)

### 4. Create Initial Commit

```bash
git commit -m "Initial commit: AI ChatBot application"
```

### 5. Add Remote Repository

Replace `<username>` and `<repository>` with your GitHub details:

```bash
git remote add origin https://github.com/<username>/<repository>.git
```

Or if using SSH:

```bash
git remote add origin git@github.com:<username>/<repository>.git
```

### 6. Push to GitHub

```bash
git branch -M main
git push -u origin main
```

## Security Checklist

Before pushing, verify:

- [ ] `.env` is in `.gitignore`
- [ ] `.env` does NOT appear in `git status`
- [ ] `.env.example` has placeholder values only
- [ ] No API keys in any committed files
- [ ] `node_modules/` is ignored
- [ ] `dist/` is ignored

## After Pushing

1. Visit your repository on GitHub
2. Verify all files are present
3. Check that `.env` is NOT visible
4. Add repository description
5. Add topics/tags: `chatbot`, `typescript`, `ai`, `nodejs`

## Updating Later

When you make changes:

```bash
git add .
git commit -m "Description of changes"
git push
```

## Troubleshooting

**Problem: `.env` appears in git status**
- Solution: Make sure it's in `.gitignore` and run `git rm --cached .env`

**Problem: Push rejected**
- Solution: Pull first with `git pull origin main`, then push again

**Problem: Authentication failed**
- Solution: Use a Personal Access Token instead of password
- Generate at: https://github.com/settings/tokens

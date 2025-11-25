#!/bin/bash

echo "🚀 Vibe Deployment Script"
echo "=========================="
echo ""

# Check if git is initialized
if [ ! -d .git ]; then
    echo "📦 Initializing git repository..."
    git init
    echo "✅ Git initialized"
else
    echo "✅ Git already initialized"
fi

# Check for uncommitted changes
if [[ -n $(git status -s) ]]; then
    echo ""
    echo "📝 Adding all changes..."
    git add .
    
    echo ""
    read -p "Enter commit message: " commit_msg
    git commit -m "$commit_msg"
    echo "✅ Changes committed"
else
    echo "✅ No changes to commit"
fi

echo ""
echo "📋 Next Steps:"
echo "1. Create a repository on GitHub"
echo "2. Run: git remote add origin https://github.com/YOUR_USERNAME/REPO_NAME.git"
echo "3. Run: git branch -M main"
echo "4. Run: git push -u origin main"
echo ""
echo "5. Go to https://vercel.com/new"
echo "6. Import your GitHub repository"
echo "7. Add environment variables (see DEPLOYMENT.md)"
echo "8. Deploy!"
echo ""
echo "📚 See DEPLOYMENT.md for detailed instructions"


export const gitLessons = [
  {
    id: "intro",
    title: {
      en: "Introduction & Installation",
      km: "ការណែនាំ និងការដំឡើង"
    },
    description: {
      en: "Git is a smart tool that tracks every change you make to your code. Think of it as a time machine and a safe backup system that lets you experiment without fear, fix mistakes instantly, and work with a team without overwriting each other's files.",
      km: "Git គឺជាឧបករណ៍ឆ្លាតវៃដែលតាមដានរាល់ការផ្លាស់ប្តូរដែលអ្នកធ្វើចំពោះកូដរបស់អ្នក។ ចាត់ទុកវាដូចជាម៉ាស៊ីនពេលវេលា និងប្រព័ន្ធបម្រុងទុកសុវត្ថិភាពដែលអនុញ្ញាតឱ្យអ្នកធ្វើការសាកល្បងដោយគ្មានការភ័យខ្លាច កែតម្រូវកំហុសភ្លាមៗ និងធ្វើការជាមួយក្រុមដោយមិនសរសេរជាន់លើឯកសាររបស់អ្នកដទៃ។"
    },
    sections: [
      {
        subtitle: { en: "Install on Mac", km: "ដំឡើងនៅលើ Mac" },
        commands: [
          { code: "brew install git", desc: { en: "Install Git via Homebrew", km: "ដំឡើង Git តាមរយៈ Homebrew" } },
          { code: "git --version", desc: { en: "Check installed Git version", km: "ពិនិត្យមើលកំណែ Git ដែលបានដំឡើង" } }
        ]
      },
      {
        subtitle: { en: "Install on Windows", km: "ដំឡើងនៅលើ Windows" },
        commands: [
          { code: "winget install --id Git.Git -e --source winget", desc: { en: "Install Git via Windows Package Manager (winget)", km: "ដំឡើង Git តាមរយៈ Windows Package Manager (winget)" } },
          { code: "git --version", desc: { en: "Check installed Git version", km: "ពិនិត្យមើលកំណែ Git ដែលបានដំឡើង" } }
        ]
      },
      {
        subtitle: { en: "Repositories", km: "ឃ្លាំងផ្ទុកទិន្នន័យ (Repositories)" },
        text: { 
          en: "Repositories are divided into two types: Local & Remote.", 
          km: "ឃ្លាំងផ្ទុកទិន្នន័យត្រូវបានបែងចែកជាពីរប្រភេទ៖ មូលដ្ឋាន (Local) និង ពីចម្ងាយ (Remote)។" 
        },
        commands: [
          { code: "git init", desc: { en: "Local Repository: Hosted directly on your local machine.", km: "Local Repository: ផ្ទុកដោយផ្ទាល់នៅលើកុំព្យូទ័ររបស់អ្នក។" } },
          { code: "git remote add origin https://github.com/username/repo.git", desc: { en: "Remote Repository: Hosted on the cloud (e.g., GitHub or GitLab).", km: "Remote Repository: ផ្ទុកនៅលើ Cloud (ឧ. GitHub ឬ GitLab)។" } }
        ]
      }
    ]
  },
  {
    id: "basic",
    title: { en: "1. Basic (Local Sandbox)", km: "1. មូលដ្ឋានគ្រឹះ (Local Sandbox)" },
    sections: [
      {
        commands: [
          { code: "git init", desc: { en: "Initialize a new, empty repository.", km: "បង្កើតឃ្លាំងផ្ទុកទិន្នន័យថ្មី និងទទេ។" } },
          { code: "git add <filename>", desc: { en: "Add a file's modifications to the staging area.", km: "បន្ថែមការផ្លាស់ប្តូរឯកសារទៅក្នុង Staging Area។" } },
          { code: "git commit -m \"Add note\"", desc: { en: "Record the staged changes to the repository's history with a descriptive message.", km: "កត់ត្រាការផ្លាស់ប្តូរទៅក្នុងប្រវត្តិដោយភ្ជាប់ជាមួយសារពិពណ៌នា។" } },
          { code: "git status", desc: { en: "Check the current state of the working directory and the staging area.", km: "ពិនិត្យមើលស្ថានភាពបច្ចុប្បន្នរបស់ថតឯកសារ និង Staging Area។" } },
          { code: "git log", desc: { en: "View the commit history.", km: "មើលប្រវត្តិនៃការ Commit។" } },
          { code: "git show", desc: { en: "Show the specific changes and details of a particular commit.", km: "បង្ហាញការផ្លាស់ប្តូរ និងព័ត៌មានលម្អិតនៃការ Commit ណាមួយ។" } }
        ]
      }
    ]
  },
  {
    id: "branch",
    title: { en: "2. Branch (Testing)", km: "2. Branch (ការសាកល្បង)" },
    description: { 
      en: "We use branches to split off from the main line of development. This allows us to work on new features or tests safely without altering the original, stable codebase.", 
      km: "យើងប្រើ Branch ដើម្បីបំបែកចេញពីខ្សែអភិវឌ្ឍន៍ចម្បង។ វាអនុញ្ញាតឱ្យយើងធ្វើការលើមុខងារថ្មីៗ ឬសាកល្បងដោយសុវត្ថិភាពដោយមិនប៉ះពាល់ដល់កូដដើម។" 
    },
    sections: [
      {
        subtitle: { en: "Basic Branch Commands", km: "ពាក្យបញ្ជា Branch មូលដ្ឋាន" },
        commands: [
          { code: "git branch", desc: { en: "List all local branches.", km: "បង្ហាញ Branch ទាំងអស់នៅក្នុងម៉ាស៊ីនរបស់អ្នក។" } },
          { code: "git branch <name-file>", desc: { en: "Create a new branch.", km: "បង្កើត Branch ថ្មីមួយ។" } },
          { code: "git checkout <name-file> / git switch <name-file>", desc: { en: "Switch your working directory to the specified branch.", km: "ផ្លាស់ប្តូរទៅកាន់ Branch ណាមួយ។" } }
        ]
      },
      {
        subtitle: { en: "Branch Execution Workflow: Success Path", km: "ដំណើរការ Branch៖ ពេលជោគជ័យ" },
        commands: [
          { code: "git branch test-code\ngit switch test-code\ngit add <filename>\ngit commit -m \"add new feature\"\ngit switch main\ngit merge test-code\ngit branch -d test-code", desc: { en: "Feature completed successfully.", km: "មុខងារត្រូវបានបញ្ចប់ដោយជោគជ័យ។ (បញ្ចូលវាទៅ main ហើយលុប branch ចោល)" } }
        ]
      },
      {
        subtitle: { en: "Branch Execution Workflow: Error Path", km: "ដំណើរការ Branch៖ ពេលបរាជ័យ" },
        commands: [
          { code: "git branch test-code\ngit switch test-code\ngit restore .\ngit restore <filename>\ngit switch main\ngit branch -D test-code", desc: { en: "Experiment failed, discarding changes.", km: "ការសាកល្បងបរាជ័យ ដោយបោះបង់ការផ្លាស់ប្តូរចោល។" } }
        ]
      },
      {
        subtitle: { en: "Merge & Delete Branch", km: "បញ្ចូលគ្នា (Merge) និងលុប Branch" },
        commands: [
          { code: "git checkout main\ngit merge new-file", desc: { en: "Merges the specified branch into main", km: "បញ្ចូល Branch ណាមួយទៅក្នុង main" } },
          { code: "git branch -d new-file", desc: { en: "Delete Branch safely", km: "លុប Branch ដោយសុវត្ថិភាព" } }
        ]
      }
    ]
  },
  {
    id: "remote",
    title: { en: "3. Remote Repositories", km: "3. ឃ្លាំងផ្ទុកពីចម្ងាយ (Remote Repositories)" },
    sections: [
      {
        commands: [
          { code: "git push -u origin main", desc: { en: "Pushing code from your local machine up to the cloud. Only pushes added files. Commit first!", km: "រុញកូដពីម៉ាស៊ីនរបស់អ្នកទៅ Cloud។ (ត្រូវ Commit ជាមុនសិន!)" } },
          { code: "git pull origin main", desc: { en: "Takes code from the cloud and puts it into your local machine. (git fetch + git merge)", km: "ទាញយកកូដពី Cloud មកដាក់ក្នុងម៉ាស៊ីនរបស់អ្នក។" } },
          { code: "git fetch origin", desc: { en: "View and download updates from the remote repository, but it does not merge them into your working folder yet.", km: "មើលនិងទាញយកបច្ចុប្បន្នភាព ប៉ុន្តែវាមិនទាន់បញ្ចូលវា (Merge) ទៅក្នុងថតឯកសាររបស់អ្នកទេ។" } }
        ]
      }
    ]
  },
  {
    id: "delete",
    title: { en: "4. Undoing Changes", km: "4. ការត្រឡប់ក្រោយ (Undoing Changes)" },
    sections: [
      {
        subtitle: { en: "Restore Files", km: "ស្ដារឯកសារឡើងវិញ" },
        commands: [
          { code: "git checkout -- file.txt\ngit restore file.txt", desc: { en: "Both commands discard uncommitted changes in a specific file. `git restore .` takes back all files in the current directory that have been modified but not committed.", km: "បោះបង់ការផ្លាស់ប្តូរដែលមិនទាន់បាន Commit នៅក្នុងឯកសារជាក់លាក់។ `git restore .` បោះបង់ការផ្លាស់ប្តូរទាំងអស់។" } }
        ]
      },
      {
        subtitle: { en: "Undo git add (Unstage files)", km: "ត្រឡប់ក្រោយ git add (Unstage files)" },
        commands: [
          { code: "git reset HEAD <filename>", desc: { en: "If you accidentally staged a file using git add but do not want to commit it yet, you can remove it from the staging area.", km: "ដកឯកសារចេញពី Staging Area វិញ ប្រសិនបើអ្នកជ្រុល add វា។" } }
        ]
      },
      {
        subtitle: { en: "Resetting Commits (Soft/Hard)", km: "កំណត់ Commits ឡើងវិញ (Soft/Hard)" },
        commands: [
          { code: "git reset --soft HEAD~1", desc: { en: "Undoes the last commit but keeps your code changes in the staging area.", km: "លុបចោលការ Commit ចុងក្រោយ ប៉ុន្តែរក្សាទុកកូដរបស់អ្នកនៅក្នុង Staging Area។" } },
          { code: "git reset --hard HEAD~1", desc: { en: "Undoes the last commit AND deletes all associated code changes. (Use with extreme caution!)", km: "លុបចោលការ Commit ព្រមទាំងលុបការផ្លាស់ប្តូរកូដទាំងអស់ផងដែរ។ (ប្រុងប្រយ័ត្នខ្ពស់!)" } }
        ]
      }
    ]
  },
  {
    id: "local-github",
    title: { en: "5. Local Repository to GitHub", km: "5. បញ្ជូន Local Repository ទៅ GitHub" },
    sections: [
      {
        text: { en: "Establish a connection from your local machine to the remote GitHub repository before pushing code.", km: "បង្កើតការភ្ជាប់ពីម៉ាស៊ីនរបស់អ្នកទៅកាន់ GitHub ជាមុនសិន មុននឹងរុញកូដ។" },
        commands: [
          { code: "git remote add origin <URL>.git \n\ngit push -u origin main", desc: { en: "Connect local repo to remote origin and push changes.", km: "ភ្ជាប់ Local ទៅ Remote ហើយរុញការផ្លាស់ប្តូរទៅកាន់ទីនោះ។" } },
        ]
      },
      {
        commands: [
          { 
            code: "git remote set-url origin \"URL\".git", 
            desc: { 
              en: "Update or change the URL of an existing remote repository.", 
              km: "ផ្លាស់ប្តូរ ឬកែប្រែតំណភ្ជាប់ URL របស់ Remote Repository ដែលមានស្រាប់។" 
            } 
          },
          { 
            code: "git remote remove origin", 
            desc: { 
              en: "Remove a remote repository connection entirely from your local project.", 
              km: "ផ្តាច់ ឬលុបការភ្ជាប់ Remote Repository (origin) ចេញពីគម្រោងរបស់អ្នក។" 
            } 
          },
          { 
            code: "git remote -v", 
            desc: { 
              en: "Verify and list all active remote repository URLs.", 
              km: "ពិនិត្យមើល និងបង្ហាញតំណភ្ជាប់ URL របស់ Remote Repositories ទាំងអស់ដែលកំពុងភ្ជាប់។" 
            } 
          }
        ]
      }
    ]
  },
  {
    id: "config",
    title: { en: "6. Git Configuration", km: "6. ការកំណត់រចនាសម្ព័ន្ធ Git (Configuration)" },
    description: { 
      en: "Configuration is used to define your identity credentials so collaborators know exactly who authored specific code changes.", 
      km: "ការកំណត់ត្រូវបានប្រើដើម្បីកំណត់អត្តសញ្ញាណរបស់អ្នក ដើម្បីអោយក្រុមដឹងថាអ្នកណាជាអ្នកផ្លាស់ប្តូរកូដ។" 
    },
    sections: [
      {
        subtitle: { en: "Credentials", km: "ព័ត៌មានសម្គាល់ (Credentials)" },
        commands: [
          { code: "git config --global user.name \"Your Name\"", desc: { en: "Set username", km: "កំណត់ឈ្មោះអ្នកប្រើប្រាស់" } },
          { code: "git config --global user.email \"your.email@example.com\"", desc: { en: "Set email", km: "កំណត់អ៊ីមែល" } },
          { code: "git config --global --list", desc: { en: "Verify defined configuration variables", km: "ផ្ទៀងផ្ទាត់ការកំណត់" } }
        ]
      },
      {
        subtitle: { en: "Setting Code Editors", km: "កំណត់កម្មវិធីសរសេរកូដ (Editors)" },
        commands: [
          { code: "git config --global core.editor \"nano\"", desc: { en: "Nano (Easier than Vim - Common on Mac/Linux)", km: "Nano (ងាយស្រួលជាង Vim)" } },
          { code: "git config --global core.editor \"subl -n -w\"", desc: { en: "Sublime Text (Faster and visual)", km: "Sublime Text" } },
          { code: "git config --global core.editor \"notepad++ -multiInst -nosession\"", desc: { en: "Notepad++ (Common on Windows)", km: "Notepad++ (ទូទៅសម្រាប់ Windows)" } },
          { code: "git config --global core.editor \"vim\"", desc: { en: "Vim (Advanced terminal editor)", km: "Vim (កម្រិតខ្ពស់)" } },
          { code: "git config --global core.editor \"code --wait\"", desc: { en: "VS Code", km: "VS Code" } }
        ]
      }
    ]
  },
  {
    id: "ssh",
    title: { en: "7. Git SSH", km: "7. Git SSH" },
    description: { 
      en: "SSH provides a secure cryptographic connection, setting verification permissions for who can pull and push code to the project.", 
      km: "SSH ផ្តល់នូវការតភ្ជាប់ប្រកបដោយសុវត្ថិភាព សម្រាប់ផ្ទៀងផ្ទាត់សិទ្ធិអ្នកដែលអាចទាញយក និងរុញកូដ។" 
    },
    sections: [
      {
        commands: [
          { code: "ssh-keygen -t ed25519 -C \"your.email@example.com\"", desc: { en: "Generate Key (Press Enter 3 times to accept defaults)", km: "បង្កើត Key (ចុច Enter ៣ ដង ដើម្បីយល់ព្រម)" } },
          { code: "pbcopy < ~/.ssh/id_ed25519.pub", desc: { en: "Copy Key (Mac Terminal command)", km: "ចម្លង Key (សម្រាប់ Mac Terminal)" } },
          { code: "cat ~/.ssh/id_ed25519.pub", desc: { en: "Alternatively, view and copy manually. Then Add to GitHub: Settings -> SSH and GPG keys -> New SSH key -> Paste.", km: "ឬមើលហើយចម្លងវាដោយខ្លួនឯង បន្ទាប់មកយកវាទៅដាក់ក្នុង GitHub។" } },
          { code: "ssh -T git@github.com", desc: { en: "Verify Setup", km: "ផ្ទៀងផ្ទាត់ការដំឡើង" } }
        ]
      }
    ]
  },
  {
    id: "tracking",
    title: { en: "8. Team Tracking & History Inspection", km: "8. ការតាមដានក្រុម និងពិនិត្យប្រវត្តិ" },
    sections: [
      {
        subtitle: { en: "Inspect & Track", km: "ពិនិត្យ និងតាមដាន" },
        commands: [
          { code: "git diff", desc: { en: "Shows the exact line-by-line file differences that are not yet staged.", km: "បង្ហាញភាពខុសគ្នាតាមបន្ទាត់នីមួយៗ ដែលមិនទាន់ត្រូវបានបញ្ជូនទៅ Staging Area។" } },
          { code: "git blame <filename>", desc: { en: "Shows the revision hash and author details for who last modified every single line in a file.", km: "បង្ហាញព័ត៌មានលម្អិតរបស់អ្នកនិពន្ធដែលបានកែប្រែចុងក្រោយលើបន្ទាត់នីមួយៗក្នុងឯកសារ។" } }
        ]
      },
      {
        subtitle: { en: "Compare Commits & Pull Updates", km: "ប្រៀបធៀប Commits និងពិនិត្យកូដថ្មីៗ" },
        commands: [
          { 
            code: "git diff HEAD~1", 
            desc: { 
              en: "View changes made in the very last commit (an easy way to inspect code right after pulling new updates).", 
              km: "ពិនិត្យមើលការផ្លាស់ប្តូរកូដនៅក្នុង Commit ចុងក្រោយគេបំផុត (វិធីងាយស្រួលបំផុតដើម្បីមើលកូដដែលទើបតែ Pull ចូលថ្មីៗ)។" 
            } 
          },
          { 
            code: "git show", 
            desc: { 
              en: "Show the author name, timestamp, and exact line-by-line code changes of the most recent commit.", 
              km: "បង្ហាញទាំងកូដដែលបានផ្លាស់ប្តូរ ឈ្មោះអ្នក Commit និងពេលវេលានៃ Commit ចុងក្រោយគេ។" 
            } 
          },
          { 
            code: "git diff <commit_1> <commit_2>", 
            desc: { 
              en: "Compare differences between two specific commit IDs (e.g., checking code before and after running git pull).", 
              km: "ប្រៀបធៀបភាពខុសគ្នានៃកូដរវាង Commit ID ពីរជាក់លាក់ (ឧទាហរណ៍៖ មើលការផ្លាស់ប្តូរពី 61d5688 ទៅ 37f8ab2)។" 
            } 
          },
          { 
            code: "git log", 
            desc: { 
              en: "View the full chronological history of all commits made in the repository.", 
              km: "មើលប្រវត្តិ Commit ទាំងអស់ដែលមាននៅក្នុងគម្រោងតាមលំដាប់លំដោយពេលវេលា។" 
            } 
          }
        ]
      }
    ]
  },
  {
    id: "advanced",
    title: { en: "9. Time Travel & Stashing (Advanced)", km: "9. ការវិលថយក្រោយ និង Stashing (កម្រិតខ្ពស់)" },
    description: { en: "(Deeply checked to ensure precise logic definitions)", km: "(ត្រូវបានត្រួតពិនិត្យយ៉ាងហ្មត់ចត់ដើម្បីធានានូវនិយមន័យច្បាស់លាស់)" },
    sections: [
      {
        commands: [
          { code: "git stash", desc: { en: "Safely hides (stashes) your modified, uncommitted code so you can temporarily work on a different branch or task without losing data.", km: "លាក់ទុកកូដដែលបានផ្លាស់ប្តូរ និងមិនទាន់បាន Commit ដោយសុវត្ថិភាព ដើម្បីឱ្យអ្នកអាចធ្វើការងារផ្សេងទៀតបាន។" } },
          { code: "git stash pop", desc: { en: "Applies your temporarily stashed code back into your working directory and removes it from the stash memory.", km: "ទាញយកកូដដែលបានលាក់ទុក មកដាក់ក្នុង Working Directory វិញ។" } },
          { code: "git reset --hard HEAD", desc: { en: "Completely discards all new, uncommitted changes in your working directory, forcefully reverting files to the state of the last commit.", km: "បោះបង់ការផ្លាស់ប្តូរថ្មីៗទាំងអស់ទាំងស្រុង ដោយបង្ខំឱ្យឯកសារត្រឡប់ទៅស្ថានភាព Commit ចុងក្រោយវិញ។" } },
          { code: "git branch -d <name-branch>", desc: { en: "Safely deletes a branch. Git will block this action if the branch has unmerged changes to protect your data.", km: "លុប Branch ដោយសុវត្ថិភាព។ Git នឹងរារាំងសកម្មភាពនេះប្រសិនបើវាមិនទាន់ត្រូវបានបញ្ចូល (Merge) ។" } },
          { code: "git branch -D <name-branch>", desc: { en: "Forcefully deletes a branch, completely overriding safety checks regardless of whether it has been merged.", km: "លុប Branch ដោយបង្ខំ ទោះបីជាវាមិនទាន់ត្រូវបានបញ្ចូល (Merge) ក៏ដោយ។" } },
          { code: "git reset <commit-id>", desc: { en: "Moves the branch pointer backward to an older commit ID, erasing the history of all commits that happened after it.", km: "រំកិល Branch ត្រឡប់ទៅ Commit ID ចាស់ ដោយលុបប្រវត្តិ Commit ដែលបានកើតឡើងបន្ទាប់ពីវា។" } },
          { code: "git revert <commit-id>", desc: { en: "Goes backward by generating a brand new commit that strictly undoes the changes introduced by a previous commit, perfectly preserving the overall project history without deleting data.", km: "ត្រឡប់ថយក្រោយដោយបង្កើត Commit ថ្មីមួយ ដែលលុបចោលការផ្លាស់ប្តូរនៃ Commit មុនៗ ដោយរក្សាប្រវត្តិគម្រោងទាំងមូល។" } }
        ]
      }
    ]
  },
  {
    id: "collaboration",
    title: { en: "10. Team Collaboration Workflow & Roles", km: "10. ដំណើរការសហការជាក្រុម និងតួនាទី" },
    description: { 
      en: "When working in a team, Git requires a clear division of responsibilities to prevent code conflicts. Here is the exact step-by-step workflow for the Project Leader and Teammates.", 
      km: "នៅពេលធ្វើការជាក្រុម Git ទាមទារឱ្យមានការបែងចែកទំនួលខុសត្រូវច្បាស់លាស់ ដើម្បីការពារការប៉ះទង្គិចកូដ។ នេះគឺជាដំណើរការមួយជំហានម្តងៗសម្រាប់ប្រធានគម្រោង និងសមាជិកក្រុម។" 
    },
    sections: [
      {
        subtitle: { en: "1. Project Leader — Repository Setup", km: "1. ប្រធានគម្រោង — ការរៀបចំឃ្លាំងផ្ទុក" },
        text: { en: "The Project Leader is responsible for initializing the core project on their local Mac, pushing the first version to GitHub, and granting repository access to the rest of the team.", km: "ប្រធានគម្រោងទទួលខុសត្រូវក្នុងការបង្កើតគម្រោង រុញកំណែដំបូងទៅ GitHub និងផ្តល់សិទ្ធិឱ្យក្រុម។" },
        commands: [
          { 
            code: "git init\ngit add .\ngit commit -m \"Initial project setup\"\ngit remote add origin <repo-URL>\ngit push -u origin main", 
            desc: { en: "Initialize the project locally on your Mac, stage all files, commit them, connect to the remote GitHub repo, and push the initial codebase.", km: "បង្កើតគម្រោង ជ្រើសរើសឯកសារ Commit ភ្ជាប់ទៅ GitHub និងរុញកូដ។" }
          },
          { 
            code: "GitHub Repo -> Settings -> Collaborators -> Add people", 
            desc: { en: "Invite teammates: Go to your project repository on GitHub, click Settings, select 'Collaborators', and invite teammates using their GitHub username or email so they have push/pull permissions.", km: "អញ្ជើញសមាជិកក្រុម៖ ទៅកាន់ Settings ជ្រើសរើស Collaborators និងបន្ថែមសមាជិកក្រុមតាមរយៈឈ្មោះអ្នកប្រើប្រាស់ ឬអ៊ីមែល។" }
          }
        ]
      },
      {
          subtitle: { en: "2. Teammates — Cloning & Synchronizing", km: "2. សមាជិកក្រុម — ការចម្លង និងធ្វើសមកាលកម្ម" },
          text: { en: "Teammates download the project repository first, set up their identity configuration, generate secure SSH access keys, and then follow the daily synchronization loop.", km: "សមាជិកក្រុមទាញយកគម្រោង រៀបចំអត្តសញ្ញាណ បង្កើត SSH Key និងអនុវត្តតាមវដ្តសមកាលកម្មប្រចាំថ្ងៃ។" },
          commands: [
            { 
              code: "git clone <repository-URL>", 
              desc: { en: "Step 1 (Git Clone): Pull/download the entire shared project from GitHub directly onto your local machine so you have all the files.", km: "ជំហានទី 1 (Git Clone)៖ ទាញយកគម្រោងរួមគ្នាពី GitHub មកកាន់ម៉ាស៊ីនរបស់អ្នកផ្ទាល់។" }
            },
            { 
              code: "git config --global user.name \"Your Name\"\ngit config --global user.email \"your.email@example.com\"", 
              desc: { en: "Step 2 (Git Config): Define your name and email so the project leader and teammates can clearly track who authored specific commits.", km: "ជំហានទី 2 (Git Config)៖ កំណត់ឈ្មោះ និងអ៊ីមែលរបស់អ្នកដើម្បីអោយប្រធានគម្រោង និងសមាជិកដឹងថាអ្នកណាជាអ្នក Commit។" }
            },
            { 
              code: "ssh-keygen -t ed25519 -C \"your.email@example.com\"", 
              desc: { en: "Step 3 (Create SSH Key): Generate your SSH key and paste the public key (~/.ssh/id_ed25519.pub) into GitHub Settings -> SSH and GPG keys. This gives your machine secure cryptographic permission to pull and push changes.", km: "ជំហានទី 3 (Create SSH Key)៖ បង្កើត SSH Key របស់អ្នក ហើយបញ្ចូលវាទៅក្នុង GitHub ដើម្បីទទួលបានសិទ្ធិទាញយក និងរុញការផ្លាស់ប្តូរដោយសុវត្ថិភាព។" }
            },
            { 
              code: "git remote add origin <URL>.git \n\ngit pull origin main \n\n# ... make your code changes and commit ...\n\ngit push origin main", 
              desc: { en: "Step 4 (Daily Collaboration Loop): Always run `git pull` BEFORE starting work to grab the newest updates from your team. Once your changes are staged and committed, run `git push` to send your work back to GitHub smoothly.", km: "ជំហានទី 4 (វដ្តនៃការសហការប្រចាំថ្ងៃ)៖ ត្រូវរត់ `git pull` ជានិច្ច មុននឹងចាប់ផ្តើមការងារ ដើម្បីទទួលបានបច្ចុប្បន្នភាពថ្មីៗពីក្រុម។ ពេលដែលអ្នក Commit រួច ត្រូវរត់ `git push`។" }
            }
          ]
        }
      ]
    }
    
];